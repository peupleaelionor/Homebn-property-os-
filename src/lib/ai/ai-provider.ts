/**
 * AI Provider — supports OpenAI, Anthropic, LMNOX, or local fallback.
 * The build NEVER fails if no API key is provided.
 */

export type AIProviderType = "openai" | "anthropic" | "lmnox" | "local";

export interface AIConfig {
  provider: AIProviderType;
  apiKey?: string;
  apiUrl?: string;
  model?: string;
}

export function getAIConfig(): AIConfig {
  if (process.env.OPENAI_API_KEY) {
    return {
      provider: "openai",
      apiKey: process.env.OPENAI_API_KEY,
      model: "gpt-4o-mini",
    };
  }

  if (process.env.ANTHROPIC_API_KEY) {
    return {
      provider: "anthropic",
      apiKey: process.env.ANTHROPIC_API_KEY,
      model: "claude-3-haiku-20240307",
    };
  }

  if (process.env.LMNOX_API_KEY && process.env.LMNOX_API_URL) {
    return {
      provider: "lmnox",
      apiKey: process.env.LMNOX_API_KEY,
      apiUrl: process.env.LMNOX_API_URL,
    };
  }

  return { provider: "local" };
}

export function isAIAvailable(): boolean {
  return getAIConfig().provider !== "local";
}

export async function callAI(
  prompt: string,
  systemPrompt?: string
): Promise<string> {
  const config = getAIConfig();

  if (config.provider === "local") {
    return "";
  }

  try {
    if (config.provider === "openai") {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.apiKey}`,
          },
          body: JSON.stringify({
            model: config.model ?? "gpt-4o-mini",
            messages: [
              ...(systemPrompt
                ? [{ role: "system", content: systemPrompt }]
                : []),
              { role: "user", content: prompt },
            ],
            max_tokens: 1024,
            temperature: 0.4,
          }),
        }
      );
      const data = await response.json();
      return data.choices?.[0]?.message?.content ?? "";
    }

    if (config.provider === "anthropic") {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": config.apiKey ?? "",
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: config.model ?? "claude-3-haiku-20240307",
          max_tokens: 1024,
          system: systemPrompt ?? "",
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await response.json();
      return data.content?.[0]?.text ?? "";
    }

    if (config.provider === "lmnox" && config.apiUrl) {
      const response = await fetch(config.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.apiKey}`,
        },
        body: JSON.stringify({ prompt, system: systemPrompt }),
      });
      const data = await response.json();
      return data.text ?? data.content ?? "";
    }
  } catch {
    // Silently fall through to empty string — never crash the build
  }

  return "";
}

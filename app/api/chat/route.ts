import { type NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"
import { KAAVYA_SYSTEM_PROMPT } from "@/lib/kaavya-context"
import { getFallbackResponse } from "@/lib/fallback-responses"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      console.log("❌ No OpenAI API key found in environment variables")
      const fallbackResponse = getFallbackResponse(message)
      return NextResponse.json({ response: fallbackResponse, fallback: true })
    }

    console.log("✅ OpenAI API key found, attempting connection...")

    try {
      // Build the conversation with system prompt
      const messages = [
        {
          role: "system" as const,
          content: KAAVYA_SYSTEM_PROMPT,
        },
        // Include previous conversation for context (limit to last 8 messages to save tokens)
        ...conversationHistory.slice(-8).map((msg: any) => ({
          role: msg.isUser ? ("user" as const) : ("assistant" as const),
          content: msg.text,
        })),
        {
          role: "user" as const,
          content: message,
        },
      ]

      console.log("🚀 Sending request to OpenAI...")

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages,
        max_tokens: 400,
        temperature: 0.7,
      })

      const response = completion.choices[0]?.message?.content

      if (!response) {
        throw new Error("No response generated from OpenAI")
      }

      console.log("✅ Successfully received response from OpenAI")
      return NextResponse.json({ response })
    } catch (openaiError: any) {
      console.error("❌ OpenAI API error:", {
        message: openaiError.message,
        code: openaiError.code,
        status: openaiError.status,
        type: openaiError.type,
      })

      // Use fallback for specific OpenAI errors
      if (
        openaiError?.code === "insufficient_quota" ||
        openaiError?.code === "rate_limit_exceeded" ||
        openaiError?.status === 429 ||
        openaiError?.status === 503 ||
        openaiError?.code === "invalid_api_key"
      ) {
        console.log("🔄 Using fallback response due to API issue")
        const fallbackResponse = getFallbackResponse(message)
        return NextResponse.json({
          response: fallbackResponse,
          fallback: true,
          fallbackReason: openaiError.message || "API temporarily unavailable",
        })
      }

      // Re-throw other errors
      throw openaiError
    }
  } catch (error: any) {
    console.error("❌ Chat API error:", error)

    // Final fallback for any other errors
    const fallbackResponse = getFallbackResponse("")
    return NextResponse.json({
      response: fallbackResponse,
      fallback: true,
      fallbackReason: "Service temporarily unavailable",
    })
  }
}

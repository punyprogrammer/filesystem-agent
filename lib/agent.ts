/**
 * Fill in the agent by following the course instructions:
 * https://vercel.com/academy/filesystem-agents/agent-skeleton
 */

import { ToolLoopAgent } from "ai";

export let agent = new ToolLoopAgent({
  model: "anthropic/claude-sonnet-4.5",
});

/**
 * Fill in the agent by following the course instructions:
 * https://vercel.com/academy/filesystem-agents/agent-skeleton
 */

import { Sandbox } from "@vercel/sandbox";
import { ToolLoopAgent } from "ai";
import { createBashTool } from "./tools";

const sandbox = await Sandbox.create();

export let agent = new ToolLoopAgent({
  model: "anthropic/claude-sonnet-4.5",
  tools: {
    bashTool: createBashTool(sandbox),
  },
});

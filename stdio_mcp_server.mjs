#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "wearedistributed",
  boardId: "wearedistributed-official",
  domain: "wearedistributed.org",
  npmName: "zc-wearedistributed-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});

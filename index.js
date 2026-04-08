#!/usr/bin/env node
/**
 * MERX Claude Code Plugin -- programmatic entry point.
 *
 * This module is here for two reasons:
 *
 *   1. It exports the plugin's manifest in a format any Node tool or
 *      registry can introspect (Tessl, Glama, custom marketplaces, etc.).
 *   2. When invoked directly (`node index.js` or `npx`), it prints the
 *      Claude Code marketplace install command -- the same content as
 *      install.sh, but in JavaScript so the repo carries a JS language
 *      signal for skill registries that don't index Markdown.
 *
 * The plugin itself is a Claude Code marketplace bundle. The actual
 * runtime entries are:
 *
 *   - .claude-plugin/plugin.json       -- plugin manifest
 *   - .claude-plugin/marketplace.json  -- marketplace listing
 *   - .mcp.json                        -- MCP server auto-registration
 *   - commands/*.md                    -- 6 slash commands
 *   - agents/*.md                      -- 1 sub-agent
 *
 * Source: https://github.com/Hovsteder/merx-claude-plugin
 */

'use strict';

/**
 * Plugin manifest (mirrors .claude-plugin/plugin.json so external tools
 * can require() this module without parsing JSON files manually).
 */
const manifest = {
  name: 'merx',
  version: '1.0.0',
  description:
    'TRON infrastructure layer for AI agents -- 66-tool MCP server, ' +
    'energy market across 6 providers, USDT/USDC/USDD payments, ' +
    'x402 v2 facilitator. One-line install for Claude Code.',
  author: {
    name: 'MERX',
    email: 'team@merx.exchange',
    url: 'https://merx.exchange',
  },
  homepage: 'https://merx.exchange',
  repository: 'https://github.com/Hovsteder/merx-claude-plugin',
  license: 'MIT',
  keywords: [
    'tron',
    'tron-agents',
    'blockchain',
    'energy',
    'usdt',
    'usdc',
    'usdd',
    'stablecoin',
    'x402',
    'gasfree',
    'agent-payments',
    'mcp',
  ],
};

/**
 * MCP server endpoint that this plugin auto-registers.
 */
const mcpServer = {
  type: 'sse',
  url: 'https://merx.exchange/mcp/sse',
  toolCount: 66,
  promptCount: 30,
  resourceCount: 21,
};

/**
 * Slash commands shipped with the plugin. Each entry mirrors a markdown
 * file under commands/.
 */
const slashCommands = [
  {
    name: 'merx:setup',
    description:
      "First-time setup: API key, connection test, capability tour",
  },
  {
    name: 'merx:prices',
    description:
      'Live TRON energy and bandwidth prices across all 6 providers',
  },
  {
    name: 'merx:buy-energy',
    description:
      'Buy energy via the cheapest provider, delegated to a target address',
  },
  {
    name: 'merx:balance',
    description: 'MERX prepaid balance, recent orders, free-tier usage',
  },
  {
    name: 'merx:tx',
    description: 'Look up a TRON transaction with structured fields',
  },
  {
    name: 'merx:send',
    description:
      'Send TRC-20 stablecoin via the agent payment service',
  },
];

/**
 * Sub-agents shipped with the plugin.
 */
const subAgents = [
  {
    name: 'tron-agent-engineer',
    description:
      'TRON infrastructure specialist with workflow templates for ' +
      'x402, GasFree, address watching, and agentic payments',
  },
];

/**
 * Print the install instructions to stdout. Used when this script is
 * invoked directly (node index.js).
 */
function printInstall() {
  const out = [
    '',
    'MERX Claude Code Plugin',
    'TRON infrastructure for AI agents on Claude Code',
    '',
    'Install in your Claude Code session:',
    '',
    '  /plugin marketplace add Hovsteder/merx-claude-plugin',
    '  /plugin install merx@merx',
    '  /merx:setup',
    '',
    'Available commands:',
  ];
  for (const cmd of slashCommands) {
    out.push('  /' + cmd.name + '  --  ' + cmd.description);
  }
  out.push('');
  out.push('Sub-agents:');
  for (const agent of subAgents) {
    out.push('  ' + agent.name + '  --  ' + agent.description);
  }
  out.push('');
  out.push('Get an API key:    https://merx.exchange/dashboard/api-keys');
  out.push('Documentation:     https://merx.exchange/docs/tools/mcp-server');
  out.push('Source code:       https://github.com/Hovsteder/merx-claude-plugin');
  out.push('MERX platform:     https://merx.exchange');
  out.push('');
  console.log(out.join('\n'));
}

module.exports = {
  manifest,
  mcpServer,
  slashCommands,
  subAgents,
  printInstall,
};

if (require.main === module) {
  printInstall();
}

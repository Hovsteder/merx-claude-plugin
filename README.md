# merx — Claude Code Plugin

**TRON infrastructure for AI agents, in one Claude Code command.**

This plugin connects Claude Code to the [MERX](https://merx.exchange)
hosted MCP server (66 tools), adds slash commands for the most common
TRON operations, and ships a `tron-agent-engineer` subagent specialized
in building agentic payment workflows on TRON.

## What you get

After installing this plugin, your Claude Code session can:

- **Query the live TRON energy market** across 6 providers (CatFee, Netts, TronSave, iTRX, PowerSun, TEM)
- **Buy energy** through the cheapest provider with one command
- **Send TRC-20 stablecoins** (USDT live; USDD/USDC next sprint) through the MERX agent payment service with automatic resource provisioning
- **Watch addresses** with sub-3-second webhook notifications
- **Look up TRON transactions** with structured field extraction
- **Build x402 v2 payment flows** for monetizing your own APIs in TRON USDT, USDC, or USDD
- **Send USDT from a wallet with zero TRX** via the MERX-deployed GasFreeController on mainnet
- **Use natural language** to create standing orders and resource automation through the MERX Policy Engine

The hosted MCP server ([https://merx.exchange/mcp/sse](https://merx.exchange/mcp/sse))
exposes 66 tools across 18 categories: pricing, estimation, trading,
account, chain, network, tokens, contracts, DEX, onboarding, payments,
intent, standing-orders, withdraw, policy, broadcast, agent-payments,
and convenience helpers.

## Install

This plugin is distributed as a Claude Code marketplace. Add it once,
install the plugin, and you're done:

```
/plugin marketplace add Hovsteder/merx-claude-plugin
/plugin install merx@merx
```

Then run `/merx:setup` to configure your MERX API key and verify the
connection.

## Slash commands

| Command | What it does |
|---|---|
| `/merx:setup` | First-time setup: API key, connection test, capability tour |
| `/merx:prices` | Live TRON energy and bandwidth prices across all providers |
| `/merx:buy-energy` | Buy energy via cheapest provider, delegated to a target address |
| `/merx:balance` | MERX prepaid balance, recent orders, free-tier usage |
| `/merx:tx` | Look up a TRON transaction with structured fields |
| `/merx:send` | Send TRC-20 stablecoin via the MERX agent payment service |

Every command that costs money asks for explicit confirmation before
broadcasting. No silent spends.

## Subagent

`tron-agent-engineer` — invoke when you're building an AI agent workflow
that touches TRON. Trained on the MERX platform and the broader TRON
ecosystem, with hard-coded safety rules around TRX burn prevention and
spend confirmation.

```
> use the tron-agent-engineer subagent to design an x402-paid API for our weather service
```

## Configuration

Most read-only tools work with no setup. For trading, balance, and agent
payment operations, set:

```bash
export MERX_API_KEY=sk_live_...
```

Get a key at [merx.exchange/dashboard/api-keys](https://merx.exchange/dashboard/api-keys).

For tools that sign transactions locally (transfers, swaps, contract
calls), the signer reads `TRON_PRIVATE_KEY` from the environment. The
key never leaves your machine.

## How it works

This plugin is a thin wrapper. The actual heavy lifting happens in:

1. **The hosted MCP server** at `https://merx.exchange/mcp/sse` —
   66 tools, MCP protocol versions 2024-11-05 / 2025-03-26 / 2025-06-18
2. **The MERX REST API** at `https://merx.exchange/api/v1/` — 70+
   versioned endpoints
3. **The MERX agent payment service** at `https://agent.merx.exchange/api/v1/agent/`
4. **The MERX x402 facilitator** at `https://x402.merx.exchange`

The plugin itself is just `.mcp.json` (auto-registers the MCP server),
six slash commands, and one subagent. Source is on GitHub: see the
repository link below.

## Links

- **MERX platform:** [https://merx.exchange](https://merx.exchange)
- **Documentation:** [https://merx.exchange/docs](https://merx.exchange/docs)
- **MCP server reference:** [https://merx.exchange/docs/tools/mcp-server](https://merx.exchange/docs/tools/mcp-server)
- **Source code:** [https://github.com/Hovsteder/merx-claude-plugin](https://github.com/Hovsteder/merx-claude-plugin)
- **MERX MCP server source:** [https://github.com/Hovsteder/merx-mcp](https://github.com/Hovsteder/merx-mcp)
- **JS SDK:** [merx-sdk on npm](https://www.npmjs.com/package/merx-sdk)
- **Python SDK:** [merx-sdk on PyPI](https://pypi.org/project/merx-sdk/)
- **x402 middleware:** [merx-x402 on npm](https://www.npmjs.com/package/merx-x402)

## License

MIT

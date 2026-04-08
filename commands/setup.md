---
description: First-time MERX setup — checks credentials and walks the user through any missing steps
---

Walk the user through MERX onboarding so the rest of the merx slash commands
work. This is the first thing a new user should run after installing this
plugin.

Steps:
1. **Check `MERX_API_KEY` env var.** If absent, instruct the user to:
   - Visit https://merx.exchange/dashboard/api-keys
   - Create a key with the scopes they need: `view_balance` (always), `create_orders` (energy buys), `agent` (agent payment service), `facilitator` (x402)
   - Set it in their shell: `export MERX_API_KEY=sk_live_...`
   - Restart Claude Code so the env var is picked up

2. **Verify the key works.** Call the `get_balance` MCP tool. If it 401s,
   the key is invalid or revoked — point back to the dashboard.

3. **Detect TRON wallet (optional).** If the user has signing tools enabled,
   check `TRON_PRIVATE_KEY` and remind them this key never leaves their
   machine.

4. **Show them what they can do now.** List the 5 most useful commands:
   - `/merx:prices` — current energy market
   - `/merx:buy-energy` — buy energy via cheapest provider
   - `/merx:balance` — account state
   - `/merx:tx` — look up a transaction
   - `/merx:send` — send USDT through the agent payment service

5. Suggest the `tron-agent-engineer` subagent for building agentic payment
   workflows.

Keep this concise. The user just installed a plugin, they don't want a wall
of text.

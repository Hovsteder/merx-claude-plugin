---
description: Send TRC-20 stablecoin from your wallet via MERX agent payment service
argument-hint: "<amount> <token: USDT|USDC|USDD> to <address> [from <wallet-label>]"
---

Send a TRC-20 stablecoin transfer through the MERX agent payment service at
agent.merx.exchange. MERX automatically estimates the energy and bandwidth
needed, purchases only the deficit from the cheapest provider, and broadcasts
the pre-signed transaction.

Parse from $ARGUMENTS:
- amount (positive number)
- token (USDT, USDC, or USDD — case-insensitive)
- destination TRON address (must validate)
- optional `from` wallet label (defaults to the user's primary registered agent)

Steps:
1. **Validate everything.** Token must be one of USDT/USDC/USDD. Address must be base58 starting with `T`. Amount must be positive.
2. Call the MCP tool `agent_estimate_send` (or equivalent) to compute exact energy needed and the projected cost.
3. **Show the user the breakdown** (amount, recipient, energy cost in TRX or "covered by free tier") and **wait for explicit confirmation.** This costs real money.
4. On confirmation, call `agent_send` with the validated parameters.
5. Report the txid and the TronScan link.

NOTE: Send is currently live for USDT only. For USDC and USDD send, fall back
to the user holding their own private key and using `transfer_trc20` directly,
and explain that native agent.merx.exchange send for USDC/USDD ships in the
next sprint.

Requires `MERX_API_KEY` with `agent` scope.

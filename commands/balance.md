---
description: Check MERX account balance and recent activity
---

Use the MERX MCP tools to give the user a complete picture of their MERX
account state.

1. Call `get_balance` to retrieve the prepaid balance, total spent, and any
   pending holds.
2. Call `list_orders` with `limit=5` to show the 5 most recent energy orders
   (provider, amount, status, timestamp).
3. If the user has the `agent` permission scope on their key, also call the
   agent payment service `agent_billing_balance` and `agent_billing_usage`
   tools to show free-tier consumption (receives, sends, swaps, watches,
   x402 settlements).

Format the output as 2-3 compact sections. Do not dump raw JSON.

Requires `MERX_API_KEY`. If missing, direct the user to
https://merx.exchange/dashboard/api-keys.

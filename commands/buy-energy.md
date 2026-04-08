---
description: Buy TRON energy via the cheapest available provider through MERX
argument-hint: "<amount> <target-address> [duration-seconds]"
---

Buy TRON energy from the cheapest available provider through the MERX
aggregator and have it delegated to a specific TRON address.

Arguments (parse from $ARGUMENTS):
- amount: energy units required (e.g. 65000 for one USDT transfer to a cold wallet, or ~32000 for a hot one)
- target-address: TRON address to receive the delegation (validate it starts with `T` and is 34 chars)
- duration: optional, in seconds — default 3600 (1h). Common values: 3600 (1h), 86400 (1d), 2592000 (30d)

Steps the assistant must follow:
1. **Validate inputs.** If the target address is missing or malformed, ask once and stop.
2. Call `get_best_price` with `resource=ENERGY` and the requested amount to find the cheapest provider for this size.
3. Show the user the estimated cost (in TRX) and the provider name BEFORE creating the order.
4. **Wait for explicit user confirmation.** This costs real TRX. Do not proceed without a clear yes.
5. On confirmation, call `create_order` with the validated parameters.
6. Poll `get_order_status` until the order is filled or fails (timeout 60s).
7. Report the final status, the txid, and the delegation expiry time.

Requires `MERX_API_KEY` to be set in the environment. If it is not set, point the user to https://merx.exchange/dashboard/api-keys and stop.

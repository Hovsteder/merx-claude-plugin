---
description: Show current TRON energy and bandwidth prices across all 6 active providers
---

Use the MERX MCP tool `get_prices` (no auth required) to fetch the current
energy market across all 6 active providers (CatFee, Netts, TronSave, iTRX,
PowerSun, TEM).

If the user asked about a specific duration (5min / 1h / 1d / 7d / 30d), pass
it as `duration` in seconds (3600 = 1h, 86400 = 1d, 604800 = 7d, 2592000 = 30d).
Otherwise show all tiers.

Present the result as a compact table sorted by price ascending, and call
out the cheapest provider explicitly.

After showing prices, offer to either:
1. Drill into a specific provider with `get_provider_info`
2. Estimate the energy cost of a specific operation with `estimate_energy`
3. Buy energy via the cheapest route with `/merx:buy-energy`

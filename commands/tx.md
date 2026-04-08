---
description: Look up a TRON transaction by id
argument-hint: "<txid>"
---

Look up a TRON transaction by its txid (the 64-character hex string from
$ARGUMENTS) using the MERX MCP tool `get_transaction`.

If the txid is missing or doesn't look like 64 hex chars, ask once and stop.

Show the user:
- Block number and timestamp
- From / to addresses (and what they are if MERX recognizes them — provider, GasFreeController, USDT contract, etc.)
- Method called (if it's a contract interaction — e.g. `transfer`, `permitTransfer`, `triggerSmartContract`)
- Energy and bandwidth consumed
- TRX cost (if any)
- Success / revert status with the revert reason if applicable

Add a TronScan link at the bottom: `https://tronscan.org/#/transaction/<txid>`.

No API key required for this lookup.

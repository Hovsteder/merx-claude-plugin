#!/usr/bin/env bash
#
# MERX Claude Code Plugin -- install reference
#
# This is a Claude Code plugin, not a standalone CLI. The plugin itself
# installs through Claude Code's plugin marketplace command. This script
# just prints the install instructions in case you curl'd the repo URL
# expecting an installer.
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/Hovsteder/merx-claude-plugin/main/install.sh | bash
#

set -euo pipefail

GREEN="\033[0;32m"
BOLD="\033[1m"
DIM="\033[2m"
RESET="\033[0m"

cat <<EOF

${BOLD}MERX Claude Code Plugin${RESET}
${DIM}TRON infrastructure for AI agents on Claude Code${RESET}

This is a Claude Code plugin, not a standalone CLI program. To install,
open your Claude Code session and run these two commands:

  ${GREEN}/plugin marketplace add Hovsteder/merx-claude-plugin${RESET}
  ${GREEN}/plugin install merx@merx${RESET}

After installing, configure your MERX API key:

  ${GREEN}/merx:setup${RESET}

You'll then have:
  - 6 slash commands: /merx:prices, /merx:buy-energy, /merx:balance,
                      /merx:tx, /merx:send, /merx:setup
  - 1 sub-agent: tron-agent-engineer (TRON workflow specialist)
  - The MERX MCP server (66 tools) auto-registered against
    https://merx.exchange/mcp/sse

${BOLD}Links${RESET}
  Get an API key:    https://merx.exchange/dashboard/api-keys
  MCP documentation: https://merx.exchange/docs/tools/mcp-server
  Source code:       https://github.com/Hovsteder/merx-claude-plugin
  MERX platform:     https://merx.exchange

EOF

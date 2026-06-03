# NovaEvents App

Frontend for NovaEvents — a transparent event management platform on Stellar.

Built with Next.js, TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styles:** Tailwind CSS
- **Contract interaction:** `@stellar/stellar-sdk` (to be integrated)

## Open for contributors

- Connect wallet (Freighter)
- Organizer dashboard — create events, manage tiers
- Attendee view — browse events, buy tickets
- Sponsor view — contribute to events, see public sponsorship breakdown
- Ticket wallet — view owned tickets, show QR for check-in

See the [Issues](https://github.com/OlaGreat/NovaEvents-app/issues) tab for scoped tasks.

## Related repos

- [NovaEvents contract](https://github.com/OlaGreat/NovaEvents) — Soroban smart contract (Rust)
- [NovaEvents API](https://github.com/OlaGreat/NovaEvents-api) — off-chain indexing and notifications

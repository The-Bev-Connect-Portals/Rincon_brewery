# Brand Portal — Rincon Brewery

A static storefront that wears the brand's identity, reads its catalog from
Shopify's Storefront API, and hands off to Shopify checkout where Go-To Gifting
is the seller of record.

No framework, no build step. Plain HTML/CSS/ES modules on Netlify.

---

## COMPLIANCE — read before touching checkout

**Alcohol DTC legality keys off the destination state.** Not billing address,
not the product page. Enforcement belongs at checkout, in Shopify.

- Destination-state screening and age verification live **entirely in the
  Go-To Gifting Shopify checkout**. That's the upside of this architecture:
  one place to get it right, shared by every brand portal.
- The `shippingLine` in `brand.config.js` is **display only**, for customer
  expectation-setting. It must never be the enforcement layer, and it does not
  name specific states — the attorney-confirmed list does not exist yet.
  **Do not invent a list. Do not copy one off a marketing site.**
- Cart-scoped checkout validation for destination-state screening is a known
  open item. Confirm with James before assuming it's done.

**Entity separation is load-bearing.** The storefront wears Rincon. Every
legally operative surface — checkout, receipt, confirmation email, shipping
label — is Go-To Gifting, which holds the Type 21 license. Do not blur this to
make the handoff feel more seamless. The disclosure line in the cart drawer
(`sellerNote`) stays visible.

---

## Onboarding a new brand

1. Copy this repo.
2. Edit `brand.config.js` — identity, colors, fonts, copy, filters, `vendorTag`.
3. Drop `logo.png` (or `.svg`) + `favicon.png` into `assets/`.
   Set `logoIncludesName: true` if the logo art already contains the
   brand name — the header then hides the text wordmark (kept for
   screen readers) instead of printing it twice.
4. Deploy to Netlify.

If you edit any other file to onboard a brand, the abstraction has leaked.
Fix it in the config instead.

### Shopify prerequisites per brand

- Products in the Go-To Gifting store with `vendor` set to the brand name,
  **exactly** matching `vendorTag`. A trailing space breaks it silently.
- Products published to the **Headless sales channel**. Not published =
  the query returns empty with no error. This is the most common failure.
- Tags applied for the filter nav (see below).

---

## Tag vocabulary

Filters read from product tags. Current Rincon tags:

| Tag | Used for |
| --- | --- |
| `rincon`, `rincon-lineup` | Brand grouping |
| `cobrand` | Co-brand program marker |
| `ipa`, `hazy-ipa`, `lager`, `pilsner`, `blonde`, `pale-ale` | Style filters |
| `limited-release` | Shows a "Limited" flag on the card |

Filters with zero matching products hide themselves automatically, so an
incomplete tag pass degrades quietly rather than showing empty categories.

**Note on namespacing:** the original build spec called for namespaced tags
(`style:ipa`, `type:beer`). The live products use flat tags. Flat is fine at
this scale, but once several brands share the store, consider namespacing to
avoid collisions — a generic `lager` tag on another brand's product would not
surface here (the vendor filter runs first), but the vocabulary gets muddy.

---

## Storefront token

`storefrontToken` in the config is a **public** Storefront API token. It is
read-only, scoped to public product data, and safe to ship in client-side JS.
That's what it's designed for.

**Never put an Admin API token in this codebase.** Different thing entirely.

Each brand portal should get its own storefront entry in the Headless channel
(Shopify allows up to 100 per shop), so tokens can be rotated or revoked per
brand without affecting the others.

---

## How it works

**Fetch.** One GraphQL query on load, filtered by `vendor`. Up to 100 products,
cached in `sessionStorage` for 5 minutes so filtering and back-navigation don't
re-fetch. Filtering is client-side over the already-fetched set.

**Cart.** Lives in `localStorage`, keyed per brand (`cart:rincon-portal`) so two
brand portals open in one browser don't collide.

**Checkout.** The Shopify cart is created at checkout time via `cartCreate`,
not on every add — fewer API calls, simpler state. A `source` attribute records
which portal the order came from, for attribution and P&L allocation.
Confirm that attribute survives into ShipStation.

---

## Brand identity source

Palette and type are taken from rinconbrewery.com, not invented:

| Token | Hex | Where it comes from |
| --- | --- | --- |
| `bg` | `#EBE3D6` | Their page background (bone) |
| `accent` | `#4E5B31` | Their primary olive |
| `gold` | `#F4BA7A` | Their nav highlight / `theme-color` meta |
| `text` | `#2B2E21` | Deep olive-black |

Type is **Montserrat**, the face their site loads. Since it's one family
doing both display and body, the display voice comes from weight (800)
plus uppercase and wide tracking rather than a second typeface.

The logo is their surfer-and-wave badge, trimmed of transparent padding
and resized. It carries the wordmark, hence `logoIncludesName`.

---

## Known gaps

- **Product images** are Shopify's originals; no art direction pass yet.
- **Single variant assumed** on add-to-cart. The current 9 SKUs are
  single-variant. If a brand ships multipacks or sizes, the card needs a
  variant selector.
- **No pagination.** 100-product ceiling, well past current need.
- **No search.** 9 SKUs; the filter nav does the job. Revisit past ~40.
- **Mixed carts** (beer + merch) are untested — no merch in the catalog yet.
  Merch has no state restrictions, so a mixed cart may need different handling.

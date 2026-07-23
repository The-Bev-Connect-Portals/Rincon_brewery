// ─────────────────────────────────────────────────────────────
//  BRAND CONFIG — the only file that changes to onboard a brand.
//
//  To add a new brand: copy this repo, edit this file, drop in
//  logo + hero images, deploy. Nothing else should need touching.
//  If you find yourself editing app.js or styles.css to onboard a
//  brand, the abstraction has leaked — fix it here instead.
// ─────────────────────────────────────────────────────────────

export const BRAND = {
  // ── Identity ──────────────────────────────────────────────
  name: "Rincon Brewery",
  vendorTag: "Rincon Brewery",     // MUST match Shopify `vendor` exactly
  logo: "/assets/logo.svg",
  favicon: "/assets/favicon.png",

  // ── Look ──────────────────────────────────────────────────
  // Fed into CSS custom properties on :root at boot.
  // styles.css references only these — no hardcoded hex anywhere.
  colors: {
    bg:         "#0E1719",   // deep kelp — near-black with green in it
    surface:    "#162225",   // raised cards
    surfaceAlt: "#1E2D31",   // hover / secondary raise
    text:       "#F2EFE6",   // warm bone, not pure white
    muted:      "#8FA3A3",   // sea-fog grey
    line:       "#243437",   // hairline dividers
    accent:     "#E8623B",   // sunset orange — the Rincon point break at dusk
    accentText: "#0E1719",
    gold:       "#D9A441",   // secondary accent, used sparingly
  },
  fonts: {
    display: "'Bebas Neue', Impact, sans-serif",
    body:    "'Archivo', system-ui, sans-serif",
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Archivo:wght@400;500;600;700&display=swap",
  },

  // ── Copy ──────────────────────────────────────────────────
  tagline: "Ventura County beer, shipped to your door.",
  heroKicker: "Brewed on the coast",
  backToSiteUrl: "https://rinconbrewery.com",
  backToSiteLabel: "Back to Main Site",

  // Announcement bar. Display only — never the enforcement layer.
  // Real state list is attorney-pending; see COMPLIANCE in README.
  shippingLine: "Shipping to select states. Enter your address at checkout to confirm.",

  // Shown if the catalog fails to load.
  supportEmail: "hello@rinconbrewery.com",
  supportPhone: "(805) 900-5227",

  // ── Filters ───────────────────────────────────────────────
  // Order here is the order in the nav. `tag: null` = show all.
  // Tags below are the REAL tags on the products in Shopify.
  filters: [
    { label: "All Beer",        tag: null },
    { label: "IPA",             tag: "ipa" },
    { label: "Hazy IPA",        tag: "hazy-ipa" },
    { label: "Lager",           tag: "lager" },
    { label: "Pilsner",         tag: "pilsner" },
    { label: "Blonde",          tag: "blonde" },
    { label: "Pale Ale",        tag: "pale-ale" },
    { label: "Limited Release", tag: "limited-release" },
  ],

  // ── Shopify ───────────────────────────────────────────────
  // Public Storefront token. Safe to ship client-side: read-only,
  // scoped to public product data. NEVER put an Admin token here.
  shopDomain:      "bro-basket.myshopify.com",
  storefrontToken: "46806eb0a24cc1df3d61a4bee836b228",
  apiVersion:      "2025-01",

  // Cart attribute for order attribution / P&L allocation.
  sourceTag: "rincon-portal",

  // Seller of record. Appears at the checkout handoff.
  // Legally operative — do not soften to make the handoff smoother.
  sellerOfRecord: "Go-To Gifting",
  sellerNote:
    "Checkout is handled by Go-To Gifting, our licensed retail partner.",
};

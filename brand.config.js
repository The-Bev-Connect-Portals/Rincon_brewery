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
  logo: "/assets/logo.png",
  // true when the logo image already contains the brand name, so the
  // header doesn't print it twice. Icon-only marks should set false.
  logoIncludesName: true,
  favicon: "/assets/favicon.png",

  // ── Look ──────────────────────────────────────────────────
  // Fed into CSS custom properties on :root at boot.
  // styles.css references only these — no hardcoded hex anywhere.
  colors: {
    bg:         "#EBE3D6",   // bone — their page background
    surface:    "#FFFFFF",   // cards
    surfaceAlt: "#E0D8C8",   // hover / raised
    text:       "#2B2E21",   // deep olive-black
    muted:      "#6E7263",   // sage grey
    line:       "#D5CCBB",   // hairline
    accent:     "#4E5B31",   // Rincon olive — their primary
    accentText: "#F6F1E6",
    gold:       "#F4BA7A",   // apricot — their secondary/nav highlight
  },
  fonts: {
    display: "'Montserrat', system-ui, sans-serif",
    body:    "'Montserrat', system-ui, sans-serif",
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap",
  },

  // ── Copy ──────────────────────────────────────────────────
  tagline: "Coastal beer from the Rincon, shipped straight to your door.",
  heroKicker: "Ventura \u00b7 Carpinteria \u00b7 Central Coast",
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

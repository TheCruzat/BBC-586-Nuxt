const GTM_ID = "GTM-NBNWMM86";

/**
 * Inject GTM once. Call only after analytics consent is granted.
 */
export function loadGtm() {
  if (import.meta.server || typeof window === "undefined") return;
  if (window.__gtmLoaded) return;
  window.__gtmLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

/**
 * Defer GTM until the browser is idle so it does not compete with LCP.
 */
export function scheduleGtmLoad() {
  if (import.meta.server || typeof window === "undefined") return;
  const run = () => loadGtm();
  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(run, { timeout: 4000 });
  } else {
    setTimeout(run, 2500);
  }
}

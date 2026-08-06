/**
 * Shared helpers for external / new-window links.
 */

export function isExternalUrl(url) {
  return typeof url === "string" && /^(https?:)?\/\//i.test(url);
}

/** Returns { target, rel } for http(s) URLs; empty object otherwise. */
export function externalLinkAttrs(url) {
  if (!isExternalUrl(url)) return {};
  return {
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

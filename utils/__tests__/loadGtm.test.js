import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { loadGtm, scheduleGtmLoad } from "@/utils/loadGtm";

describe("loadGtm", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
    delete window.__gtmLoaded;
    delete window.dataLayer;
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("injects the GTM script once", () => {
    loadGtm();
    loadGtm();

    const scripts = document.querySelectorAll(
      'script[src*="googletagmanager.com/gtm.js"]',
    );
    expect(scripts).toHaveLength(1);
    expect(scripts[0].async).toBe(true);
    expect(scripts[0].src).toContain("GTM-NBNWMM86");
    expect(window.dataLayer.length).toBeGreaterThan(0);
  });

  it("scheduleGtmLoad defers via timeout when idle callback is missing", () => {
    const original = window.requestIdleCallback;
    delete window.requestIdleCallback;

    scheduleGtmLoad();
    expect(
      document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]'),
    ).toHaveLength(0);

    vi.advanceTimersByTime(2500);
    expect(
      document.querySelectorAll('script[src*="googletagmanager.com/gtm.js"]'),
    ).toHaveLength(1);

    if (original) window.requestIdleCallback = original;
  });
});

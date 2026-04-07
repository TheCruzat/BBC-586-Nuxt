import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import HeaderHome from "~/components/HeaderHome.vue";
import Picture from "~/components/Picture.vue";

/**
 * Mock the ImageSets import from content/SplitIMG
 * This prevents errors from missing image asset imports
 */
vi.mock("@/content/SplitIMG", () => ({
  ImageSets: [
    {
      mobile: { webp: "test-mobile.webp" },
      full: { webp: "test-full.webp", jpg: "test-full.jpg" },
    },
  ],
}));

describe("HeaderHome Component", () => {
  let wrapper;

  beforeEach(() => {
    // FIX: Mock matchMedia globally for all tests in this file
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false, // Default to false so parallax logic runs
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    wrapper = mount(HeaderHome, {
      global: {
        components: { Picture },
        stubs: {
          // Use a custom template for the stub to make it easy to find
          HeaderLogo: { template: '<div class="stub-logo" />' },
        },
      },
    });
  });

  it("renders the header element", () => {
    expect(wrapper.find("header").exists()).toBe(true);
  });

  it("has correct aria-label for accessibility", () => {
    const header = wrapper.find("header");
    expect(header.attributes("aria-label")).toContain("built by the Cruzat");
  });

  it("renders HeaderLogo component", () => {
    expect(wrapper.find(".stub-logo").exists()).toBe(true);
  });

  it("renders Picture component with correct props", () => {
    const picture = wrapper.findComponent(Picture);
    expect(picture.exists()).toBe(true);
    expect(picture.props("priority")).toBe("true");
    expect(picture.props("noLazy")).toBe(true);
  });

  it('displays user name "Dan Cruzat"', () => {
    expect(wrapper.text()).toContain("Dan Cruzat");
  });

  it("displays professional title", () => {
    expect(wrapper.text()).toContain(
      "Senior Front End Engineer + UI Architect",
    );
  });

  it('displays location "Bridging Design & Code in Portland, OR"', () => {
    expect(wrapper.text()).toContain("Bridging Design & Code in Portland, OR");
  });

  it("initializes parallax offset to 0", () => {
    expect(wrapper.vm.parallaxOffset).toBe(0);
  });

  it("initializes isScrolling to false", () => {
    expect(wrapper.vm.isScrolling).toBe(false);
  });

  it("has parallax wrapper ref element", () => {
    expect(wrapper.vm.$refs.parallaxWrapper).toBeDefined();
  });

  it("renders decorative corner elements", () => {
    const corners = wrapper.findAll(".header-corner");
    expect(corners.length).toBeGreaterThan(0);
  });

  it("renders decorative brace elements", () => {
    const braces = wrapper.findAll(".header-brace");
    expect(braces.length).toBeGreaterThan(0);
  });

  it("sets window height on mount", () => {
    expect(wrapper.vm.windowHeight).toBe(window.innerHeight);
  });

  it("attaches scroll event listener on mount", () => {
    const spy = vi.spyOn(window, "addEventListener");
    mount(HeaderHome, {
      global: {
        components: { Picture },
      },
      stubs: {
        HeaderLogo: true,
      },
    });
    expect(spy).toHaveBeenCalledWith("scroll", expect.any(Function), {
      passive: true,
    });
    spy.mockRestore();
  });

  it("removes event listeners on unmount", () => {
    const removeSpy = vi.spyOn(window, "removeEventListener");
    wrapper.unmount();
    expect(removeSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith("resize", expect.any(Function));
    removeSpy.mockRestore();
  });

  it("has tiptop section with aria-hidden", () => {
    const tiptop = wrapper.find(".tiptop");
    expect(tiptop.attributes("aria-hidden")).toBe("true");
  });

  it("displays name with correct styling class", () => {
    const nameEl = wrapper.find(".name");
    expect(nameEl.exists()).toBe(true);
    expect(nameEl.text()).toBe("Dan Cruzat");
  });

  it("toggles isScrolling state during scroll", async () => {
    expect(wrapper.vm.isScrolling).toBe(false);

    // Simulate scroll
    wrapper.vm.handleScroll();

    expect(wrapper.vm.isScrolling).toBe(true);

    // Wait for timeout to trigger
    await new Promise((resolve) => setTimeout(resolve, 200));

    expect(wrapper.vm.isScrolling).toBe(false);
  });

  it("calculates parallax offset based on scroll position", () => {
    // Mock window.scrollY
    const mockScrollY = 100;
    Object.defineProperty(window, "scrollY", {
      value: mockScrollY,
      writable: true,
    });

    // Mock getBoundingClientRect
    wrapper.vm.$refs.parallaxWrapper.getBoundingClientRect = () => ({
      height: 500,
    });

    wrapper.vm.handleScroll();

    // Parallax offset should be scrollY * 0.53
    expect(wrapper.vm.parallaxOffset).toBe(mockScrollY * 0.53);
  });

  it("respects prefers-reduced-motion setting", () => {
    // Mock matchMedia for reduced motion
    window.matchMedia = vi.fn(() => ({
      matches: true,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    wrapper.vm.handleScroll();

    expect(wrapper.vm.parallaxOffset).toBe(0);
  });

  it("handles resize events", () => {
    wrapper.vm.handleResize();

    expect(wrapper.vm.windowHeight).toBe(window.innerHeight);
    expect(wrapper.vm.headerTop).toBeDefined();
  });

  it("toggles isScrolling state during scroll", async () => {
    expect(wrapper.vm.isScrolling).toBe(false);

    wrapper.vm.handleScroll();
    expect(wrapper.vm.isScrolling).toBe(true);

    await new Promise((resolve) => setTimeout(resolve, 200));
    expect(wrapper.vm.isScrolling).toBe(false);
  });

  it("calculates parallax offset based on scroll position", () => {
    const mockScrollY = 100;
    Object.defineProperty(window, "scrollY", {
      value: mockScrollY,
      writable: true,
    });

    wrapper.vm.$refs.parallaxWrapper.getBoundingClientRect = () => ({
      height: 500,
    });

    wrapper.vm.handleScroll();
    expect(wrapper.vm.parallaxOffset).toBe(mockScrollY * 0.53);
  });

  it("respects prefers-reduced-motion setting", () => {
    // Override the default mock for just this test
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: true, // Simulate user wanting reduced motion
      media: query,
    }));

    wrapper.vm.handleScroll();
    expect(wrapper.vm.parallaxOffset).toBe(0);
  });
});

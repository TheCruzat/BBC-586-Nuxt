import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import Picture from "~/components/Picture.vue";

describe("Picture Component", () => {
  const mockImageObj = {
    mobile: {
      webp: "image-mobile.webp",
      jpg: "image-mobile.jpg",
    },
    full: {
      webp: "image-full.webp",
      jpg: "image-full.jpg",
    },
  };

  let observerCallback = null;
  let OriginalIO;

  beforeEach(() => {
    OriginalIO = global.IntersectionObserver;
    global.IntersectionObserver = class {
      constructor(cb) {
        observerCallback = cb;
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  });

  afterEach(() => {
    global.IntersectionObserver = OriginalIO;
    observerCallback = null;
  });

  const triggerIntersect = () => {
    observerCallback?.([{ isIntersecting: true }]);
  };

  it("renders picture element when img prop is provided", () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
      },
    });
    expect(wrapper.find("picture").exists()).toBe(true);
  });

  it("does not render when img prop is missing", () => {
    const wrapper = mount(Picture, {
      props: {
        img: null,
      },
    });
    expect(wrapper.find("picture").exists()).toBe(false);
  });

  it("defers sources and img until near viewport when not priority", async () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        priority: false,
      },
    });
    expect(wrapper.find("img").exists()).toBe(false);
    expect(wrapper.findAll("source")).toHaveLength(0);

    triggerIntersect();
    await flushPromises();
    await wrapper.vm.$nextTick();

    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.findAll("source").length).toBeGreaterThan(0);
  });

  it("renders sources immediately when priority is true", () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        priority: true,
      },
    });
    const sources = wrapper.findAll("source");
    expect(sources.length).toBeGreaterThan(0);
    const webpSource = sources.find(
      (s) => s.attributes("type") === "image/webp",
    );
    expect(webpSource).toBeDefined();
  });

  it("renders mobile webp source when loaded", async () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        priority: true,
      },
    });
    const sources = wrapper.findAll("source");
    const mobileWebpSource = sources.find(
      (s) => s.attributes("type") === "image/webp" && !s.attributes("media"),
    );
    expect(mobileWebpSource).toBeDefined();
  });

  it("uses mobile webp as img fallback src", () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        priority: true,
      },
    });
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe(mockImageObj.mobile.webp);
  });

  it("uses empty alt text by default for decorative images", () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        priority: true,
      },
    });
    const img = wrapper.find("img");
    expect(img.attributes("alt")).toBe("");
    expect(wrapper.find("picture").attributes("aria-hidden")).toBe("true");
  });

  it("uses custom alt text when provided", () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        alt: "Custom hero",
        priority: true,
      },
    });
    const img = wrapper.find("img");
    expect(img.attributes("alt")).toBe("Custom hero");
    expect(wrapper.find("picture").attributes("aria-hidden")).toBeUndefined();
  });

  it("treats decorative prop as empty alt even if alt is set", () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        alt: "Should be ignored",
        decorative: true,
        priority: true,
      },
    });
    expect(wrapper.find("img").attributes("alt")).toBe("");
    expect(wrapper.find("picture").attributes("aria-hidden")).toBe("true");
  });

  it("sets loading attribute to eager when priority is true", () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        priority: true,
      },
    });
    const img = wrapper.find("img");
    expect(img.attributes("loading")).toBe("eager");
  });

  it("sets loading attribute to lazy when priority is false", async () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        priority: false,
      },
    });
    triggerIntersect();
    await flushPromises();
    await wrapper.vm.$nextTick();
    const img = wrapper.find("img");
    expect(img.attributes("loading")).toBe("lazy");
  });

  it("sets fetchpriority attribute based on priority prop", () => {
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        priority: true,
      },
    });
    const img = wrapper.find("img");
    expect(img.attributes("fetchpriority")).toBe("high");
  });

  it("applies custom styles to img element", () => {
    const customStyle = {
      objectPosition: "center",
      opacity: "0.5",
    };
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        imgStyle: customStyle,
        priority: true,
      },
    });
    const img = wrapper.find("img");
    expect(img.attributes("style")).toContain("object-position");
  });

  it("handles image objects with only webp", () => {
    const webpOnlyImg = {
      mobile: {
        webp: "mobile.webp",
      },
      full: {
        webp: "full.webp",
      },
    };
    const wrapper = mount(Picture, {
      props: {
        img: webpOnlyImg,
        priority: true,
      },
    });
    const img = wrapper.find("img");
    expect(img.attributes("src")).toBe("mobile.webp");
  });

  it("loads immediately when IntersectionObserver is unavailable", async () => {
    global.IntersectionObserver = undefined;
    const wrapper = mount(Picture, {
      props: {
        img: mockImageObj,
        priority: false,
      },
    });
    await flushPromises();
    await wrapper.vm.$nextTick();
    expect(wrapper.find("img").exists()).toBe(true);
  });
});

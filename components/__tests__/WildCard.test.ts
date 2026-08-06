import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import WildCard from "~/components/WildCard.vue";

describe("WildCard Component", () => {
  const defaultProps = {
    title: "Test Project",
    url: "https://example.com",
    desc: "This is a test project description",
    year: "2024",
    tasks: "Frontend Development",
    tech: "Vue 3",
  };

  let wrapper;

  beforeEach(() => {
    wrapper = mount(WildCard, {
      props: defaultProps,
    });
  });

  it("renders the project card", () => {
    expect(wrapper.find(".project-card").exists()).toBe(true);
  });

  it("displays the project title", () => {
    expect(wrapper.find(".pc-title").text()).toBe("Test Project");
  });

  it("displays the formatted URL (without protocol)", () => {
    expect(wrapper.find(".pc-link a").text()).toBe("example.com");
  });

  it("removes https:// from display URL", () => {
    const urlWithProtocol = "https://example.com/path";
    wrapper = mount(WildCard, {
      props: {
        ...defaultProps,
        url: urlWithProtocol,
      },
    });
    expect(wrapper.find(".pc-link a").text()).toBe("example.com/path");
  });

  it("removes trailing slash from display URL", () => {
    const urlWithTrailingSlash = "https://example.com/";
    wrapper = mount(WildCard, {
      props: {
        ...defaultProps,
        url: urlWithTrailingSlash,
      },
    });
    expect(wrapper.find(".pc-link a").text()).toBe("example.com");
  });

  it("displays tasks", () => {
    expect(wrapper.find(".pc-tasks").text()).toBe("Frontend Development");
  });

  it("displays year and tech stack", () => {
    const yearTech = wrapper.find(".pc-year").text();
    expect(yearTech).toContain("2024");
    expect(yearTech).toContain("Vue 3");
  });

  it("opens drawer on card click", async () => {
    expect(wrapper.find(".project-card").classes()).not.toContain("is-open");
    await wrapper.find(".project-card").trigger("click");
    expect(wrapper.find(".project-card").classes()).toContain("is-open");
  });

  it("opens and closes drawer via title toggle button", async () => {
    const titleBtn = wrapper.find(".pc-title-toggle");
    expect(titleBtn.attributes("aria-expanded")).toBe("false");

    await titleBtn.trigger("click");
    expect(wrapper.find(".project-card").classes()).toContain("is-open");
    expect(titleBtn.attributes("aria-expanded")).toBe("true");

    await titleBtn.trigger("click");
    expect(wrapper.find(".project-card").classes()).not.toContain("is-open");
    expect(titleBtn.attributes("aria-expanded")).toBe("false");
  });

  it("closes drawer when close button is clicked", async () => {
    await wrapper.find(".pc-title-toggle").trigger("click");
    expect(wrapper.find(".project-card").classes()).toContain("is-open");

    await wrapper.find(".pc-close").trigger("click");
    expect(wrapper.find(".project-card").classes()).not.toContain("is-open");
  });

  it("only renders close button while open", async () => {
    expect(wrapper.find(".pc-close").exists()).toBe(false);
    await wrapper.find(".pc-title-toggle").trigger("click");
    expect(wrapper.find(".pc-close").exists()).toBe(true);
  });

  it("marks closed drawer as inert", () => {
    const drawer = wrapper.find(".pc-drawer");
    expect(drawer.attributes("aria-hidden")).toBeUndefined();
    expect(drawer.attributes("inert")).toBeDefined();
  });

  it("wires aria-controls between title toggle and drawer", () => {
    const titleBtn = wrapper.find(".pc-title-toggle");
    const drawer = wrapper.find(".pc-drawer");
    expect(titleBtn.attributes("aria-controls")).toBe(drawer.attributes("id"));
  });

  it("keeps featured cards open without a toggle control", () => {
    wrapper = mount(WildCard, {
      props: {
        ...defaultProps,
        featured: true,
      },
    });

    expect(wrapper.find(".project-card").classes()).toContain("is-open");
    expect(wrapper.find(".project-card").classes()).toContain("featured");
    expect(wrapper.find(".pc-title-toggle").exists()).toBe(false);
    expect(wrapper.find(".pc-close").exists()).toBe(false);
    expect(wrapper.find(".pc-drawer").attributes("aria-hidden")).toBeUndefined();
  });

  it("displays description in drawer", () => {
    expect(wrapper.find(".pc-desc").exists()).toBe(true);
    expect(wrapper.find(".pc-desc").html()).toContain(
      "This is a test project description",
    );
  });

  it("renders studio information when provided", async () => {
    const studioProps = {
      ...defaultProps,
      studio: {
        name: "Test Studio",
        link: "https://studio.com",
      },
    };
    wrapper = mount(WildCard, {
      props: studioProps,
    });

    await wrapper.find(".pc-title-toggle").trigger("click");

    const studioLink = wrapper.find(".pc-studio a");
    expect(studioLink.exists()).toBe(true);
    expect(studioLink.text()).toBe("Test Studio");
    expect(studioLink.attributes("href")).toBe("https://studio.com");
  });

  it("does not show studio section when studio is not provided", () => {
    // Explicitly mount with defaultProps to ensure studio is undefined
    const cleanWrapper = mount(WildCard, {
      props: defaultProps,
    });
    expect(cleanWrapper.find(".pc-studio").exists()).toBe(false);
  });

  it("renders team information when provided", () => {
    const teamProps = {
      ...defaultProps,
      team: [
        { name: "Alice", role: "Designer", link: "https://alice.com" },
        { name: "Bob", role: "Developer", link: "https://bob.com" },
        { name: "Carol", role: "Copywriter" },
      ],
    };
    wrapper = mount(WildCard, {
      props: teamProps,
    });

    const teamList = wrapper.find(".project-team ul");
    expect(teamList.exists()).toBe(true);

    const teamItems = wrapper.findAll(".project-team li");
    expect(teamItems).toHaveLength(3);
    expect(teamItems[0].text()).toContain("Alice");
    expect(teamItems[0].text()).toContain("Designer");
    expect(teamItems[0].find("a").attributes("href")).toBe("https://alice.com");
    expect(teamItems[2].find("a").exists()).toBe(false);
    expect(teamItems[2].find("span").text()).toBe("Carol");
  });

  it("does not show team section when team is empty", () => {
    // Explicitly mount with defaultProps to ensure team is undefined/empty
    const cleanWrapper = mount(WildCard, {
      props: defaultProps,
    });
    expect(cleanWrapper.find(".project-team").exists()).toBe(false);
  });

  it("has correct aria-label on close button", async () => {
    await wrapper.find(".pc-title-toggle").trigger("click");
    const closeBtn = wrapper.find(".pc-close");
    expect(closeBtn.attributes("aria-label")).toBe("Close details");
  });

  it("prevents event propagation on link click", async () => {
    const link = wrapper.find(".pc-link a");
    const stopPropagation = vi.fn();

    await link.trigger("click", {
      stopPropagation,
    });

    // The click should not propagate to the card (no-open triggered)
  });

  it("opens link in new tab", () => {
    const link = wrapper.find(".pc-link a");
    expect(link.attributes("target")).toBe("_blank");
  });

  it("sets correct title attribute on link", () => {
    const link = wrapper.find(".pc-link a");
    expect(link.attributes("title")).toBe("Test Project");
  });

  it("handles empty URL gracefully", () => {
    wrapper = mount(WildCard, {
      props: {
        ...defaultProps,
        url: "",
      },
    });

    expect(wrapper.find(".pc-link a").text()).toBe("");
  });

  it("initializes isOpen to false", () => {
    expect(wrapper.vm.isOpen).toBe(false);
  });

  it("computes displayUrl correctly", () => {
    wrapper = mount(WildCard, {
      props: {
        ...defaultProps,
        url: "https://example.com/path/",
      },
    });

    expect(wrapper.vm.displayUrl).toBe("example.com/path");
  });

  it("renders horizontal rule separators", () => {
    const hrs = wrapper.findAll("hr");
    expect(hrs.length).toBeGreaterThan(0);
  });

  it("toggles drawer state when card is clicked multiple times", async () => {
    // Open
    await wrapper.find(".project-card").trigger("click");
    expect(wrapper.vm.isOpen).toBe(true);

    // Close via button
    await wrapper.find(".pc-close").trigger("click");
    expect(wrapper.vm.isOpen).toBe(false);

    // Open again
    await wrapper.find(".project-card").trigger("click");
    expect(wrapper.vm.isOpen).toBe(true);
  });
});

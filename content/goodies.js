import {
  codeURL,
  blogURL,
  rootURL,
  contactEmail,
  liURL,
  ghURL,
  cpURL,
} from "@/content/meta.js";

export const GoodiesLinks = [
  {
    title: "Review Dan Cruzat's Code Samples",
    label: "code",
    ariaLabel: "link to Dan Cruzat's Code Samples (opens in new window)",
    url: codeURL,
    icon: "fas-code",
  },
  {
    title: "Read Dan Cruzat's Blog",
    label: "blog",
    ariaLabel: "link to Dan Cruzat's Blog (opens in new window)",
    url: blogURL,
    icon: "fas-coffee",
  },
  {
    title: "More About Dan Cruzat",
    label: "about",
    ariaLabel: "link to Dan Cruzat's homepage (opens in new window)",
    url: rootURL,
    icon: "fas-address-card",
    mega: true,
  },
  {
    title: "Email Dan Cruzat",
    label: "email",
    ariaLabel: "email Dan Cruzat",
    url: "mailto:" + contactEmail,
    icon: "fas-paper-plane",
    mega: true,
  },
  {
    title: "Connect with Dan Cruzat on LinkedIn",
    label: "linkedin",
    ariaLabel: "link to Dan Cruzat's LinkedIn profile (opens in new window)",
    url: liURL,
    icon: "fab-linkedin",
  },
  {
    title: "Fork Dan Cruzat on GitHub",
    label: "github",
    ariaLabel: "link to Dan Cruzat's GitHub page (opens in new window)",
    url: ghURL,
    icon: "fab-github",
  },
  {
    title: "Clone Dan Cruzat on CodePen",
    label: "codepen",
    ariaLabel: "link to Dan Cruzat's CodePen page (opens in new window)",
    url: cpURL,
    icon: "fab-codepen",
  },
];

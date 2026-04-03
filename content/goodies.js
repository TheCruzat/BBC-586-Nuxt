import { codeURL, blogURL, rootURL, contactEmail, liURL, ghURL, cpURL } from "@/content/meta.js"

export const GoodiesLinks = [
  {
    title: "Review Dan Cruzat's Code Samples",
    label: "code",
    url: codeURL,
    icon: "fas-code",
  },
  {
    title: "Read Dan Cruzat's Blog",
    label: "blog",
    url: blogURL,
    icon: "fas-coffee",
  },
  {
    title: "More About Dan Cruzat",
    label: "about",
    url: rootURL,
    icon: "fas-address-card",
    mega: true,
  },
  {
    title: "Email Dan Cruzat",
    label: "email",
    url: "mailto:"+contactEmail,
    icon: "fas-paper-plane",
    mega: true,
  },
  {
    title: "Connect with Dan Cruzat on LinkedIn",
    label: "linkedin",
    url: liURL,
    icon: "fab-linkedin",
  },
  {
    title: "Fork Dan Cruzat on GitHub",
    label: "github",
    url: ghURL,
    icon: "fab-github",
  },
  {
    title: "Clone Dan Cruzat on CodePen",
    label: "codepen",
    url: cpURL,
    icon: "fab-codepen",
  },
];

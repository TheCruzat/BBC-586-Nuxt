<template>
  <div id="app" class="resume">
    <header>
      <div class="relative">
        <h1>Dan Cruzat</h1>

        <QR v-if="paperPrint" class="qr" />
        <LogoTC v-if="!paperPrint" :type="types.header" />
      </div>
      <div>
        <nav aria-label="page navigation">
          <div>
            <template v-if="!paperPrint">
              <a
                v-for="link in resumeLinks"
                :key="link.href"
                :class="link.class"
                :href="link.href"
                :aria-label="link.ariaLabel"
                :title="link.title"
                target="_blank"
                v-html="link.label"
              />
            </template>
            <template v-if="paperPrint">
            <span
              v-for="label in paperLabels"
              :key="label"
              v-html="label"
            />
            </template>
          </div>

          <div>
            <template v-if="!paperPrint">
            <a

              v-for="link in resumeNav"
              :class="{ 'no-print': link.noPrint }"
              :key="link.href"
              :href="link.href"
              :aria-label="link.ariaLabel"
              :title="link.title"
              target="_blank"
              v-html="link.label"
            />
            </template>
          </div>
        </nav>
      </div>
    </header>

    <section>
      <h2>summary</h2>
      <Summary />
    </section>

    <section>
      <h2>skills & experience</h2>
      <p v-html="[skillsIntro, skillsSub].join(' ')" />
      <hr />
      <ResSkills />
    </section>

    <section>
      <h2>agencies & organizations</h2>
      <ResOrgs />
    </section>

    <section>
      <h2>brands handled</h2>
      <ResBrands />
    </section>

    <section class="break">
      <h2>projects & positions</h2>
      <ResCredits />
    </section>

    <section>
      <h2>ancient history & trivia</h2>
      <p class="trivia">
        PDX since 06, Chicago expatriot<span class="no-screen"> : </span
        ><br class="no-print" />lifelong Doctor Who fan<span class="no-screen">
          : </span
        ><br class="no-print" />sampler and strangler of sounds since 199?<span
          class="no-print"
        >
          : <br class="no-print" />once pulled caper with Pete Wentz & Jody
          Minnoch : <br class="no-print" />once cussed out by Dan Aykroyd</span
        >
      </p>
    </section>

    <section class="row link-row no-print">
      <a
        href="/"
        class="btn"
        aria-label="return to main page"
        title="return to Dan Cruzat's portfolio"
        ><ClientOnly
          ><font-awesome-icon :icon="['fas', 'chevron-left']"
        /></ClientOnly>
        back to main</a
      >
      <a
        :href="resumeFile"
        class="btn"
        target="_blank"
        aria-label="download resume pdf"
        title="download Dan Cruzat's resume as a pdf"
        >download pdf
        <ClientOnly
          ><font-awesome-icon :icon="['fas', 'chevron-down']" /></ClientOnly
      ></a>
      <a
        :href="liURL"
        class="btn"
        target="_blank"
        aria-label="Dan Cruzat on LinkedIn"
        title="connect with Dan Cruzat on LinkedIn"
        >history @ linkedin
        <ClientOnly
          ><font-awesome-icon :icon="['fas', 'chevron-right']" /></ClientOnly
      ></a>
    </section>

    <section class="resume-footer no-print">
      <p>
        <a href="/">Home</a> : <a href="/privacy">Privacy Policy</a> :
        <a href="/terms">Terms of Use</a>
      </p>
      <p>Built by the Cruzat v{{ portVersion }}</p>
      <p>&copy;Copyright 2008-{{ yr }} Dan Cruzat : All Rights Reserved</p>
    </section>

    <section class="mo">
      <LogoTC />
    </section>

    <CookieConsent />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { types } from "@/components/LogoTC";
import { skillsIntro, skillsSub } from "@/content/skills.js";
import {
  contactEmail,
  portURL,
  codeURL,
  liURL,
  rootURL,
  resumeFile,
  portVersion,
} from "@/content/meta";
const yr = new Date().getFullYear();

const route = useRoute();
const paperPrint = computed(() => route.query.paper === "true");

// Set page title
useHead({
  title: "Resume of Dan Cruzat : Front End Developer / UI Engineer",
});

// Resume links
const resumeLinks = [
  {
    label: contactEmail,
    href: "mailto:" + contactEmail + "?subject='I came across your resume...'",
    ariaLabel: "email Dan Cruzat",
    title: "send Dan Cruzat an email",
    // class: "no-print"
  },
  {
    label: "download resume",
    href: resumeFile,
    ariaLabel: "open resume in new tab",
    title: "download the resume PDF",
    class: "no-print",
  },
];

// Paper Print Labels
const paperLabels = [
  "thecruzat@gmail.com",
  "builtby.thecruzat.com",
  "linkedin.com/in/dancruzat",
];

// Resume navigation
const resumeNav = [
  {
    label: "portfolio",
    href: portURL,
    ariaLabel: "Dan Cruzat's Portfolio",
    title: "see the portfolio of Dan Cruzat",
  },
  {
    label: "code",
    href: codeURL,
    ariaLabel: "Dan Cruzat's Code Samples",
    title: "see code samples from Dan Cruzat",
  },
  {
    label: "linkedin",
    href: liURL,
    ariaLabel: "Dan Cruzat on LinkedIn",
    title: "connect with Dan Cruzat on LinkedIn",
  },
  {
    label: "about",
    href: rootURL,
    ariaLabel: "About Dan Cruzat",
    title: "learn the arcanum of Dan Cruzat",
  },
];
</script>

<style lang="scss">
@use "@/styles/global.scss" as g;
@use "@/styles/resume" as r;

.qr {
  position: absolute;
  top: -20px;
  // left: calc(45% - 60px);
  right: 0;
  // transform: transitionX(-60px)!important;
  width: 100px !important;
  height: 100px !important;
  // Hide on screen by default
  @media screen {
    // display: none !important;
  }

  // Ensure it shows during print
  @media print {
    // display: block !important;
  }
}
</style>

import { rootURL, blogURL } from "@/content/meta.js";

export const BuildSets = [
  {
    header: "front end development",
    brief:
      "I build front end ui's and interfaces for a variety of systems and CMS's.<span class=\"desktop-up\"><br></span> I can sweet talk CSS wherever it can be found.",

    feature: {
      title: "The Seed: Renaissance FED",
      ariaLabel: "the repo for The Seed downloadable project (opens in new window)",
      tech: "Astro, Tailwind, React, Vue, Svelte, Vitest, WP-API",
      tasks: "UX, Design, Full Stack Engineer",
      desc: "A downloadable demo to run locally, all of my best standards and practices for component-based Front End Development. Build in Astro, demo components in React, Vue and Svelte.",
      url: "//github.com/TheCruzat/TheSeed",
      year: "2026",
    },

    links: [
      {
        title: "TrustEngine Mortgage Coach",
        tech: "React, SCSS, ES6, GIT CI/CD",
        tasks: "Tech Lead, Front End Engineer, CSS Specialist",
        desc: "I built new UI components and layouts for TrustEngine's Mortgage Coach web application, they needed new components that could work with their existing data and user flows. I coordinated with their in house back end developers to build dynamic layouts for varied user data. I delivered a combination of ready-made components and static HTML proofs for their security team to adapt.",
        year: "2024",
        studio: {
          name: "Centric Park (now GraVoc)",
          link: "//gravoc.com",
          ariaLabel: "the GraVoc agency website (opens in new window)",
        },
        team: [
          {
            name: "Alicja Colon",
            role: "Project Manager",
            link: "//www.linkedin.com/in/alicjacolon",
            ariaLabel: "project manager Alicja Colon's LinkedIn profile (opens in new window)",
          },
          {
            name: "Erik Bettencourt",
            role: "Senior UX Designer",
            link: "//www.linkedin.com/in/erikbettencourt",
            ariaLabel: "UX designer Erik Bettencourt's LinkedIn profile (opens in new window)",
          },
          {
            name: "Eggert Ragnarsson",
            role: "Senior UI Designer",
            link: "//www.linkedin.com/in/eggertr",
            ariaLabel: "UI designer Eggert Ragnarsson's LinkedIn profile (opens in new window)",
          },
        ],
      },
      {
        title: "Unisyn Voting Systems",
        tech: "React, SCSS, Styled Components",
        tasks: "UX, Senior Front End Engineer, CSS Specialist",
        desc: "I built a component library and several layouts for Unisyn's product line, based on designs from the <a href='//www.mile7.com' target='_blank'>Mile 7</a> agency. I worked on two applications; the first to aggregate election data across several views and metrics, the second app handled information for admin profiles. The result was a fully portable library that has been since leveraged for further products.",
        year: "2024",
        team: [
          {
            name: "Pam Conrad",
            role: "Creative Director @ Mile7",
            link: "//linkedin.com/in/pamconrad/",
            ariaLabel: "creative director Pam Conrad's LinkedIn profile (opens in new window)",
          },
          {
            name: "Christine Ellsworth",
            role: "Design Lead @ Mile7",
            link: "//ells.work",
            ariaLabel: "designer Christine Ellsworth's portfolio (opens in new window)",
          },
          {
            name: "Stephanie Walmsley",
            role: "Project Manager @ Unisyn",
            link: "//www.linkedin.com/in/stephanie-walmsley-8aa4ab16",
            ariaLabel: "project manager Stephanie Walmsley's LinkedIn profile (opens in new window)",
          },
          {
            name: "Bashar Daseh",
            role: "Senior Back End Engineer @ Unisyn",
            link: "//www.linkedin.com/in/bashar-daseh-hamed",
            ariaLabel: "developer Bashar Daseh's LinkedIn profile (opens in new window)",
          },
        ],
      },
      {
        title: "Rogue Waste",
        ariaLabel: "the Rogue Waste live site (opens in new window)",
        tech: "Craft CMS, ReCollect, Gulp, SCSS, ES6, GIT CI/CD",
        tasks: "Full Stack Engineer, CSS Specialist",
        desc: "I built a custom Craft site for a leading OR waste disposal service, Rogue Waste, adding to their existing ecosystem of branded WordPress and Craft sites. Customized ReCollect widgets allowed seamless integration into the build. Complex service and product options were mapped for the user using custom matrix interfaces. We delivered a site that provided the user an easy and intuitive experience while aligning visually with the client fleet.",
        url: "//roguewaste.com",
        year: "2023",
        studio: {
          name: "Daylight Studio",
          link: "//thedaylightstudio.com",
          ariaLabel: "the Daylight Studio agency website (opens in new window)",
        },
        team: [
          {
            name: "Ali Lloyd",
            role: "Project Manager",
            link: "https://www.linkedin.com/in/alilloyd/",
            ariaLabel: "project manager Ali Lloyd's LinkedIn profile (opens in new window)",
          },
          {
            name: "Lauren Sell",
            role: "Designer",
            link: "https://www.linkedin.com/in/lauren-sell/",
            ariaLabel: "designer Lauren Sell's LinkedIn profile (opens in new window)",
          },
        ],
      },

      {
        title: "Riot Games Store",
        ariaLabel: "the Riot Games Store (opens in new window)",
        tech: "React / Next.js, Styled Components, GIT CI/CD",
        tasks: "UI Engineer, Front End Developer",
        desc: "I built components and layouts for Riot Games' officlal online store, they were looking for a refresh with styled components for security purposes. I was on the front end team, specifically working on Product Cards, Featured Item blocks, and Search Results listing items. COVID kicked this into overdrive, we delivered layouts quickly with tight turns and marginal room for error.",
        url: "https://merch.riotgames.com",
        year: "2020",
        studio: {
          name: "BASIC",
          link: "//www.basicagency.com",
          ariaLabel: "the BASIC agency website (opens in new window)",
        },
      },
      {
        title: "KFC Food Ordering App",
        tech: "React, Next.js, SCSS, GIT CI/CD",
        tasks: "UI Engineer, Front End Developer",
        desc: "I built components and layouts for the first KFC Food Ordering App, YUM! Brands was looking for a prototype build that could be easily reskinned for their other brands. I was on the front end team, paired with another developer to work on Product Detail, Cart Displays and Checkout Flow. This had been booked prior to COVID, but the steep jump in online ordering meant we had to meet an urgent demand for a quality turnaround.",
        year: "2020",
        studio: {
          name: "BASIC",
          link: "//www.basicagency.com",
          ariaLabel: "the BASIC agency website (opens in new window)",
        },
      },
      {
        title: "XFinity / Comcast Customer Portal",
        tech: "Angular, SCSS, CSS Specialist, GIT CI/CD",
        tasks: "Front End Developer, CSS Specialist, QA Support",
        desc: "I built components and layouts for the first customer portal following the XFinity / Comcast merger, our team was tasked with the My Account section of the application. I built UI components using mock data and worked with back end specialists to wire in the data. I later offered team support for CSS spotwelding before my final role in QA testing and reporting.",
        year: "2016-2017",
        studio: {
          name: "+Citizen (now EY Studio)",
          link: "//www.studio.ey.com",
          ariaLabel: "the EY Studio agency website (opens in new window)",
        },
        team: [
          {
            name: "Kate Gordon-Bloomfield",
            role: "Project Manager",
            link: "//www.linkedin.com/in/kategb",
            ariaLabel: "project manager Kate Gordon-Bloomfield's LinkedIn profile (opens in new window)",
          },
          {
            name: "Michael Wills",
            role: "Lead Developer",
            link: "//www.linkedin.com/in/michaelcwills",
            ariaLabel: "developer Michael Wills' LinkedIn profile (opens in new window)",
          },
          {
            name: "Cole Reed",
            role: "Developer",
            link: "//www.linkedin.com/in/colereed",
            ariaLabel: "developer Cole Reed's LinkedIn profile (opens in new window)",
          },
          {
            name: "Steven Irby",
            role: "Developer",
            link: "//www.linkedin.com/in/stevenirby1",
            ariaLabel: "developer Steven Irby's LinkedIn profile (opens in new window)",
          },
          {
            name: "Gregor Holzmann",
            role: "Developer",
            link: "//www.linkedin.com/in/gregor-holzmann-616934116",
            ariaLabel: "developer Gregor Holzmann's LinkedIn profile (opens in new window)",
          },
        ],
      },
    ],
  },
  {
    header: "personal projects",
    brief: "Some of my best work is my most personal.",
    feature: {
      title: "Built By The Cruzat v5.86",
      tech: "Nuxt, Vue, SCSS,",
      tasks: "UX, Design, Full Stack Engineer",
      desc: "The source code for this portfolio site, available to explore and test.",
      url: "//github.com/TheCruzat/BBC-586-Nuxt",
      ariaLabel: "the repo for Dan Cruzat's portfolio",
      year: "2026",
    },
    links: [
      //      {
      //        title: "",
      //        tech: "",
      //        tasks: "",
      //        desc: "",
      //        url: "",
      //        year: "",
      //      },
      {
        title: "More About Me",
        ariaLabel: "Dan Cruzat's homepage (opens in new window)",
        tech: "React/Next.js, API, Tailwind, ES6",
        tasks: "Full Stack Engineer & Writer",
        desc: "My homepage is intended to be the personal side of the professional, to give a bit of background about me and my upbringing in Evanston, IL. A Villain's origin story! I chose Next.js as a solid React based platform, allowing flexibility for site and page structure while digesting content from various API sources, enabling SSR, and clean SEO.",
        url: rootURL,
        year: "since 2013",
        repo: "//github.com/TheCruzat/TheCruzat25",
        repoAriaLabel: "the repo for Dan Cruzat's homepage (opens in new window)",
      },
      {
        title: "ARX by P1RK5",
        ariaLabel: "the website for the ARX Album (opens in new window)",
        tech: "Vue/Nuxt.js, SCSS, BandCamp",
        tasks: "Full Stack Engineer, Producer & Writer",
        desc: "In 2020 I completed the ARX album under my P1RK5 moniker (pronounced 'perks'), four suites of music that each describing different stages of life, with the challenge of only using the equipment and techniques available at that time. This Nuxt.js site was built to function as liner notes for the album, with stories, lyrics and equipment info. It's an SPA with an embedded player for the album, matrix-based navigation allows the user to move along the main axis (the year) or a sub axis (lyrics, stories, gear).",
        url: "//arx.p1rk5.com",
        year: "2020",
        repo: "//github.com/TheCruzat/P1RK5-ARX",
        repoAriaLabel: "the repo for the ARX album site (opens in new window)",
      },
      {
        title: "Coffee with the Cruzat",
        ariaLabel: "Dan Cruzat's blog (opens in new window)",
        tech: "WordPress (JS), React Blocks, Tailwind, ES6",
        tasks: "Full Stack Engineer, Writer, Hack",
        desc: "In 2015, I launched a blog to cover code tutorials, thoughts around web development, and horror stories from the life of a career freelancer. In 2025, I used my Ursula Tailwind Starter to create a new, modern theme to breathe new life into my old blog. This involved careful surgical transfer of deep functionality from the original PHP templates to modern HTML templates with PHP patterns. The legacy content was preserved while allowing new articles to be published with modern layout methods.",
        url: blogURL,
        year: "since 2015",
        repo: "//github.com/TheCruzat/CWTC3",
        repoAriaLabel: "the repo for Dan Cruzat's blog (opens in new window)",
      },
    ],
  },
  {
    header: "wordpress ftw",
    brief:
      'Bespoke block themes, performance optimization, and <span class="tablet-up"><br></span> custom plugin architecture for the world\'s most popular CMS.',
    feature: {
      title: "Ells.Work",
      ariaLabel: "colleague Christine Ellsworth's portfolio (opens in new window)",
      tech: "Craft CMS, Gulp, SCSS, ES6",
      tasks: "UX, Full Stack Engineer",
      desc: "I built a custom WordPress-based portfolio for OR Strategy + Design Consultant (and frequent collaborator), Christine Ellsworth. After many classic WordPress portfolios, she wanted a pivot to a modern FSE based system for a more flexible workspace. I was able to provide her with a truly bespoke CMS tailored to her content, and a front end built from her brand suite that keeps her best foot forward.",
      url: "//ells.work",
      year: "2024",
      team: [
        {
          name: "Christine Ellsworth",
          role: "PM, UX & Design",
          link: "https://ells.work",
          ariaLabel: "designer / project manager Christine Ellsworth's porfolio (opens in new window)"
        },
      ],
    },
    links: [
      //      {
      //        title: "",
      //        tech: "",
      //        tasks: "",
      //        desc: "",
      //        url: "",
      //        year: "",
      //        studio: {
      //          name: "",
      //          link: ""
      //        },
      //        team: [
      //          {
      //            name: "",
      //            role: "",
      //            link: ""
      //          }
      //        ]
      //      },
      // {
      //   title: "GoTango",
      //   tech: 'WordPress (JS), ACF, Tailwind, ES6, "Ursula", Non-profit',
      //   tasks: "Project Manager, UX, Designer, Full Stack Engineer",
      //   desc: "I built a custom WordPress site for a MN non-profit, block theme, fourth live site to leverage my Ursula starter. Multiple Zeffy integrations to collect visitor donations, over a dozen custom dashboard Block Editor integrations to allow pages to be more dynamic and malleable. I shipped a lean, light site that looks as good in the browser as their students do on the dancefloor.",
      //   url: "//tango.dance",
      //   year: "2026",
      //   team: [
      //     {
      //       name: "Miriam Ziven",
      //       role: "UX, Designer, Copywriter",
      //       link: "//miriamziven.com",
      //     },
      //   ],
      // },
      {
        title: "GoTango",
        ariaLabel: "non-profit Go Tango website (opens in new window)",
        tech: 'WordPress (JS), ACF, Tailwind, ES6, "Ursula", Non-profit',
        tasks: "Project Manager, UX, Designer, Full Stack Engineer",
        desc: "I built a custom WordPress site for a MN non-profit, block theme, fourth live site to leverage my Ursula starter. Multiple Zeffy integrations to collect visitor donations, over a dozen custom dashboard Block Editor integrations to allow pages to be more dynamic and malleable. I shipped a lean, light site that looks as good in the browser as their students do on the dancefloor.",
        url: "//tango.dance",
        year: "2026",
        repo: "//github.com/TheCruzat/GoTango",
        repoAriaLabel: "the repo for the Go Tango website (opens in new window)",
        team: [
          {
            name: "Miriam Ziven",
            role: "UX, Designer, Copywriter",
            link: "//miriamziven.com",
          },
        ],
      },
      {
        title: "Faber & Trause",
        ariaLabel: "family law firm Faber & Trause website (opens in new window)",
        tech: "WordPress (JS), Kubio, ES6",
        tasks: "Project Manager, UX, Design, Tech Lead",
        desc: "I engineered a makeover and rehab on an existing WordPress site for an OR family law firm. running the Kubio theme. Delivering additions via plugin kept the client in the system they knew.",
        url: "//ftfamilylaw.com",
        year: "2026",
        team: [
          {
            name: "KD Henderson",
            role: "Identity & Branding, Copywriter",
            link: "//www.linkedin.com/in/kdhenderson",
            ariaLabel: "designer KD Henderson's LinkedIn profile (opens in new window)"
          },
          {
            name: "Julia Dudley",
            role: "Editor & Copy",
            link: "//www.linkedin.com/in/juliakdudley",
            ariaLabel: "content writer Julia Dudley's LinkedIn profile (opens in new window)"
          },
        ],
      },
      {
        title: "Cole Parker Randall Foundation",
        ariaLabel: "non profit Cole Parker Randall Foundation website (opens in new window)",
        tech: 'WordPress (JS), ACF, Tailwind, ES6, "Ursula", Non-profit',
        tasks: "UX, Full Stack Engineer",
        desc: "I built a custom WordPress site for an OR non-profit, block theme, third live site to leverage my Ursula starter. A mix of ACF and Gutenberg powered blocks, priority was on clean and intuitive dashboards for the user in editing content. Custom built Events functionality leveraged existing database content from Events Calendar plugin. The result is a clean, responsive site for a worthy cause.",
        url: "//smilesforsma.org",
        year: "2025",
        repo: "//github.com/TheCruzat/CPRF-v1",
        repoAriaLabel: "repo for the Cole Parker Randall Foundation website (opens in new window)",
        team: [
          {
            name: "Christine Ellsworth",
            role: "PM, UX & Design",
            link: "//ells.work",
            ariaLabel: "project manager / designer Christine Ellsworth's portfolio (opens in new window)"
          },
        ],
      },
      {
        title: "Clackamass Soil And Water Conservation District",
        ariaLabel: "non profit Clackamass Soil And Water Conservation District website (opens in new window)",
        tech: "WordPress (JS), ACF, Elementor, ES6, Non-profit",
        tasks: "UX, Tech Lead",
        desc: "I optimized and expanded an Elementor based WordPress site. Custom post types, shortcodes and bespoke Elementor blocks were added via plugin to insure portability across themes. While Performance was optimized to a full 100/100, we had to accept a 94/100 cap to hit the prioritized 100/100 for Accessibility. The client was briefed and the ding was acceptable, meeting WCAG 2.0 standards was their greater priority.",
        url: "//conservationdistrict.org",
        year: "2025",
        studio: {
          name: "The Beauty Shop",
          link: "//www.thebeauty-shop.com",
          ariaLabel: "The Beauty Shop agency website (opens in new window)",
        },
        team: [
          {
            name: "Liz Neilson",
            role: "Creative Director",
            link: "//www.linkedin.com/in/liz-neilson-94568910",
            ariaLabel: "creative director Liz Neilson's LinkedIn profile (opens in new window)",
          },
          {
            name: "Kristin Howe",
            role: "Project Manager",
            link: "//www.linkedin.com/in/kristin-howe-1628245b",
            ariaLabel: "project manager Kristin Howe's LinkedIn profile (opens in new window)",
          },
        ],
      },
      {
        title: "Miriam Ziven",
        ariaLabel: "Project Manager Miriam Ziven's portfolio (opens in new window)",
        tech: 'WordPress (JS), ACF, Tailwind, ES6, "Ursula"',
        tasks: "Project Manager, UX, Full Stack Engineer",
        desc: "I built a custom WordPress site for a MN freelance project manager, block theme, first live build to leverage my Ursula Tailwind starter. Custom blocks, widgets and patterns implemented in React and HTML templates. We launched a lightweight, efficient site that provided the client a modern and malleable platform for her professional presentation.",
        url: "//miriamziven.com",
        year: "2025",
        repo: "//github.com/TheCruzat/MZO",
        repoAriaLabel: "repo for the Miriam Ziven website (opens in new window)",
        team: [
          {
            name: "Miriam Ziven",
            role: "UX, Copywriter",
            link: "//miriamziven.com",
            ariaLabel: "colleague Miriam Ziven's portfolio (opens in new window)",
          },
        ],
      },
      {
        title: "BeLearning Center",
        ariaLabel: "BeLearning Center education site (opens in new window)",
        tech: "WordPress (JS), SkyPilot, npm, SASS, ES6",
        tasks: "Project Manager, Tech Lead",
        desc: "I built customizations for a WordPress site for an OR professional educator who had been working in the SkyPilot LMS theme to build her site. As a possible future need to pivot to another theme was in the original brief, custom blocks, CSS and JS integrations loaded via plugin to insure portability across themes. This way the client can test drive other themes on the back end without sacrificing our mods.",
        url: "//belearning.center",
        year: "2025",
        team: [
          {
            name: "Christine Ellsworth",
            role: "UX & Design",
            link: "//ells.work",
            ariaLabel: "designer Christine Ellsworth's portfolio (opens in new window)",
          },
        ],
      },
      {
        title: "MIT School of Humanities, Arts and Social Sciences",
        ariaLabel: "MIT School of Humanities, Arts and Social Sciences website (opens in new window)",
        tech: "WordPress (JS), ACF, API, Gulp, SASS, ES6, Vue.js",
        tasks: "Full Stack Engineer, Tech Lead",
        desc: "I built a custom WordPress site for MIT, meeting their rigorous requirements for brand alignment and accessibility. Over 25 ACF powered blocks were developed and utilized for the required layouts and interactions. A Vue.js interface was built to digest several API's into a single Events listing. We delivered a robust brochure experience that allowed users to explore the MIT SHASS.",
        url: "//shass.mit.edu",
        year: "2024",
        repo: "//github.com/TheCruzat/mit-shass",
        repoAriaLabel: "repo for the MIT School of Humanities, Arts and Social Sciences codebase (opens in new window)",
        studio: {
          name: "Centric Park (now GraVoc)",
          link: "//www.gravoc.com",
          ariaLabel: "GraVoc agency website (opens in new window)",
        },
        team: [
          {
            name: "Alicja Colon",
            role: "Project Manager",
            link: "//www.linkedin.com/in/alicjacolon",
            ariaLabel: "project manager Alicja Colon's LinkedIn profile (opens in new window)",
          },
          {
            name: "Jeff McAllister",
            role: "UX & Design",
            link: "//www.linkedin.com/in/jeffmcallister",
            ariaLabel: "designer Jeff McAllister's LinkedIn profile (opens in new window)",
          },
        ],
      },
      {
        title: "MIT Institutional Research",
        ariaLabel: "MIT Institutional Research website (opens in new window)",
        tech: "WordPress (JS), ACF, Gulp, SASS, ES6, Relevanssi",
        tasks: "Full Stack Engineer, Tech Lead",
        desc: "I built a custom WordPress archive for MIT, meeting their rigorous requirements for brand alignment and accessibility. Over 20 ACF powered blocks were developed and utilizied for the required layouts and interactions. Several data sources were imported and aggregated, I leveraged Relevanssi for intuitive search. We delivered a simple, streamlined experience allowing users to explore tens of thousands of documents.",
        url: "//ir.mit.edu",
        year: "2024",
        repo: "//github.com/TheCruzat/mit-ir",
        repoAriaLabel: "repo for the MIT Institutional Research codebase (opens in new window)",
        studio: {
          name: "Centric Park (now GraVoc)",
          link: "//www.gravoc.com",
          ariaLabel: "GraVoc agency website (opens in new window)",
        },
        team: [
          {
            name: "Alicja Colon",
            role: "Project Manager",
            link: "//www.linkedin.com/in/alicjacolon",
            ariaLabel: "project manager Alicja Colon's LinkedIn profile (opens in new window)",
          },
          {
            name: "Jeff McAllister",
            role: "UX & Design",
            link: "//www.linkedin.com/in/jeffmcallister",
            ariaLabel: "designer Jeff McAllister's LinkedIn profile (opens in new window)",
          },
        ],
      },
      {
        title: "D&O Garbage & Recycling",
        ariaLabel: "",
        tech: "WordPress (PHP), ACF, ReCollect, Gulp, SASS, ES6",
        tasks: "Full Stack Engineer, CI/CD",
        desc: "I built a custom WordPress site for an OR waste disposal service, including a collection of bespoke UI elements to show product and service variants. Customized ReCollect widgets allowed seamless integration into the fully responsive theme. We delivered an attractive and lightweight site, providing users a clean and intuitive interface.",
        url: "//dogarbage.com",
        year: "2023",
        studio: {
          name: "Daylight Studio",
          link: "//thedaylightstudio.com",
          ariaLabel: "the Daylight Studio agency website (opens in new window)",
        },
        team: [
          {
            name: "Ali Lloyd",
            role: "Project Manager",
            link: "https://www.linkedin.com/in/alilloyd/",
            ariaLabel: "project manager Ali Lloyd's LinkedIn profile (opens in new window)",
          },
          {
            name: "Alexander Ali",
            role: "UX, Designer",
            link: "//www.linkedin.com/in/the-alexander-ali/",
            ariaLabel: "designer Alexander Ali's LinkedIn profile (opens in new window)",
          },
        ],
      },
      {
        title: "Miriam Lea Dance",
        ariaLabel: "professional dancer Miriam Lea's website (opens in new window)",
        tech: "WordPress (PHP/JS), ACF, Gulp, SASS, JS/JQ",
        tasks: "UX, Designer, Full Stack Engineer",
        desc: "I built a custom WordPress site for MN dance performer / instructor, ACF based block theme with UI elements including video players and image sets / carousels. A fully responsive and modular block theme that has allowed for dynamic layouts, and easy 3rd party integrations. While originally built on the classic template system, it has been upgraded in recent years to utilize ACF blocks.",
        url: "//miriam.lea.dance",
        year: "2022",
        team: [
          {
            name: "Miriam Ziven",
            role: "Copywriter, UX",
            link: "//miriamziven.com",
            ariaLabel: "colleague Miriam Ziven's portfolio (opens in new window)",
          },
        ],
      },
      {
        title: "Industrial Commercial Electric",
        ariaLabel: "utility company Industrial Commercial Electric's website (opens in new window)",
        tech: "WordPress (PHP), Gulp, SASS, jQuery",
        tasks: "UX, Full Stack Engineer",
        desc: "I built a custom WordPress site for an OR utilities company, this was a from-scratch build with an unusual request. The client needed a secure Employee Area with several pages of resources, including a robust timecard system. Employee logins powered via ACF, allowing the client to easily add or remove employee logins. The company continues to use the site, the employee section and the timecard system I built.",
        url: "//icecoelectric.com",
        year: "2019",
        team: [
          {
            name: "Christine Ellsworth",
            role: "PM, UX & Design",
            link: "//ells.work",
            ariaLabel: "project manager / designer Christine Ellsworth's portfolio (opens in new window)"
          },
        ],
      },
      {
        title: "Modern Adventure Magazine",
        ariaLabel: "Modern Adventure Magazine website (opens in new window)",
        tech: "WordPress (PHP), Trellis, Docker, ACF, SASS, jQuery",
        tasks: "Full Stack Engineer, Site Lead, CI/CD",
        desc: "I built a custom WordPress blog for an OR travel company, this was a fully bespoke build that had to fit into an existing ecosystem of WordPress sites and standards, as well as aligning visually with a thoroughly defined brand and design language. I shipped an elegant, performant build that the house continues to update and maintain.",
        url: "//modernadventure.com/magazine",
        year: "2018",
        team: [
          {
            name: "Sara Schumacher",
            role: "PM, Designer",
            link: "//www.linkedin.com/in/saraschumacherdesign/",
            ariaLabel: "designer Sara Schumacher's LinkedIn profile (opens in new window)",
          },
          {
            name: "Sam Templeman",
            role: "Back End Engineer, Ecosystem Lead",
            link: "//www.linkedin.com/in/samtempleman",
            ariaLabel: "developer Sam Templeman's LinkedIn profile (opens in new window)",
          },
        ],
      },
      {
        title: "Lisa the Doula",
        ariaLabel: "Lisa the Doula's website (opens in new window)",
        tech: "WordPress (PHP), ACF, Dolly, Gulp, SASS, jQuery",
        tasks: "Full Stack Engineer",
        desc: "I built a custom WordPress site for an IL doula, this was one of the last builds that used the Dolly WordPress single page starter theme I developed for E+C, and it is the last Dolly site standing. Fully responsive, optimized for a single page of content. Multiple levels of drawered content navigable by deep linking. The result was a handy SPA style site that allows the clients visitors to easily find solutions.",
        url: "//www.lisadoula.com",
        year: "2015",
        team: [
          {
            name: "Christine Ellsworth",
            role: "UX & Design",
            link: "//ells.work",
            ariaLabel: "project manager / designer Christine Ellsworth's portfolio (opens in new window)"
          },
          {
            name: "Lisa Shelley de Brauw",
            role: "Copywriter",
          },
        ],
      },
      {
        title: "Synergy Wellness",
        ariaLabel: "reiki practioner Synergy Wellness' website (opens in new window)",
        tech: "WordPress (PHP), ACF, Roots, LESS, jQuery",
        tasks: "Full Stack Engineer",
        desc: "I built a custom WordPress site for an OR Reiki Practictioner, customizing the Roots theme via child theme as a starting point. Fully responsive, custom jQuery powered UI elements including drawers & carousel. Result is a durable WordPress powered site that has stood the test of time, client continues to update and maintain.",
        url: "//synergywellness.org",
        year: "2015",
        team: [
          {
            name: "Christine Ellsworth",
            role: "UX & Design",
            link: "//ells.work",
            ariaLabel: "project manager / designer Christine Ellsworth's portfolio (opens in new window)"
          },
        ],
      },
    ],
  },
];

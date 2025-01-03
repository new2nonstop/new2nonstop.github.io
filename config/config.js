import picture from './TNSII.jpg';
import logo from "./hpe.png"
import comingsoon from './coming-soon.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "New To NonStop",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Programs",
      link: "#programs",
    },
    {
      title: "Buddy",
      link: "#buddy",
    },
    // {
    //   title: "Links",
    //   link: "/links",
    // },
    {
      title: "NonStop 101",
      link: "https://new2nonstop.github.io/nonstop101/",
    },
    // {
    //   title: "Contact",
    //   link: "#contact",
    // },
  ],
}
export const intro = {
  title: "New to NonStop",
  description: "A cross-organisation initiative designed to support HPE NonStop, the product we love.",
  image: picture.src,
  buttons: [
    // NonStop 101, Social Media
    // {
    //   title: "Buddy",
    //   link: "#buddy",
    //   isPrimary: false,
    // },
    {
      title: "Socials - Coming Soon",
      link: "#",
      isPrimary: false,
    },
    {
      title: "NonStop 101",
      link: "https://new2nonstop.github.io/nonstop101/",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who We Are",
  description: [
    "We are a team of customers, partners, vendors and HPE team members coming together to bring HPE NonStop awareness to a new generation of professionals by fostering professional development through: ",
    "",
    "1. Relationship Building",
    "2. Education",
    "3. Information Sharing from the NonStop Community"

  ],
}

export const work = {
  title: "Our Programs",
  cards: [
    {
      title: "Buddy",
      description: "First time on the NonStop? Get connected with a global network of experienced professionals through our 8-week mentorship program. More information below.",
      link: "#buddy",
      icons: null,
    },
    {
      title: "Socials - Coming Soon",
      description: "Stay up to date on our LinkedIn page with our activities around the world! Connect with us on LinkedIn to join a chapter near you for local activities.",
      link: "#",
      icons: null,
    },
    {
      title: "NonStop 101",
      description: "Find our New To NonStop tech and architecture guide, documentation and some tutorials we made to make our jobs easier.",
      link: "https://new2nonstop.github.io/nonstop101/",
      icons: null,
    }
  ],
}

export const buddy = {
  title: "Buddy Program",
  description: [
    "Joining an experienced team can feel a little intimidating at times.",
    "That's why we're here to match the community's newest NonStop users to a mentor you'd like to be sometime later in your career.",
    "Whether you're in the hustliing part of your career or entering the cruising stages of your profession, join us in building our Next Generation of NonStop users."
  ],
  image: comingsoon.src,
  buttons: [
    {
      title: "Join as Mentor",
      link: "mailto:shanice.abigail@hpe.com?subject=N2NS%20-%20Mentor%20Signup",
      isPrimary: false,
    },
    {
      title: "Join as Mentee",
      link: "mailto:shanice.abigail@hpe.com?subject=N2NS%20-%20Mentee%20Interest",
      isPrimary: false,
    },
  ]
}

// not in use
export const projects = {
  title: "Projects",
  cards: [
    {
      title: "StarBook",
      description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
        },
        {
          icon: faGithub,
          link: "https://github.com/hashirshoaeb/star_book",
        },
      ]
    },
    {
      title: "QuranTalk",
      description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      icons: [
        {
          icon: faAppStore,
          link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
        },
        {
          icon: faGooglePlay,
          link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
        },
      ]
    },
    {
      title: "Portfolio",
      description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      icons: [
        {
          icon: faGithub,
          link: "https://nsu40.github.io/nonstop101/",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Interested in Our Initiatives?",
  description: [
    "We're a international group of HPE NonStop product junkies who are committed to making NonStop more accessible. It is really such a shame if people and organisations were missing out on the cool benefits of the NonStop.",
    "We're not paid extra either, but hey - we're autonomous and the adults are letting us do what what we want so we're gonna go ahead with it.",
  ],
  buttons: [
    {
      title: "Join Us as Product Junkie",
      link: "mailto:shanice.abigail@hpe.com?subject=N2NS%20-%20Committee%20Interest",
      isPrimary: false,
    },
    {
      title: "Lead One of Our Programs",
      link: "mailto:shanice.abigail@hpe.com?subject=N2NS%20-%20Program%20Lead%20Interest",
      isPrimary: false,
    },
    {
      title: "Stalk Us from LinkedIn",
      link: "#",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "New To NonStop",
  description: "A cross-organisation initiative designed to support HPE NonStop, the product we love.",
  image: logo.src,
}

// quick links
export const links = {
  image: logo.src,
  title: "@hashirshoaeb",
  description: "Computer Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "My website",
      link: "https://hashirshoaeb.com/",
    },
    {
      title: "QuranTalk App",
      link: "https://www.qurantalk.app/",
    },
    {
      title: "StarBook App",
      link: "https://starbook.dev/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/hashirshoaeb/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/hashirshoaeb/",
    },
  ]
}
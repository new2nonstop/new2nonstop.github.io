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
  description: "A cross-organisation initiative designed to support the growth and development of those new to HPE NonStop, across our whole ecosystem including partners and customers.",
  image: picture.src,
  buttons: [
    // NonStop 101, Social Media
    // {
    //   title: "Buddy",
    //   link: "#buddy",
    //   isPrimary: false,
    // },
    {
      title: "Socials",
      link: "https://www.linkedin.com/groups/13179042/",
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
  title: "Who are We?",
  description: [
    "We are a NonStop initiative focused on empowering the next generation of talent to give them easy access to resources, mentorship, and the community needed to thrive in their NonStop careers. Our focus will be on: ",
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
      description: "First time on the NonStop? Get connected with a global network of experienced professionals through our 8-week mentorship program.",
      link: "#buddy",
      icons: null,
    },
    {
      title: "Socials",
      description: "Join our LinkedIn group to stay updated with our worldwide activities, upcoming events, plus news and resources.",
      link: "https://www.linkedin.com/groups/13179042/",
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
    "Entering a new industry can be intimidating.",
    "Join our Buddy Program to connect with a mentor that can share their experiences and help as a guide.",
    "For those interested in being a buddy to newer members, join us in building the Next Generation of NonStop users."
  ],
  image: comingsoon.src,
  buttons: [
    {
      title: "Join as Mentor",
      link: "https://forms.gle/geBuXwSx1s4BDB979",
      isPrimary: false,
    },
    {
      title: "Join as Mentee",
      link: "https://forms.gle/7m39chcrfZZgkdBJ8",
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
    // "We're a international group of HPE NonStop product junkies who are committed to making NonStop more accessible. It is really such a shame if people and organisations were missing out on the cool benefits of the NonStop.",
    // "We're not paid extra either, but hey - we're autonomous and the adults are letting us do what what we want so we're gonna go ahead with it.",
  ],
  buttons: [
    // {
    //   title: "Join Our Community",
    //   link: "mailto:shanice.abigail@hpe.com?subject=N2NS%20-%20Committee%20Interest",
    //   isPrimary: false,
    // },
    {
      title: "Lead Our Community Programs",
      link: "https://forms.gle/5GG8yaZ27TdNeKc6A",
      isPrimary: false,
    },
    {
      title: "Connect on LinkedIn",
      link: "https://www.linkedin.com/groups/13179042/",
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


import picture from './TNSII.jpg';
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
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "NonStop 101",
      link: "https://nsu40.github.io/nonstop101/",
    }
  ],
}
export const intro = {
  title: "New to NonStop",
  description: "A cross-organisation initiative designed to support HPE NonStop, the product we love.",
  image: picture.src,
  buttons: [
    // NonStop 101, Social Media

    {
      title: "NonStop 101",
      link: "https://nsu40.github.io/nonstop101/",
      isPrimary: false,
    },
    {
      title: "Our LinkedIn",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who We Are",
  description: [
    "We are a team of customers, partners, vendors and HPE team members coming together to bring HPE NonStop awareness to a new generation of professionals by fostering professional development through: ",
    "1. Relationship Building",
    "2. Education",
    "3. Information Sharing from the NonStop Community."

    // "I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering. I kick started my professional career as a mobile application developer working remotely for a UK based startup — Lessgo.",
    // "The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on instagram, helping people who are just getting into the space of programming.",
    // "When I’m not programming, I focus on my hobbies which are: diary writing, doodling, meeting people and growing my network.",
  ],
}

export const work = {
  title: "Our Programs",
  cards: [
    {
      title: "Buddy",
      description: "First time on the NonStop? Get connected with a global network of experienced professionals through our 8-week mentorship program.",
      link: "#",
      icons: null,
    },
    {
      title: "Socials",
      description: "Stay up to date on our LinkedIn page with our activities around the world! Connect with us on LinkedIn to join a chapter near you for local activities.",
      link: "#",
      icons: null,
    },
    {
      title: "NonStop 101",
      description: "Find our New To NonStop tech and architecture guide, documentation and some tutorials we made to make our jobs easier.",
      link: "https://nsu40.github.io/nonstop101/",
      icons: null,
    }
  ],
}

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
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at hashirshoaeb@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:hashirshoaeb@gmail.com",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://topmate.io/hashirshoaeb",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "New2NonStop",
  description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: picture.src,
}

export const links = {
  image: picture.src,
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
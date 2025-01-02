import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { Programs, Projects, Buddy } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, projects, SEO, work, buddy } from '../config/config';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About
        title={about.title}
        description={about.description}
      />
      <Programs
        title={work.title}
        cards={work.cards}
      />
      <Buddy
        title={buddy.title}
        description={buddy.description}
        image={buddy.image}
        buttons={buddy.buttons}
      />
      {/* <Projects
        title={projects.title}
        cards={projects.cards}
      /> */}
      <Contact
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
    </Fragment>
  );
}

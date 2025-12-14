import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/chapter-1-introduction/chapter">
            Begin Reading - 5 min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function ChapterCard({ title, description, link, duration }) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card">
        <div className="card__body">
          <h3>{title}</h3>
          <p>{description}</p>
          <small>Reading time: {duration}</small>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--block" to={link}>
            Read Chapter
          </Link>
        </div>
      </div>
    </div>
  );
}

function ChapterGrid() {
  const chapters = [
    {
      title: 'Chapter 1: Introduction to Physical AI',
      description: 'Define Physical AI and distinguish it from Virtual AI, understand real-world applications.',
      link: '/docs/chapter-1-introduction/chapter',
      duration: '10-15 min'
    },
    {
      title: 'Chapter 2: Foundations of Robotics',
      description: 'Core robot components, structural types, and open-loop vs closed-loop control systems.',
      link: '/docs/chapter-2-foundations/chapter',
      duration: '12-18 min'
    },
    {
      title: 'Chapter 3: Human-Inspired Design Principles',
      description: 'Biomimicry in robotics, anthropomorphic proportions, and balance fundamentals.',
      link: '/docs/chapter-3-human-design/chapter',
      duration: '10-15 min'
    },
    {
      title: 'Chapter 4: Perception Systems in Humanoids',
      description: 'Cameras, IMUs, sensor fusion, and environmental awareness concepts.',
      link: '/docs/chapter-4-perception/chapter',
      duration: '12-18 min'
    },
    {
      title: 'Chapter 5: AI, Deep Learning & Control Systems',
      description: 'Role of AI in robotics, machine learning vs deep learning, and decision pipelines.',
      link: '/docs/chapter-5-ai-control/chapter',
      duration: '12-18 min'
    },
    {
      title: 'Chapter 6: Humanoid Locomotion and Manipulation',
      description: 'Walking cycle stages, center of mass concepts, and stability strategies.',
      link: '/docs/chapter-6-locomotion/chapter',
      duration: '10-15 min'
    }
  ];

  return (
    <section className={styles.chapters}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Textbook Chapters</h2>
        <p className="text--center padding-horiz--md">
          Explore the fundamentals of Physical AI and Humanoid Robotics through our structured curriculum.
        </p>
        <div className="row">
          {chapters.map((chapter, index) => (
            <ChapterCard
              key={index}
              title={chapter.title}
              description={chapter.description}
              link={chapter.link}
              duration={chapter.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="An AI-native textbook on Physical AI & Humanoid Robotics">
      <HomepageHeader />
      <main>
        <ChapterGrid />
      </main>
    </Layout>
  );
}

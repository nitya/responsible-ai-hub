import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Image from '@theme/IdealImage';

import zindi from './../../../static/img/partners/zindi.png';
import mlsa from './../../../static/img/partners/mlsa.png';
import startups from './../../../static/img/partners/startups.png';

const PartnersList = [
  {
    title: 'Zindi Africa',
    logo: zindi,
    link: 'https://zindi.africa',
    description: (
      <>
        Zindi hosts the largest community of African data practitioners, working to solve the world’s most pressing challenges using machine learning and AI. We want to showcase African data talent to the world.
      </>
    ),
  },
  {
    title: 'Microsoft Learn Student Ambassadors',
    logo: mlsa,
    link: 'https://mvp.microsoft.com/studentambassadors',
    description: (
      <>
        Join our global community of students passionate about building AI-driven solutions with Microsoft technology. Accelerate innovation and grow the skills for greater impact in projects and communities that matter to you.
      </>
    ),
  },
  {
    title: 'Microsoft For Startups',
    logo: startups,
    link: 'https://www.microsoft.com/startups',
    description: (
      <>
        Microsoft for Startups Founders Hub helps startups radically accelerate innovation by providing access to industry-leading AI services, expert guidance, and the essential technology needed to build a future-proofed startup.
      </>
    ),
  },
];

function Partner({ logo, title, link, description }) {
  return (
    <div className={clsx('col col--4', styles.contentItem)}>
      <div className="avatar avatar--vertical">
        <Image className="avatar__photo avatar__photo--xl" role="img" img={logo} />
        <div className="avatar__intro margin-vert--md">
          <h3><a href={link}>{title}</a></h3>
          <div className="avatar__subtitle">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

const FeatureList = [
  {
    title: 'Responsible AI Dashboard',
    Svg: require('@site/static/img/workshop-dashboard.svg').default,
    link: 'docs/rai-dashboard-ms-learn',
    topic: 'Get The Code',
    topiclink: 'https://aka.ms/rai-hub/dashboard-workshop',
    description: (
      <>
        This hands-on lesson teaches how to debug and mitigate a ML model issues using error analysis, data analysis, model explainability, model performance and fairness assessment.
      </>
    ),
  },
  {
    title: 'Azure Content Safety for OpenAI',
    Svg: require('@site/static/img/workshop-safety.svg').default,
    link: 'docs/content-safety-overview',
    topic: 'Get The Code',
    topiclink: 'https://aka.ms/rai-hub/content-safety-workshop',
    description: (
      <>
        This is a hands-on lesson on prompt engineering, detecting jailbreaks, offensive or inappropriate content in text and images quickly and efficiently. Includes identifying sexual, violent, hate, and self-harm content.
      </>
    ),
  },
  {
    title: 'Azure ML Prompt Flow',
    Svg: require('@site/static/img/workshop-prompt.svg').default,
    link: 'docs/prompt-flow-overview',
    topic: 'Get The Code',
    topiclink: 'https://aka.ms/rai-hub/prompt-flow-workshop',
    description: (
      <>
        This is a hands-on lesson on creating executable flows that link LLMs, vector embeddings, prompts, and Python tools through a visualized graph. As well as, evaluating performance through large-scale testing.
      </>
    ),
  },
];

function Feature({ Svg, title, description, topic, topiclink, link }) {
  return (
    <div className={clsx('col col--4', styles.contentItem)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={topiclink} target="_blank">
          <span className="badge badge--primary margin-horiz--xs">{topic}</span>
        </a>
        <a href={link}>
          <span className="badge badge--danger margin-horiz--xs">Launch Tutorial</span>
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr />
        <h2 className="text--center"> Our Community Partners </h2>
        <div className="row">
          {PartnersList.map((props, idx) => (
            <Partner key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

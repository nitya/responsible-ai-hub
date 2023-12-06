import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Responsible AI Dashboard',
    Svg: require('@site/static/img/workshop-dashboard.svg').default,
    link: 'docs/welcome',
    topic: 'Workshop Repo',
    topiclink: 'https://aka.ms/rai-hub/dashboard-workshop',
    description: (
      <>
        The Responsible AI dashboard provides a single interface to help you implement Responsible AI in practice effectively and efficiently.
      </>
    ),
  },
  {
    title: 'Azure Content Safety',
    Svg: require('@site/static/img/workshop-safety.svg').default,
    link: 'docs/welcome',
    topic: 'Workshop Repo',
    topiclink: 'https://aka.ms/rai-hub/content-safety-workshop',
    description: (
      <>
        Azure AI Content Safety detects harmful user-generated and AI-generated content in applications and services
      </>
    ),
  },
  {
    title: 'Azure ML Prompt Flow',
    Svg: require('@site/static/img/workshop-prompt.svg').default,
    link: 'docs/welcome',
    topic: 'Workshop Repo',
    topiclink: 'https://aka.ms/rai-hub/prompt-flow-workshop',
    description: (
      <>
        Prompt Flow is a tool designed to streamline the entire development cycle of AI apps powered by Large Language Models (LLMs).
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
        <a href={link} target="_blank">
          <span className="badge badge--danger margin-horiz--xs">Tutorial</span>
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
      </div>
    </section>
  );
}

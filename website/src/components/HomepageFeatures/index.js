import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

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
      </div>
    </section>
  );
}

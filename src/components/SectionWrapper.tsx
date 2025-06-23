// components/SectionWrapper.tsx
import React from "react";
import styles from '../styles/SectionWrapper.module.css';

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const SectionWrapper: React.FC<Props> = ({ id, title, children }) => (
  <section id={id} className={id === 'about' ? styles.sectionAbout : styles.sectionDefault}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

export default SectionWrapper;

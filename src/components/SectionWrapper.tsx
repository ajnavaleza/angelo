// components/SectionWrapper.tsx
import React from "react";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const SectionWrapper: React.FC<Props> = ({ id, title, children }) => (
  <section id={id} className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
    {children}
  </section>
);

export default SectionWrapper;

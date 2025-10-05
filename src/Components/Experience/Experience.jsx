import React from 'react';
import './Experience.css';

const achievements = [
  { value: '2+', label1: 'Years', label2: 'Experience' },
  { value: '3+', label1: 'Completed', label2: 'Projects' },
  { value: '2+', label1: 'Companies', label2: 'Work' },
];

const Experience = () => {
  return (
    <section className="experience" id="Experience" aria-label="Professional Experience">
      <header>
        <h2>Professional Experience</h2>
      </header>
      <ul className="achievement-list">
        {achievements.map((ach, idx) => (
          <li className="achievement" key={idx} itemScope itemType="https://schema.org/Thing">
            <div className="circle" itemProp="amount">{ach.value}</div>
            <span itemProp="name">{ach.label1}</span>
            <span itemProp="description">{ach.label2}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
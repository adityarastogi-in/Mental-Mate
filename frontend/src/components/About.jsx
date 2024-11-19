// src/components/About.js
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-left">
        <img src="../data/chart1.jpg" alt="Chart" />
      </div>
      <div className="about-right">
        <p>
            In recent years, mental health issues have been increasingly recognized as a global crisis affecting people of all ages, particularly young adults and students. Here are some key trends driving the urgency of mental health support:
        </p>
        <ul>
            <li><strong>Increase in Anxiety and Depression:</strong> Rising cases, especially among young adults due to academic, financial, and social pressures.</li>
            <li><strong>Pandemic’s Impact:</strong> Social isolation and remote lifestyles have worsened loneliness and stress levels.</li>
            <li><strong>Stigma in Seeking Help:</strong> Many avoid mental health support due to societal stigma and privacy concerns.</li>
            <li><strong>Limited Access & High Costs:</strong> Shortage of professionals and expensive therapy make support inaccessible for many.</li>
            <li><strong>Demand for 24/7 Support:</strong> People need on-demand mental health assistance, not confined to office hours.</li>
        </ul>
        <p>
        These trends highlight an urgent need for accessible, affordable, and stigma-free mental health support, which is exactly what Mental Mate aims to provide. By offering a 24/7, confidential, and empathetic virtual space, Mental Mate serves as a reliable companion for users to share their emotions and receive personalized support. The project addresses current mental health gaps, empowering individuals to better manage their mental well-being and reducing barriers to seeking help.
        </p>
      </div>
    </section>
  );
}

export default About;

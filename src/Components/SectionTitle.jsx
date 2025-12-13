import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ id, children }) => (
  <h2 id={id} className="section-title">
    {children}
    <span className="section-underline" />
  </h2>
);

export default SectionTitle;

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="article-eyebrow">Uncatalogued Passage</span>
      <h1>This record is not in the archive.</h1>
      <p>The page may have moved, or the knowledge has not yet been committed to the Royal Archives.</p>
      <Link className="primary-button" to="/archive">Return to the Archive</Link>
    </section>
  );
}

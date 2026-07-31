import React from 'react';
import { Link } from 'react-router-dom';

export default function LoreLink({ target, children }) {
  return (
    <span className="lore-link-wrap">
      <Link className="lore-link" to={target.path}>
        {children}
      </Link>
      <span className="lore-preview" role="tooltip">
        <span className="lore-preview-category">{target.category}</span>
        <strong>{target.title}</strong>
        <span>{target.summary}</span>
        <small>Open entry →</small>
      </span>
    </span>
  );
}

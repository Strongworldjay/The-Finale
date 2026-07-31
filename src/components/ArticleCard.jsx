import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from './icons.jsx';

export default function ArticleCard({ article, compact = false }) {
  const path = article.externalPath || `/wiki/${article.slug}`;
  return (
    <Link className={`article-card ${compact ? 'compact' : ''}`} to={path}>
      {!compact && (
        <div
          className="article-card-image"
          style={{ backgroundImage: `linear-gradient(180deg, transparent 15%, rgba(7, 6, 12, .92)), url(${article.hero})` }}
        />
      )}
      <div className="article-card-body">
        <span className="article-category">{article.category}</span>
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
        <span className="article-card-action">
          Read entry <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

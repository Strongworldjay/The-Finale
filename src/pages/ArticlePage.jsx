import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard.jsx';
import RichText from '../components/RichText.jsx';
import { ArrowIcon } from '../components/icons.jsx';
import { articleBySlug } from '../data/articles.js';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articleBySlug[slug];

  if (!article) return <Navigate to="/not-found" replace />;
  if (article.externalPath) return <Navigate to={article.externalPath} replace />;

  const related = article.related.map((relatedSlug) => articleBySlug[relatedSlug]).filter(Boolean);

  return (
    <article className="wiki-article">
      <header
        className="article-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7, 6, 13, .98) 3%, rgba(8, 7, 15, .83) 48%, rgba(8, 7, 15, .35)), url(${article.hero})`,
          backgroundPosition: article.heroPosition || 'center',
        }}
      >
        <div className="hero-inner">
          <div className="breadcrumbs">
            <Link to="/archive">Archive</Link><span>›</span><Link to={`/archive?category=${encodeURIComponent(article.category)}`}>{article.category}</Link>
          </div>
          <span className="article-eyebrow">{article.category} · Archive Entry</span>
          <h1>{article.title}</h1>
          {article.subtitle && <p className="article-subtitle">{article.subtitle}</p>}
          <p className="article-summary">{article.summary}</p>
        </div>
      </header>

      <div className="article-layout">
        <aside className="article-rail">
          {!!article.infobox.length && (
            <section className="infobox">
              <span className="infobox-title">Archive Record</span>
              {article.infobox.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd><RichText currentSlug={article.slug}>{value}</RichText></dd>
                </div>
              ))}
            </section>
          )}
          <nav className="article-toc" aria-label="Contents">
            <span>Contents</span>
            {article.sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>{section.title}</a>
            ))}
          </nav>
        </aside>

        <div className="article-content">
          {article.sections.map((section) => (
            <section id={section.id} className="article-section" key={section.id}>
              <div className="section-heading article-section-heading">
                <h2>{section.title}</h2>
              </div>

              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}><RichText currentSlug={article.slug}>{paragraph}</RichText></p>
              ))}

              {section.quote && <blockquote>{section.quote}</blockquote>}

              {section.bullets && (
                <ul className="lore-list">
                  {section.bullets.map((item) => <li key={item}><RichText currentSlug={article.slug}>{item}</RichText></li>)}
                </ul>
              )}

              {section.numbered && (
                <ol className="law-grid">
                  {section.numbered.map((law, lawIndex) => (
                    <li key={law}>
                      <span>{String(lawIndex + 1).padStart(2, '0')}</span>
                      <p><RichText currentSlug={article.slug}>{law}</RichText></p>
                    </li>
                  ))}
                </ol>
              )}

              {section.note && (
                <aside className="archive-note">
                  <p><RichText currentSlug={article.slug}>{section.note}</RichText></p>
                </aside>
              )}
            </section>
          ))}

          {!!related.length && (
            <section className="related-section">
              <div className="section-heading related-heading">
                <span>+</span>
                <div><h2>Related Entries</h2><p>Continue through the connected lore.</p></div>
              </div>
              <div className="related-grid">
                {related.map((entry) => <ArticleCard key={entry.slug} article={entry} compact />)}
              </div>
            </section>
          )}

          <Link className="return-link" to="/archive">Browse the full archive <ArrowIcon /></Link>
        </div>
      </div>
    </article>
  );
}

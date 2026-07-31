import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard.jsx';
import { SearchIcon } from '../components/icons.jsx';
import { articles } from '../data/articles.js';

const categories = ['All', ...new Set(articles.map((article) => article.category))];

export default function ArchiveIndex() {
  const [params, setParams] = useSearchParams();
  const initialCategory = params.get('category') || 'All';
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const next = params.get('category') || 'All';
    if (categories.includes(next)) setCategory(next);
  }, [params]);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase();
    return articles
      .filter((article) => category === 'All' || article.category === category)
      .filter((article) => !q || [article.title, article.summary, article.subtitle, ...(article.aliases || [])].join(' ').toLocaleLowerCase().includes(q))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [category, query]);

  function selectCategory(next) {
    setCategory(next);
    if (next === 'All') setParams({});
    else setParams({ category: next });
  }

  return (
    <article className="archive-page">
      <header className="archive-hero">
        <span className="article-eyebrow">The Illuminated Archive</span>
        <h1>Heöfon Encyclopedia</h1>
        <p>Search every completed entry by person, place, organization, religion, history, government, culture, or campaign material.</p>
        <label className="archive-search">
          <SearchIcon />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter archive entries…" />
        </label>
      </header>

      <div className="archive-body">
        <div className="category-tabs" role="tablist" aria-label="Article category">
          {categories.map((item) => (
            <button key={item} className={category === item ? 'active' : ''} onClick={() => selectCategory(item)}>{item}</button>
          ))}
        </div>
        <div className="archive-result-count"><strong>{filtered.length}</strong> {filtered.length === 1 ? 'entry' : 'entries'} in the archive</div>
        {filtered.length ? (
          <div className="archive-grid">{filtered.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
        ) : (
          <div className="empty-state archive-empty"><strong>No entries match that search.</strong><span>Clear the filter or choose another archive category.</span></div>
        )}
      </div>
    </article>
  );
}

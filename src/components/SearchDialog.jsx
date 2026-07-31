import React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { articles } from '../data/articles.js';
import { booksOfSol } from '../data/bookOfSol.js';
import { CloseIcon, SearchIcon } from './icons.jsx';

function normalize(value) {
  return value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const articleEntries = articles.map((article) => ({
  title: article.title,
  category: article.category,
  summary: article.summary,
  path: article.externalPath || `/wiki/${article.slug}`,
  search: [article.title, article.summary, article.subtitle, ...(article.aliases || []), ...article.sections.flatMap((section) => [section.title, ...(section.paragraphs || []), ...(section.bullets || [])])].join(' '),
}));

const scriptureEntries = booksOfSol.map((book) => ({
  title: `Book ${book.roman} — ${book.title}`,
  category: 'Book of Sol',
  summary: book.theme,
  path: `/book-of-sol#${book.slug}`,
  search: [book.title, book.theme, book.commentary, ...book.verses.map((verse) => verse.text)].join(' '),
}));

const searchEntries = [...articleEntries, ...scriptureEntries];

export default function SearchDialog({ open, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQuery('');
      window.setTimeout(() => inputRef.current?.focus(), 30);
      document.body.classList.add('dialog-open');
    } else {
      document.body.classList.remove('dialog-open');
    }
    return () => document.body.classList.remove('dialog-open');
  }, [open]);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return searchEntries.slice(0, 8);
    return searchEntries
      .map((entry) => {
        const title = normalize(entry.title);
        const haystack = normalize(entry.search);
        let score = 0;
        if (title === q) score += 100;
        if (title.startsWith(q)) score += 50;
        if (title.includes(q)) score += 25;
        if (haystack.includes(q)) score += 10;
        return { ...entry, score };
      })
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, 12);
  }, [query]);

  if (!open) return null;

  function choose(path) {
    navigate(path);
    onClose();
  }

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search the Heöfon archive" onMouseDown={onClose}>
      <div className="search-dialog" onMouseDown={(event) => event.stopPropagation()}>
        <div className="search-dialog-input">
          <SearchIcon />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search people, places, laws, verses, and organizations…"
          />
          <button className="icon-button" onClick={onClose} aria-label="Close search"><CloseIcon /></button>
        </div>
        <div className="search-dialog-meta">
          <span>{query ? `${results.length} matching entries` : 'Suggested entries'}</span>
          <kbd>Esc</kbd>
        </div>
        <div className="search-results">
          {results.length ? results.map((result) => (
            <button key={`${result.path}-${result.title}`} className="search-result" onClick={() => choose(result.path)}>
              <span>
                <small>{result.category}</small>
                <strong>{result.title}</strong>
                <p>{result.summary}</p>
              </span>
              <span aria-hidden="true">→</span>
            </button>
          )) : (
            <div className="empty-state">
              <strong>No archive entry found.</strong>
              <span>Try a district, person, organization, or phrase from the Book of Sol.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

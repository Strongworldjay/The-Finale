import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard.jsx';
import RichText from '../components/RichText.jsx';
import { articleBySlug } from '../data/articles.js';
import { booksOfSol, bookOfSolStats } from '../data/bookOfSol.js';

const tensions = [
  {
    title: 'Healing and worthiness',
    text: 'Book III, verses 4–5 command the faithful to heal before judging and state that no wound makes a soul unworthy of healing. Law I forbids healing someone deemed unworthy by the All Father. The available texts do not explain the official reconciliation.',
  },
  {
    title: 'Criticism and sacred authority',
    text: 'Book IV, verses 3, 14, and 16 defend criticism, distinguish questioning servants from questioning the divine, and condemn loyalty that requires silence. Laws III and IV forbid public criticism of governing authority and speaking ill of the All Father’s governing body.',
  },
  {
    title: 'Walls, flight, and departure',
    text: 'Book VI, verses 14–17 warn that walls must not keep truth out, describe home as the start rather than end of a journey, and reject the idea that any child was born beneath a forbidden sky. Laws II and V restrict flight and leaving Heöfon.',
  },
];

export default function BookOfSol() {
  const related = ['all-father', 'three-dawns', 'laws-of-heofon'].map((slug) => articleBySlug[slug]);

  return (
    <article className="scripture-page">
      <header
        className="article-hero scripture-hero"
        style={{ backgroundImage: 'linear-gradient(90deg, rgba(7, 6, 13, .98), rgba(8, 7, 15, .68), rgba(8, 7, 15, .32)), url(/images/book.png)' }}
      >
        <div className="hero-inner">
          <div className="breadcrumbs"><Link to="/archive">Archive</Link><span>›</span><span>Religion</span></div>
          <span className="article-eyebrow">Sacred Scripture · Complete Text</span>
          <h1>The Book of Sol</h1>
          <p className="article-subtitle">Verses from the Seven Books</p>
          <p className="article-summary">The foundational scripture of Heöfon’s faith and law, containing seven books and one hundred forty verses attributed to the voice of the All Father.</p>
        </div>
      </header>

      <div className="scripture-intro-wrap">
        <section className="scripture-intro">
          <span className="article-category">Sacred Text</span>
          <h2>A scripture larger than Heöfon’s official doctrine</h2>
          <p><RichText currentSlug="book-of-sol">The Book of Sol begins with creation and ends with Deliverance. Between them, it addresses equality, family, mercy, honest labor, government, law, strangers, defense, redemption, freedom, and the Three Dawns. The text guides worship and government, yet several verses sit in direct tension with the Laws of Heöfon.</RichText></p>
          <div className="scripture-stats">
            <div><strong>{bookOfSolStats.books}</strong><span>Books</span></div>
            <div><strong>{bookOfSolStats.verses}</strong><span>Verses</span></div>
            <div><strong>VII</strong><span>Deliverance</span></div>
          </div>
        </section>

        <nav className="book-nav" aria-label="The seven books">
          <span>Jump to a Book</span>
          {booksOfSol.map((book) => (
            <a key={book.slug} href={`#${book.slug}`}>
              <b>{book.roman}</b>
              <span>{book.title}<small>{book.theme}</small></span>
            </a>
          ))}
        </nav>
      </div>

      <div className="scripture-content">
        {booksOfSol.map((book) => (
          <section id={book.slug} className="book-section" key={book.slug}>
            <header>
              <span>Book {book.roman}</span>
              <h2>{book.title}</h2>
              <p className="book-theme">{book.theme}</p>
              <p>{book.commentary}</p>
            </header>
            <ol className="verse-list">
              {book.verses.map((verse) => (
                <li id={`${book.slug}-verse-${verse.number}`} key={verse.number}>
                  <a className="verse-number" href={`#${book.slug}-verse-${verse.number}`} aria-label={`Link to verse ${verse.number}`}>{String(verse.number).padStart(2, '0')}</a>
                  <p>“<RichText currentSlug="book-of-sol">{verse.text}</RichText>”</p>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <section className="textual-tensions">
          <span className="article-category">Comparative Reading</span>
          <h2>Textual Tensions Within Heöfon</h2>
          <p>The following comparisons are grounded in the supplied Book of Sol and campaign primer. They identify unresolved differences rather than choosing an official interpretation.</p>
          <div className="tension-grid">
            {tensions.map((tension) => (
              <article key={tension.title}>
                <h3>{tension.title}</h3>
                <p><RichText currentSlug="book-of-sol">{tension.text}</RichText></p>
              </article>
            ))}
          </div>
        </section>

        <section className="related-section scripture-related">
          <div className="section-heading related-heading"><span>+</span><div><h2>Read Alongside</h2><p>Scripture, people, and law are inseparable in Heöfon.</p></div></div>
          <div className="related-grid">{related.map((article) => <ArticleCard key={article.slug} article={article} compact />)}</div>
        </section>
      </div>
    </article>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard.jsx';
import RichText from '../components/RichText.jsx';
import { ArrowIcon, SearchIcon, SunIcon } from '../components/icons.jsx';
import { articles } from '../data/articles.js';

export default function Home() {
  const featured = articles.filter((article) => article.featured && article.slug !== 'heofon').slice(0, 6);

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-image" />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <span className="home-sigil"><SunIcon size={38} /></span>
          <span className="article-eyebrow">A Living Encyclopedia of the Kingdom in the Sky</span>
          <h1>HEÖFON</h1>
          <p>Explore the city above the clouds through its people, districts, laws, sacred scripture, institutions, celebrations, and the darkness it has not escaped.</p>
          <div className="home-actions">
            <Link className="primary-button" to="/wiki/heofon">Enter the Kingdom <ArrowIcon /></Link>
            <Link className="secondary-button" to="/archive"><SearchIcon size={18} /> Browse the Archive</Link>
          </div>
        </div>
        <div className="home-hero-facts">
          <div><span>Current Year</span><strong>269</strong></div>
          <div><span>Districts</span><strong>6</strong></div>
          <div><span>Sacred Books</span><strong>7</strong></div>
          <div><span>Royal Dawns</span><strong>3</strong></div>
        </div>
      </section>

      <section className="home-introduction">
        <div className="section-kicker">The Illuminated Archive</div>
        <h2>A kingdom remembered in full—not reduced to summaries.</h2>
        <div className="two-column-copy">
          <p><RichText>For generations, Heöfon has stood above the clouds beneath everlasting sunlight. The All Father’s faith shapes its laws, the Raybeam Dynasty rules from the Sun’s Palace, and the Radiant Souls preserve order throughout six districts.</RichText></p>
          <p><RichText>Yet beyond the Gilded Gateway, the Veil District remains beneath unnatural darkness. The Book of Sol speaks of buried memory, reopened roads, and Three Dawns whose choices may define what Deliverance truly means.</RichText></p>
        </div>
      </section>

      <section className="featured-archive">
        <div className="section-title-row">
          <div><span className="section-kicker">Featured Entries</span><h2>Begin with the foundations</h2></div>
          <Link to="/archive">View all entries <ArrowIcon /></Link>
        </div>
        <div className="featured-grid">
          {featured.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>

      <section className="book-feature">
        <div className="book-feature-image" />
        <div className="book-feature-content">
          <span className="section-kicker">The Complete Sacred Text</span>
          <h2>The Book of Sol</h2>
          <p>Read all seven books and one hundred forty verses, from the first dawn of creation to the prophecy of Radiance, Sun, and Moon.</p>
          <blockquote>“Deliverance was never escape from the world, but their return to it.”</blockquote>
          <Link className="primary-button" to="/book-of-sol">Open the Seven Books <ArrowIcon /></Link>
        </div>
      </section>

      <section className="contradictions-feature">
        <span className="section-kicker">A Kingdom of Radiant Contradictions</span>
        <h2>The archive preserves both doctrine and tension.</h2>
        <div className="contradiction-grid">
          <article><span>01</span><h3>Mercy and Law</h3><p>The Path of Light declares no wound unworthy of healing. Heöfon’s first law forbids healing those deemed unworthy.</p></article>
          <article><span>02</span><h3>Truth and Authority</h3><p>Covenant protects criticism of rulers. The Laws of Heöfon forbid public criticism of governing authority.</p></article>
          <article><span>03</span><h3>Home and the Horizon</h3><p>Radiance says no child is born beneath a forbidden sky. Leaving Heöfon without authorization remains illegal.</p></article>
        </div>
      </section>
    </div>
  );
}

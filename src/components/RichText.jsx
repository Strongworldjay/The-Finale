import React from 'react';
import { useMemo } from 'react';
import LoreLink from './LoreLink.jsx';
import { loreLinkMap, loreTerms } from '../data/linkIndex.js';

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export default function RichText({ children, currentSlug }) {
  const text = String(children ?? '');
  const matcher = useMemo(() => {
    const pattern = loreTerms.map(escapeRegExp).join('|');
    return new RegExp(`(?<![\\p{L}\\p{N}])(${pattern})(?![\\p{L}\\p{N}])`, 'giu');
  }, []);

  return (
    <>
      {text.split(matcher).map((part, index) => {
        const target = loreLinkMap[part.toLocaleLowerCase()];
        if (!target || target.slug === currentSlug) return part;
        return (
          <LoreLink key={`${part}-${index}`} target={target}>
            {part}
          </LoreLink>
        );
      })}
    </>
  );
}

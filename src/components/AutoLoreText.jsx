import React from 'react';
import LoreLink from './LoreLink.jsx';
import { linkMap } from '../data/lore.js';

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export default function AutoLoreText({ children }) {
  const text = String(children);
  const keys = Object.keys(linkMap).sort((a, b) => b.length - a.length);
  const matcher = new RegExp(`\\b(${keys.map(escapeRegExp).join('|')})\\b`, 'gi');

  return (
    <>
      {text.split(matcher).map((part, index) => {
        const target = linkMap[part.toLowerCase()];
        return target ? (
          <LoreLink key={`${part}-${index}`} to={target.to}>{part}</LoreLink>
        ) : part;
      })}
    </>
  );
}

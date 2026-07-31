import { articles, articleBySlug } from './articles.js';

const explicitTargets = {
  'lucian maximum raybeam': '/wiki/three-dawns#lucian-maximum-raybeam',
  'sunny lou raybeam': '/wiki/three-dawns#sunny-lou-raybeam',
  'aurora luna raybeam': '/wiki/three-dawns#aurora-luna-raybeam',
  'the veiled': '/wiki/veil-district#the-veiled',
  'veiled': '/wiki/veil-district#the-veiled',
  'the unveiled': '/wiki/veil-district#unveiled',
  'unveiled': '/wiki/veil-district#unveiled',
  'veil expeditioners': '/wiki/veil-district#expeditions',
  'radiant initiates': '/wiki/radiant-souls#ranks',
  'radiant sentinels': '/wiki/radiant-souls#ranks',
  'general of radiance': '/wiki/radiant-souls#ranks',
  'ascendant program': '/wiki/royal-academy-of-radiance#ascendant-program',
  'foundational program': '/wiki/royal-academy-of-radiance#foundational-program',
  'grandmaster caelan emberlain': '/wiki/royal-academy-of-radiance#leadership',
  'day of radiance': '/wiki/holy-days-and-festivals#day-of-radiance',
  'festival of the three dawns': '/wiki/holy-days-and-festivals#festival-of-the-three-dawns',
  'remembrance of radiance': '/wiki/holy-days-and-festivals#remembrance-of-radiance',
  'harvest of light': '/wiki/holy-days-and-festivals#harvest-of-light',
  'grand coliseum games': '/wiki/holy-days-and-festivals#grand-coliseum-games',
  'the unfavored': '/wiki/society-of-heofon#the-unfavored',
  'the faithful': '/wiki/society-of-heofon#the-faithful',
  'the blessed': '/wiki/society-of-heofon#the-blessed',
  'book i — new genesis': '/book-of-sol#book-i-new-genesis',
  'book ii — new dawn': '/book-of-sol#book-ii-new-dawn',
  'book iii — the path of light': '/book-of-sol#book-iii-path-of-light',
  'book iv — covenant': '/book-of-sol#book-iv-covenant',
  'book v — shadow': '/book-of-sol#book-v-shadow',
  'book vi — radiance': '/book-of-sol#book-vi-radiance',
  'book vii — deliverance': '/book-of-sol#book-vii-deliverance',
  'the path of light': '/book-of-sol#book-iii-path-of-light',
  'deliverance': '/book-of-sol#book-vii-deliverance',
};

const map = {};

for (const article of articles) {
  const path = article.externalPath || `/wiki/${article.slug}`;
  const terms = [article.title, ...(article.aliases || [])];
  for (const term of terms) {
    map[term.toLocaleLowerCase()] = {
      path,
      title: article.title,
      category: article.category,
      summary: article.summary,
      slug: article.slug,
    };
  }
}

for (const [term, path] of Object.entries(explicitTargets)) {
  const slug = path.includes('/wiki/') ? path.split('/wiki/')[1].split('#')[0] : 'book-of-sol';
  const article = articleBySlug[slug] || articleBySlug['book-of-sol'];
  map[term] = {
    path,
    title: article?.title || term,
    category: article?.category || 'Archive',
    summary: article?.summary || '',
    slug,
  };
}

export const loreLinkMap = map;
export const loreTerms = Object.keys(map).sort((a, b) => b.length - a.length);

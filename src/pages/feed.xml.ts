import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { profiel } from '../data/profiel';
import { getStukken, pad } from '../lib/stukken';

export async function GET(context: APIContext) {
  const stukken = await getStukken();
  return rss({
    title: profiel.naam,
    description: profiel.functie,
    site: context.site!,
    customData: '<language>nl</language>',
    items: stukken.map((s) => ({
      title: s.data.titel,
      description: s.data.samenvatting,
      pubDate: s.data.datum,
      link: pad(s),
      categories: [s.data.type],
    })),
  });
}

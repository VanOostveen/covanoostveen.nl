import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { profiel, secties } from '../../data/profiel';
import { getStukken, pad } from '../../lib/stukken';

export function getStaticPaths() {
  return Object.keys(secties).map((sectie) => ({ params: { sectie } }));
}

export async function GET(context: APIContext) {
  const sectie = context.params.sectie as string;
  const info = secties[sectie];
  const stukken = await getStukken(info.type);
  return rss({
    title: `${profiel.naam}: ${info.titel.toLowerCase()}`,
    description: info.intro,
    site: context.site!,
    customData: '<language>nl</language>',
    items: stukken.map((s) => ({
      title: s.data.titel,
      description: s.data.samenvatting,
      pubDate: s.data.datum,
      link: pad(s),
    })),
  });
}

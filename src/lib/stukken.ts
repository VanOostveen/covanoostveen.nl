import { getCollection, type CollectionEntry } from 'astro:content';
import { sectieVanType, type Type } from '../data/profiel';

export type Stuk = CollectionEntry<'stukken'>;

// Concepten zijn zichtbaar tijdens `astro dev` en vallen weg bij `astro build`.
export async function getStukken(type?: Type): Promise<Stuk[]> {
  const alle = await getCollection('stukken', (s) => {
    if (type && s.data.type !== type) return false;
    return import.meta.env.DEV || !s.data.concept;
  });
  return alle.sort((a, b) => b.data.datum.valueOf() - a.data.datum.valueOf());
}

export function pad(stuk: Stuk): string {
  return `/${sectieVanType[stuk.data.type]}/${stuk.id}/`;
}

export function iso(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function isGenummerd(stuk: Stuk): boolean {
  return stuk.data.genummerd ?? stuk.data.type === 'noot';
}

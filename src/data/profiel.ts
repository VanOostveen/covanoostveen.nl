// Eén plek voor naam, functie en links. Alles op de site leest hiervandaan,
// zodat naam en functie op elke pagina gelijk zijn (belangrijk voor vindbaarheid).

export const profiel = {
  naam: 'Co van Oostveen',
  merk: 'CvO',
  // Openingszin op de homepage: elke regel apart, zonder punt.
  functieRegels: ['Fiscaal advocaat in Amsterdam', 'Ontwikkelt AI-toepassingen voor de fiscale praktijk'],
  // Eén lopende zin voor metateksten, feeds en JSON-LD.
  functieZin: 'Co van Oostveen, fiscaal advocaat in Amsterdam, ontwikkelt AI-toepassingen voor de fiscale praktijk',
  functieKort: 'Fiscaal advocaat',
  site: 'https://covanoostveen.nl',
  // Vul in wat je publiek wilt maken. Lege velden worden niet getoond.
  links: {
    linkedin: 'https://www.linkedin.com/in/co-van-oostveen/',
    github: 'https://github.com/VanOostveen',
    email: 'co.vanoostveen@svalneratlas.com',
  },
  // Ervaring en opleiding voor de publicatiepagina. Een lege lijst wordt niet getoond.
  cv: [
    { periode: '2021–heden', wat: 'Svalner Atlas, Amsterdam. Manager.' },
    { periode: 'lopend', wat: 'Beroepsopleiding Advocaten (NOvA)' },
    { periode: 'afgerond', wat: 'Beroepsopleiding Belastingadviseurs (NOB)' },
  ] as { periode: string; wat: string }[],
  voetRegels: [
    'Co van Oostveen, fiscaal advocaat in Amsterdam',
    'Deze site bevat geen advies en staat los van het kantoor waar ik werk; wat hier staat, schrijf ik op persoonlijke titel',
  ],
};

export type Type = 'noot' | 'essay' | 'toepassing' | 'publicatie';

export const secties: Record<string, { type: Type; titel: string; intro: string }> = {
  noten: {
    type: 'noot',
    titel: 'Noten',
    intro:
      'Korte stukken over één uitspraak: wat er speelde, wat er is beslist, wat er nieuw aan is, en wat ik ervan vind voor de praktijk.',
  },
  essays: {
    type: 'essay',
    titel: 'Essays',
    intro: 'Langere stukken die een positie innemen. Meestal groeien ze uit een reeks noten.',
  },
  toepassingen: {
    type: 'toepassing',
    titel: 'Toepassingen',
    intro:
      'Wat ik maak voor de fiscale praktijk, wat werkt en wat niet. Ook mislukte experimenten, met wat ik ervan leerde.',
  },
  publicaties: {
    type: 'publicatie',
    titel: 'Publicaties',
    intro: 'Stukken die elders zijn verschenen, met een samenvatting en een verwijzing.',
  },
};

export const sectieVanType: Record<Type, string> = {
  noot: 'noten',
  essay: 'essays',
  toepassing: 'toepassingen',
  publicatie: 'publicaties',
};

// Eén plek voor naam, functie en links. Alles op de site leest hiervandaan,
// zodat naam en functie op elke pagina gelijk zijn (belangrijk voor vindbaarheid).

export const profiel = {
  naam: 'Co van Oostveen',
  functie: 'Fiscaal advocaat in Amsterdam. Bouwt AI-systemen voor de fiscale praktijk.',
  functieKort: 'Fiscaal advocaat',
  site: 'https://covanoostveen.nl',
  // Vul in wat je publiek wilt maken. Lege velden worden niet getoond.
  links: {
    linkedin: '',
    github: 'https://github.com/VanOostveen',
    email: '',
  },
  // De drie bewijsstukken onder de openingszin op de homepage.
  bewijs: [
    { label: 'WFR 2026/77', url: '/publicaties/' },
    { label: 'Fynd', url: '/werk/' },
    { label: 'The Floris', url: 'https://www.thefloris.nl' },
  ],
  // Opleiding en beroepsopleiding voor de publicatiepagina. Formaat:
  // { periode: '2024–heden', wat: 'Beroepsopleiding Advocaten' }
  // Leeg laten tot ingevuld; een lege lijst wordt niet getoond.
  cv: [] as { periode: string; wat: string }[],
  disclaimer:
    'Deze site bevat geen advies en staat los van het kantoor waar ik werk. Wat hier staat, schrijf ik op persoonlijke titel.',
};

export type Type = 'noot' | 'essay' | 'werk' | 'publicatie';

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
  werk: {
    type: 'werk',
    titel: 'Werk',
    intro:
      'Bouwlogboek: wat ik maak voor de fiscale praktijk, wat werkt en wat niet. Ook mislukte experimenten, met wat ik ervan leerde.',
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
  werk: 'werk',
  publicatie: 'publicaties',
};

// Sätteri HAST-plugin. Geeft elke alinea op het hoogste niveau een nummer en een stabiel anker:
// <p id="al-3" data-alinea="3"><a class="al" href="#al-3">3</a> ...</p>
// Zo kan iemand verwijzen naar "noot 14, alinea 3" en heeft een taalmodel een vast adres.
// Of het nummer zichtbaar is, bepaalt de CSS (klasse .genummerd op de omhullende div).
export const alineaPlugin = {
  name: 'alinea-nummers',
  before(_root, ctx) {
    ctx.data.alinea = 0;
  },
  element: {
    filter: ['p'],
    visit(node, ctx) {
      const parent = ctx.parent(node);
      if (!parent || parent.type !== 'root') return;
      const n = (ctx.data.alinea ?? 0) + 1;
      ctx.data.alinea = n;
      const id = `al-${n}`;
      ctx.setProperty(node, 'id', id);
      ctx.setProperty(node, 'data-alinea', String(n));
      ctx.prependChild(node, {
        type: 'element',
        tagName: 'a',
        properties: { className: ['al'], href: `#${id}`, 'aria-label': `alinea ${n}` },
        children: [{ type: 'text', value: String(n) }],
      });
    },
  },
};

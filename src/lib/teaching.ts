import type { CollectionEntry } from 'astro:content';

export type Offering = CollectionEntry<'teaching'>;

/** URL id of an offering: its file name, e.g. "CSE471-F26". Case is kept so old links still work. */
export function offeringId(entry: Offering): string {
  return entry.id.replace(/\.md$/, '');
}

const SEASON_ORDER: Record<string, number> = { Spring: 1, Summer: 2, Fall: 3 };

/** Sortable number for "Fall 2026" -> 20263. */
export function termKey(term: string): number {
  const [season, year] = term.split(' ');
  return Number(year) * 10 + (SEASON_ORDER[season] ?? 0);
}

/** Newest first. */
export function byTermDesc(a: Offering, b: Offering): number {
  return termKey(b.data.term) - termKey(a.data.term);
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * Renders the small amount of Markdown used in schedule cells and short fields:
 * **bold**, [links](url), and a leading "Required:" / "Recommended:" label (bold or not).
 */
export function inlineMarkdown(text: string): string {
  let html = escapeHtml(text);
  html = html.replace(
    /^(?:\*\*)?(Required|Recommended)(?:\*\*:|:\*\*|:)\s*/,
    (_, label: string) => `<span class="reading-tag reading-tag-${label.toLowerCase()}">${label}</span> `,
  );
  html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label: string, href: string) => {
    const external = /^https?:/.test(href);
    return `<a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${label}</a>`;
  });
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  return html;
}

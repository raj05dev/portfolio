import { Fragment } from 'react';
import type { ReactNode } from 'react';

/** Splits a line into plain text, **bold** runs and `code` runs. */
const renderInline = (line: string): ReactNode[] => {
  const parts = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={index} className="rounded bg-black/10 px-1 py-0.5 text-[0.85em] dark:bg-white/10">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
};

/**
 * Minimal markdown renderer for the assistant replies: paragraphs, bullet
 * lists, bold and inline code. Enough for the canned answers, no extra deps.
 */
const MarkdownText = ({ children }: { children: string }) => {
  const lines = children.split('\n');
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = (key: string) => {
    if (listItems.length === 0) return;
    blocks.push(
      <ul key={key} className="my-2 list-disc space-y-1 pl-5">
        {listItems.map((item, index) => (
          <li key={index}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      listItems.push(trimmed.slice(2));
      return;
    }
    flushList(`list-${index}`);
    if (trimmed !== '') {
      blocks.push(
        <p key={`p-${index}`} className="my-1 first:mt-0 last:mb-0">
          {renderInline(trimmed)}
        </p>,
      );
    }
  });
  flushList('list-end');

  return <>{blocks}</>;
};

export default MarkdownText;

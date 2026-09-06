import type { ReactNode } from "react";

type UnitProps = {
  /** ISA-style equipment tag, e.g. "TK-301". */
  tag: string;
  /** Service name printed beside the tag. */
  name: string;
  /** Optional right-hand annotation, e.g. a stream count. */
  note?: string;
  /** Terminal units cap the line instead of continuing it. */
  terminal?: boolean;
  tone?: "sheet" | "panel" | "ink";
  id?: string;
  children: ReactNode;
};

/**
 * One plant unit on the process line.
 *
 * The pipework in the left gutter is drawn with CSS and marked
 * `aria-hidden` — every word of content is ordinary HTML beside it, so the
 * diagram never stands between a crawler, an AI answer engine, or a screen
 * reader and the text.
 */
export default function Unit({
  tag,
  name,
  note,
  terminal = false,
  tone = "sheet",
  id,
  children,
}: UnitProps) {
  return (
    <section className="unit" data-tone={tone} data-terminal={terminal} id={id}>
      <div className="container unit-inner">
        <div className="unit-rail" aria-hidden="true">
          <span className="pipe pipe-in" />
          <span className="node" />
          {!terminal && <span className="pipe pipe-out" />}
        </div>

        <div className="unit-body">
          <header className="unit-head">
            <span className="tag-text unit-tag">{tag}</span>
            <span className="unit-rule" aria-hidden="true" />
            <h2 className="tag-text unit-name">{name}</h2>
            {note && <span className="tag-sm unit-note">{note}</span>}
          </header>

          {children}
        </div>
      </div>
    </section>
  );
}

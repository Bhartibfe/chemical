import type { ReactNode } from "react";

type ChapterProps = {
  /** Section number/index */
  number: number;
  title: string;
  /** Optional section subtitle / overview note */
  note?: string;
  /**
   * Optional action aligned to the right of the heading — a "view all" link
   * belongs level with the title, not stranded under the cards.
   */
  action?: ReactNode;
  tone?: "paper" | "tint" | "plate";
  id?: string;
  children: ReactNode;
};

export default function Chapter({
  number,
  title,
  note,
  action,
  tone = "paper",
  id,
  children,
}: ChapterProps) {
  return (
    <section className="chapter" data-tone={tone} id={id}>
      <div className="page">
        <header className="chapter-head">
          <div className="chapter-head-main">
            <div className="chapter-title-group">
              <span className="section-badge-pill">SECTION 0{number}</span>
              <h2 className="title t2 chapter-title">{title}</h2>
            </div>
            {note && <p className="chapter-note">{note}</p>}
          </div>

          {action && <div className="chapter-head-action">{action}</div>}
        </header>

        {children}
      </div>
    </section>
  );
}

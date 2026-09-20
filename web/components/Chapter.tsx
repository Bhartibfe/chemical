import type { ReactNode } from "react";

type ChapterProps = {
  /** Section number/index */
  number: number;
  title: string;
  /** Optional section subtitle / overview note */
  note?: string;
  tone?: "paper" | "tint" | "plate";
  id?: string;
  children: ReactNode;
};

export default function Chapter({
  number,
  title,
  note,
  tone = "paper",
  id,
  children,
}: ChapterProps) {
  return (
    <section className="chapter" data-tone={tone} id={id}>
      <div className="page">
        <header className="chapter-head">
          <div className="chapter-title-group">
            <span className="section-badge-pill">
              SECTION 0{number}
            </span>
            <h2 className="title t2 chapter-title">{title}</h2>
          </div>
          {note && <p className="chapter-note">{note}</p>}
        </header>

        {children}
      </div>
    </section>
  );
}

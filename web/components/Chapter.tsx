import type { ReactNode } from "react";

type ChapterProps = {
  /** Chapter number, printed as § n. */
  number: number;
  title: string;
  /** Optional marginal note printed beside the chapter opening. */
  note?: string;
  tone?: "paper" | "tint" | "plate";
  id?: string;
  children: ReactNode;
};

/**
 * A chapter of the handbook: a numbered opening rule, the title, and an
 * optional marginal note in the outer column — the armature a printed
 * reference book uses to let a reader scan and land.
 */
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
          <p className="apparatus chapter-number">
            § {String(number).padStart(2, "0")}
          </p>
          <h2 className="title t2 chapter-title">{title}</h2>
          {note && <p className="apparatus-sm chapter-note">{note}</p>}
        </header>

        {children}
      </div>
    </section>
  );
}

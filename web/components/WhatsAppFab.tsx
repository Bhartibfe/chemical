import { site } from "@/lib/site";

/** Ribbon marker — the bookmark tab a reference book is left open on. */
export default function WhatsAppFab() {
  return (
    <a
      className="ribbon apparatus-sm"
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
      Enquire
      <span className="visually-hidden">
        {" "}
        about chemical products on WhatsApp (opens in a new tab)
      </span>
    </a>
  );
}

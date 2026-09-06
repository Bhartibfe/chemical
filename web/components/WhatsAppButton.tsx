import { site } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      className="wa-btn"
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span aria-hidden="true">💬</span>
      <span className="visually-hidden">
        Enquire about chemical products on WhatsApp (opens in a new tab)
      </span>
    </a>
  );
}

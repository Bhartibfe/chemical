import { site } from "@/lib/site";

/** Persistent enquiry tab. Set as a ruled block rather than a floating
 *  circle, so it belongs to the document rather than hovering over it. */
export default function WhatsAppFab() {
  return (
    <a
      className="wa-tab mono"
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp
      <span className="visually-hidden">
        {" "}
        — enquire about chemical products (opens in a new tab)
      </span>
    </a>
  );
}

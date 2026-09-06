import { site } from "@/lib/site";

/** Field enquiry point, drawn as a wall-mounted call station clamped to the
 *  edge of the sheet rather than a floating bubble. */
export default function WhatsAppFab() {
  return (
    <a
      className="call-point tag-sm"
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="call-lamp" aria-hidden="true" />
      WhatsApp
      <span className="visually-hidden">
        {" "}
        — enquire about chemical products (opens in a new tab)
      </span>
    </a>
  );
}

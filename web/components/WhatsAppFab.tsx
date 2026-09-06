import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <a
      className="wa-fab"
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={24} strokeWidth={2} aria-hidden="true" />
      <span className="visually-hidden">
        Enquire about chemical products on WhatsApp (opens in a new tab)
      </span>
    </a>
  );
}

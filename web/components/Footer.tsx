import Image from "next/image";
import { addresses, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <p className="footer-logo">
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              width={40}
              height={40}
            />
            <span>{site.name}</span>
          </p>

          <address className="footer-address">
            {addresses.map((address) => (
              <p className="footer-copy" key={address.label}>
                {address.display}
              </p>
            ))}
          </address>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Shiv Enterprises. All rights reserved.
        </p>

        <span className="footer-iso">{site.certification}</span>
      </div>
    </footer>
  );
}

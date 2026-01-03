import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "../lib/site";

const footerLinks = {
  services: [
    { label: "FAST Remote", href: "/fast-remote" },
    { label: "Interventions terrain", href: "/contact" },
    { label: "Maintenance préventive", href: "/contact" },
  ],
  company: [
    { label: "À propos", href: "#avantages" },
    { label: "Équipements", href: "#equipements" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/confidentialite" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-primary-darker via-primary-dark to-primary-darker pt-16 pb-8">
      {/* Decoration line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-50" />

      <Container>
        <div className="grid gap-12 md:grid-cols-5 pb-12">
          {/* Logo & Brand */}
          <div className="col-span-1 space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-accent-bright">FAST</h3>
              <p className="text-sm text-gray-400">
                Expertise mécatronique à distance
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-4">
              {[
                { icon: "📱", label: "Socials", href: "#" },
                { icon: "🔗", label: "LinkedIn", href: "#" },
                { icon: "💼", label: "Pro", href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  title={social.label}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 hover:border-accent-gold/50 transition-all hover:bg-accent-gold/5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white uppercase tracking-wider text-sm">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-bright transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white uppercase tracking-wider text-sm">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-bright transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white uppercase tracking-wider text-sm">
              Légal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-bright transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Quick */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white uppercase tracking-wider text-sm">
              Nous contacter
            </h4>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">📧 Email</p>
                <p className="text-gray-300 font-medium text-sm break-all">{siteConfig.contact.email || "contact@fast-tech.fr"}</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">📞 Téléphone</p>
                <p className="text-gray-300 font-medium">{siteConfig.contact.phone || "+33 (0)X XX XX XX XX"}</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">📍 Région</p>
                <p className="text-gray-300 font-medium">Île-de-France</p>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="mt-4 inline-block px-4 py-2 bg-accent-gold text-primary font-bold rounded-lg hover:bg-accent-gold-dark transition-colors text-sm"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} FAST Tech Services. Tous droits réservés.
            </p>

            {/* Newsletter signup */}
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Votre email..."
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-accent-bright transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-accent-bright text-primary font-bold rounded-lg hover:bg-accent-soft transition-colors text-sm whitespace-nowrap"
              >
                S&apos;abonner
              </button>
            </form>

            {/* Back to top */}
            <a
              href="#top"
              className="text-gray-500 hover:text-accent-bright transition-colors text-sm font-medium"
            >
              ↑ Haut
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

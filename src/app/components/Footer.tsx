import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { siteConfig } from "../constants/siteConfig";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const navigation = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/sports", label: t("nav.sports") },
    { path: "/achievements", label: t("nav.achievements") },
    { path: "/news", label: t("nav.news") },
  ];

  const partners = [
    t("footer.partnersList.agency"),
    t("footer.partnersList.noc"),
    t("footer.partnersList.ministry"),
    t("footer.partnersList.federations"),
  ];

  const legalLinks = [
    { label: t("footer.legal.privacy"), href: "#" },
    { label: t("footer.legal.press"), href: "#" },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-400 font-sans border-t-[8px] border-[#E31837]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
          {/* Logo/About */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-8 group">
              <div className="w-12 h-12 border-2 border-[#E31837] group-hover:bg-[#E31837] flex items-center justify-center transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-[#E31837] group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </Link>
            <p className="text-sm font-semibold uppercase tracking-widest text-white mb-2 leading-tight">
              {t("site.name")}
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              {t("footer.aboutText")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E31837] inline-block"></span>
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-4">
              {navigation.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-400 hover:text-[#E31837] hover:pl-2 transition-all duration-300 uppercase tracking-widest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners / External Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFCD00] inline-block"></span>
              {t("footer.partners")}
            </h3>
            <ul className="space-y-4">
              {partners.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="group flex items-center text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="mr-2">{item}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#E31837]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-neutral-100 inline-block"></span>
              {t("nav.contact")}
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#E31837] shrink-0 stroke-[1.5]" />
                <span className="text-sm text-neutral-300 leading-snug">
                  {t("contact.info.addressValue")
                    .split(", ")
                    .slice(0, 2)
                    .map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < 1 ? (
                          <>
                            ,<br />
                          </>
                        ) : null}
                      </span>
                    ))}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#E31837] shrink-0 stroke-[1.5]" />
                <span className="text-sm font-mono tracking-wider text-neutral-300">
                  {siteConfig.contact.phone.main}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#E31837] shrink-0 stroke-[1.5]" />
                <span className="text-sm tracking-wider text-neutral-300">
                  {siteConfig.contact.email.general}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-600">
            © {new Date().getFullYear()} {t("site.name")}. {t("footer.rights")}.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

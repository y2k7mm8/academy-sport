import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NationalColorBar } from "./NationalColorBar";
import { siteConfig } from "../constants/siteConfig";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navigation = [
    { path: "/", label: t("nav.home") },
    { path: "/about", label: t("nav.about") },
    { path: "/sports", label: t("nav.sports") },
    {
      path: "/athletes",
      label: language === "ru" ? "СПОРТСМЕНЫ" : "СПОРТЧУЛАР",
    },
    { path: "/achievements", label: t("nav.achievements") },
    { path: "/news", label: t("nav.news") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      {/* Top accent line representing national colors */}
      <NationalColorBar />
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Logo and Title */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative flex items-center justify-center w-12 h-12 border-2 border-[#E31837] group-hover:bg-[#E31837] transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-[#E31837] group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xl font-black tracking-tight text-neutral-900 leading-none mb-1 uppercase">
                  {t("site.name")}
                </span>
                <span className="text-[0.65rem] font-bold tracking-widest text-neutral-500 uppercase leading-none">
                  {t("site.subtitle")}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 h-full">
              <nav className="flex items-center space-x-8 h-full">
                {navigation.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative flex items-center h-full text-xs font-bold uppercase tracking-widest transition-colors ${
                      isActive(link.path)
                        ? "text-[#E31837]"
                        : "text-neutral-900 hover:text-[#E31837]"
                    }`}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#E31837]"></span>
                    )}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-4 border-l border-neutral-200 pl-6 ml-2">
                <LanguageSwitcher />
                <Link
                  to="/admin"
                  className="hidden xl:flex bg-[#D50000] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-sm items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  {language === "ru" ? "Платформа" : "Платформа"}
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-neutral-900 hover:text-[#E31837] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={28} strokeWidth={1.5} />
              ) : (
                <Menu size={28} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {navigation.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-4 px-2 text-sm font-bold uppercase tracking-widest border-b border-neutral-100 ${
                  isActive(link.path)
                    ? "text-[#E31837]"
                    : "text-neutral-900 hover:text-[#E31837]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-4 px-2 text-sm font-bold uppercase tracking-widest border-b border-neutral-100 text-[#D50000]"
            >
              {language === "ru" ? "ВХОД В ПЛАТФОРМУ" : "ПЛАТФОРМАГА КИРҮҮ"}
            </Link>
            <div className="py-4 px-2">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

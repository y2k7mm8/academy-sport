import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function NotFound() {
  const { t } = useLanguage();

  const popularLinks = [
    { label: t("nav.about"), path: "/about" },
    { label: t("nav.sports"), path: "/sports" },
    { label: t("nav.achievements"), path: "/achievements" },
    { label: t("nav.news"), path: "/news" },
    { label: t("nav.contact"), path: "/contact" },
  ];

  return (
    <div className="min-h-[80vh] bg-neutral-950 flex items-center justify-center relative overflow-hidden font-sans">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border-[40px] border-[#E31837] rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border-[40px] border-[#FFCD00]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        {/* 404 Number */}
        <div className="mb-12">
          <div className="text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter">
            <span className="text-[#E31837]">4</span>
            <span className="text-white">0</span>
            <span className="text-[#FFCD00]">4</span>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
          {t("notFound.title")}
        </h1>

        <p className="text-xl text-neutral-400 mb-12 max-w-xl mx-auto font-medium">
          {t("notFound.description")}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/"
            className="group bg-white text-neutral-950 px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-[#E31837] hover:text-white transition-all duration-300 flex items-center gap-4"
          >
            <Home className="w-5 h-5" />
            {t("notFound.backHome")}
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group border border-white/30 text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:border-white hover:bg-white/10 transition-all duration-300 flex items-center gap-4"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("nav.home")}
          </button>
        </div>

        {/* Additional Links */}
        <div className="mt-16 pt-16 border-t border-neutral-800">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">
            {t("footer.quickLinks")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {popularLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="text-sm font-bold uppercase tracking-widest text-neutral-400 hover:text-[#FFCD00] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

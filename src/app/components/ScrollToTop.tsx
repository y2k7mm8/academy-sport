import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * ScrollToTop component
 * Automatically scrolls to the top of the page when route changes
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}

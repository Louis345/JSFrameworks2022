import { useEffect, useCallback } from "react";

/**
 * Loads a stylesheet dynamically
 * @param {string} href stylesheet URL
 */
function useStylesheet(href) {
  /**
   * Loads Google's stylesheet to get font by dynamically creating a <link> tag
   * in the <head> of this page.
   */
  const fetch = useCallback(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.insertAdjacentElement("beforeend", link);
  }, [href]);

  useEffect(() => {
    const hasStyleSheet = !!document.querySelector(`link[href="${href}"]`);
    if (!hasStyleSheet) {
      fetch();
    }
  }, [fetch, href]);
}

export { useStylesheet };

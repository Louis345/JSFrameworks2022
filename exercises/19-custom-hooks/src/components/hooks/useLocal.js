import { useEffect } from "react";
import React from "react";

function useLocal() {
  const bodyFont = JSON.parse(localStorage.getItem("bodyFont")) || {};
  const headingFont = JSON.parse(localStorage.getItem("headingFont")) || {};
  const storeFont = (type, font) =>
    localStorage.setItem(type, JSON.stringify(font));

  return { bodyFont, headingFont, storeFont };
}

export { useLocal };

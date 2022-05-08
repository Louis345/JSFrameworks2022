import { useState, useEffect } from "react";
import axios from "axios";
import Font from "../Font/Font";
// Import things here

function FontSelector() {
  /**
   * This is repeated in the "<Preview />" component, so it should be a custom hook
   */
  const bodyFont = JSON.parse(localStorage.getItem("bodyFont")) || {};
  const headingFont = JSON.parse(localStorage.getItem("headingFont")) || {};
  /**
   * This is not repeated in "<Preview />", but it would probably
   * be a good idea to keep everything that uses localStorage together.
   */
  const storeFont = (type, font) =>
    localStorage.setItem(type, JSON.stringify(font));

  const [font, setFont] = useState({});

  const changeFont = (type, font) => {
    storeFont(type, font);
    setFont({ ...font });
  };

  const [text, setText] = useState(
    "Almost before we knew it, we had left the ground."
  );

  /**
   * Start of what needs to be refactored for "useAsync" hook
   */
  const [fonts, setFonts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  /**
   * IMPORTANT!!!
   * When you refactor this, if it stays within the "FontSelector" component,
   * this will cause a infinite loop. Place it above the line that says
   * @see function FontSelector() {
   */
  const fetcher = async () => {
    try {
      const res = await axios("http://localhost:7001/api/fonts");
      setFonts(res.data.fonts);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setHasError(false);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);
  /**
   * End of what needs to be refactored for "useAsync" hook
   */

  return (
    <>
      <div style={{ fontFamily: font.fontFamily }}>
        <h1 className="mt-3">{font.displayName || "Pick a font below"}</h1>
        <textarea
          className="form-control mt-3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="row g-2">
        {/* Depending on how you solve this challenge, you may need to change the line below */}
        {fonts.map((font, idx) => {
          const isBodySelected = font.id === bodyFont?.id;
          const isHeadingSelected = font.id === headingFont?.id;
          return (
            <div className="col col-12 col-md-4" key={`font-selector-${idx}`}>
              <Font
                fontFamily={font.fontFamily}
                displayName={font.displayName}
                href={font.stylesheet}
                isBodySelected={isBodySelected}
                setBodyFont={() => changeFont("bodyFont", font)}
                isHeadingSelected={isHeadingSelected}
                setHeadingFont={() => changeFont("headingFont", font)}
                headingFont={headingFont}
              />
            </div>
          );
        })}
        {isLoading && <p className="mt-3">Loading ...</p>}
        {hasError && (
          <div className="alert alert-danger mt-3" role="alert">
            Oops! An unexpected error occurred
          </div>
        )}
      </div>
    </>
  );
}

export default FontSelector;

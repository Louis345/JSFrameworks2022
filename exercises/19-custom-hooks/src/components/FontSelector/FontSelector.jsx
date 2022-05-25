import { useState, useEffect } from "react";
import axios from "axios";
import Font from "../Font/Font";
import { useLocal } from "../hooks/useLocal";
import { useAsync } from "../hooks/useAsync";

const fetcher = () =>
  axios("http://localhost:7001/api/fonts").then(
    (response) => response.data.fonts
  );

function FontSelector() {
  const { bodyFont, headingFont, storeFont } = useLocal();
  const { isLoading, hasError, data } = useAsync(fetcher);

  const [font, setFont] = useState({});

  const changeFont = (type, font) => {
    storeFont(type, font);
    setFont({ ...font });
  };

  const [text, setText] = useState(
    "Almost before we knew it, we had left the ground."
  );

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
        {data && data.map((font, idx) => {
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

import { useStylesheet } from "../../hooks/useStylesheet";

function Font({
  fontFamily,
  displayName,
  href,
  isBodySelected,
  setBodyFont,
  isHeadingSelected,
  setHeadingFont,
}) {
  useStylesheet(href);
  const bodyFontColor = isBodySelected ? "primary" : "outline-primary";
  const headingFontColor = isHeadingSelected ? "primary" : "outline-primary";
  return (
    <div className="card mt-3">
      <div className="card-body" style={{ fontFamily }}>
        {displayName}
      </div>
      <div className="card-footer">
        <div className="row" role="group">
          <button
            className={`col btn btn-sm btn-${bodyFontColor}`}
            onClick={setBodyFont}
          >
            Body
          </button>
          <button
            className={`col btn btn-sm btn-${headingFontColor}`}
            onClick={setHeadingFont}
          >
            Heading
          </button>
        </div>
      </div>
    </div>
  );
}

export default Font;

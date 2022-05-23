import { useState, useEffect } from "react";
import axios from "axios";

function Favorites() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios("https://dog.ceo/api/breed/husky/images/random/2").then((res) => {
      setPhotos(res.data.message);
    });
  }, []);

  return (
    <div className="row">
      {photos.map((src, idx) => {
        return (
          <div className="col s6 l4" key={`src-${idx}`}>
            <div className="card">
              <div className="card-image">
                <img src={src} alt="" />
              </div>
              <div className="card-content">
                <i className="material-icons">favorite</i> Husky
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Favorites;

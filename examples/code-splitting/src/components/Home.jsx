import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios("https://dog.ceo/api/breeds/image/random/10").then((res) => {
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
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;

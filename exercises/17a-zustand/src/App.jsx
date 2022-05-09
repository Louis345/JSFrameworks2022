import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  const like = () => setLikes(likes + 1);
  return (
    <div className="container mt-4 h1">
      <button className="btn btn-primary" onClick={like}>
        {likes} Likes
      </button>
    </div>
  );
}

export default App;

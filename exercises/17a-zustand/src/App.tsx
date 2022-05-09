import "./App.css";
import React, { useState } from "react";
import { useStore } from "./useStore";

function App() {
  const { likes, increaseLikes, decreaseLikes } = useStore((state) => state);
  return (
    <div className="container mt-4 h1">
      <h1>{likes} Likes</h1>
      <button className="btn btn-primary" onClick={increaseLikes}>
        Like
      </button>
      <button className="btn btn-primary" onClick={decreaseLikes}>
        UnLike
      </button>
    </div>
  );
}

export default App;

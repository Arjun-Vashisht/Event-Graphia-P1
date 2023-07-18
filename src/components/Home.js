import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [page, setPage] = useState(1);
  const [imageIndexArr, setImageIndexArr] = useState([]);
  useEffect(() => {
    setImageIndexArr((preVal) => [...Array(preVal.length + 30).keys()]);
  }, [page]);
  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (isBottom) {
        setPage((preVal) => preVal + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      {imageIndexArr.map((image) => (
        <div className="item">
          <img
            key={image}
            src={`http://via.placeholder.com/200x200?text=${image + 1}`}
            alt="image"
          />
        </div>
      ))}
    </div>
  );
};

export default Home;

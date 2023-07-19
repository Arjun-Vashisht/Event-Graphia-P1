import React, { useState, useEffect } from "react";
import "./Home.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { saveAs } from "file-saver";
import debounce from "lodash.debounce";
const Home = () => {
  const [page, setPage] = useState(1);
  const [imageIndexArr, setImageIndexArr] = useState([]);
  const [isPopup, setisPopup] = useState(false);
  const [activeImage, setActiveImage] = useState(1);
  useEffect(() => {
    setImageIndexArr((preVal) => [...Array(preVal.length + 30).keys()]);
  }, [page]);
  useEffect(() => {
    const debouncedHandleScroll = debounce(() => {
      console.log('hi')
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (isBottom) {
        setPage((preVal) => preVal + 1);
      }
    },200)
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      {imageIndexArr.map((image) => (
        <div key={image} className="item">
          <img
            key={image}
            src={`http://via.placeholder.com/200x200?text=${image + 1}`}
            alt="name"
            onClick={() => {
              setActiveImage(image);
              setisPopup(true);
            }}
          />
        </div>
      ))}
      <Popup
        open={isPopup}
        position="right center"
        modal
        arrow
        className="popupStyle"
        // height={1000}
        onClose={() => {
          setisPopup(false);
        }}
      >
        <svg style={{cursor:'pointer'}}
          onClick={() => {
            if (activeImage >= 1) setActiveImage(activeImage - 1);
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="1.3em"
          viewBox="0 0 448 512"
        >
          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
        </svg>
        <img
          src={`https://via.placeholder.com/2000x2000?text=${activeImage + 1}`}
          alt="name"
          className="full-image"
        />
        <svg  style={{cursor:'pointer'}}
          onClick={() => setActiveImage(activeImage + 1)}
          xmlns="http://www.w3.org/2000/svg"
          height="1.3em"
          viewBox="0 0 448 512"
        >
          <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
        </svg>
        <svg style={{cursor:'pointer'}}
          onClick={()=>saveAs(`http://via.placeholder.com/2000x2000?text=${activeImage + 1}`,'image.jpg')}
          className="downImage"
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 384 512"
        >
          <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" />
        </svg>
      </Popup>
    </div>
  );
};

export default Home;

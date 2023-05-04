import React, { useEffect, useState } from "react";
import { HoverSlideshow } from "react-hover-slideshow";
import styles from "./SlideShow.module.css";

// As a function component
function SlideShow() {
  const imageURLs = [
    "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",

    "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
  ];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  const imageWidth = windowWidth <= 850 ? "300px" : "800px";
  const imageHeight = windowWidth <= 850 ? "300px" : "800px";

  return (
    <div className={styles.Slide}>
      <HoverSlideshow
        aria-label="My pretty picture slideshow"
        images={imageURLs}
        width={imageWidth}
        height={imageHeight}
        className={styles.images}
      />
    </div>
  );
}
export default SlideShow;

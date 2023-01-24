import React, { useState, useEffect } from "react";
import blurImage from "../../images/blurImage.jpg";
import hdImage from "../../images/hdimage.jpg";

const ProgressiveImage = () => {
  return (
    <ProgressiveComponent
      height={"1000px"}
      width={"1000px"}
      src={hdImage}
      placeholderImg={blurImage}
    />
  );
};

export default ProgressiveImage;

const ProgressiveComponent = ({ src, height, width, placeholderImg }) => {
  const [img, setImage] = useState(placeholderImg || src);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImage(src);
    };
  }, [src]);

  return (
    <>
      <img src={img} height={height} width={width} alt="image" />
    </>
  );
};

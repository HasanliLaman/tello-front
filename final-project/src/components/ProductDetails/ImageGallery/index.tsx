import React from "react";
import StyleImageGallery from "./style";
import ReactImageGallery from "react-image-gallery";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

const ImageGalleryContainer = () => {
  const data = useSelector((state: RootState) => state.product);
  const images = data.product.assets.map((el: any) => {
    return { original: el.url, thumbnail: el.url };
  });

  return (
    <StyleImageGallery>
      <ReactImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </StyleImageGallery>
  );
};

export default ImageGalleryContainer;

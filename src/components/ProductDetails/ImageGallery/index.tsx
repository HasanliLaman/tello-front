import React from "react";
import StyleImageGallery from "./style";
import ReactImageGallery from "react-image-gallery";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import { Image } from "../../../models/productInfo";

const ImageGalleryContainer: React.FC<{ selectedColor: number }> = ({
  selectedColor,
}) => {
  const data = useSelector((state: RootState) => state.product);
  const product = data.product.data.product;
  const imagesWithoutVariants = data.product.data.product.assets.map(
    (el: Image) => {
      return { original: el.url, thumbnail: el.url };
    }
  );
  const imagesWithVariants = data.product.data.product.assets
    .slice(
      (product.assets.length * selectedColor) / product.colors.length,
      (product.assets.length * selectedColor) / product.colors.length +
        product.assets.length / product.colors.length
    )
    .map((el: Image) => {
      return { original: el.url, thumbnail: el.url };
    });

  const images = product.colors[0] ? imagesWithVariants : imagesWithoutVariants;

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

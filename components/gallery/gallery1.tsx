"use client"
import * as React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import slides from "@/app/photo/data/slides";
import "yet-another-react-lightbox/styles.css";

export default function Gallery1() {
  const [index, setIndex] = React.useState(-1);

  return (
    <div className="mx-auto max-w-screen-xl px-8 mt-24">
        <PhotoAlbum
        layout="rows"
        photos={slides}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />
  
      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

  
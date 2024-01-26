import { ibmBold } from "@/utils/fonts";
import { cls } from "@/utils/misc";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function SecondaryGallery({
  galleryPhotos,
}: {
  galleryPhotos: string[];
}) {
  const [photoIndex, setPhotoIndex] = useState(-1);
  return (
    <div className="flex flex-col items-center gap-10">
      <Lightbox
        open={photoIndex !== -1}
        index={photoIndex}
        close={() => setPhotoIndex(-1)}
        slides={galleryPhotos.map((image) => ({src: image, caption: ""}))}
      />
      <div className="grid w-full max-w-[1280px] grid-cols-1 gap-6 px-8 md:grid-cols-3">
        {(galleryPhotos ?? []).map((image, index) => (
          <div
            key={index}
            onClick={() => {
              console.log("clicked",index);
              setPhotoIndex(index);
            }}
            className="cursor-pointer rounded-xl border bg-white p-1 text-center"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src={image}
              alt="gallery"
              className="h-full w-full rounded-lg object-cover"
              layout="responsive"
              width={16}
              height={9}
            />
          </div>
        ))}
      </div>
      <Link
        className={
          (cls(ibmBold.className),
          "font-bold rounded-xl h-[54px] border-2 border-[#000000] bg-[#A5CE89] px-6 text-center pt-3 cursor-pointer")
        }
        href="https://s.thistine.com/jpc16-pic"
      >
        Download pictures
      </Link>
    </div>
  );
}

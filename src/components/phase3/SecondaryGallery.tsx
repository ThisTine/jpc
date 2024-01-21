import { ibmBold } from "@/utils/fonts";
import { cls } from "@/utils/misc";
import Image from "next/image";

export default function SecondaryGallery({
  galleryPhotos,
}: {
  galleryPhotos: string[];
}) {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="grid w-full max-w-[1280px] grid-cols-1 gap-6 px-8 md:grid-cols-3">
        {[...galleryPhotos, ...galleryPhotos, galleryPhotos]
          .slice(0, 9)
          .map((image, index) => (
            <div
              key={index}
              className="rounded-xl border bg-white p-1 text-center"
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
      <div
        className={
          (cls(ibmBold.className),
          "font-bold rounded-xl h-[54px] border-2 border-[#000000] bg-[#A5CE89] px-6 text-center pt-3 cursor-pointer")
        }
        onClick={() => {}}
      >
        Download pictures
      </div>
    </div>
  );
}

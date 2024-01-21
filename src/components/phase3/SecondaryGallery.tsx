import Image from "next/image";

export default function SecondaryGallery({
  galleryPhotos,
}: {
  galleryPhotos: string[];
}) {
  return (
    <div className="grid grid-cols-3 gap-6 w-full max-w-[1280px]">
      {galleryPhotos.map((image, index) => (
        <div
          key={image}
          className="border rounded-xl p-1 text-center bg-white"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={image}
            alt="gallery"
            className="w-full h-full object-cover rounded-lg"
            layout="responsive"
            width={16}
            height={9}
          />
        </div>
      ))}
    </div>
  );
}

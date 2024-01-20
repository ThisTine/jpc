export default function SecondaryGallery() {
  return (
    <div className="grid grid-cols-3 gap-6 w-full max-w-[1280px]">
      {Array.from({ length: 9 }, (_, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 text-center bg-white"
          style={{ aspectRatio: "16/9" }}
        ></div>
      ))}
    </div>
  );
}

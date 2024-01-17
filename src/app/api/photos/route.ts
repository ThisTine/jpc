import * as fs from "fs";

export async function GET(){
  const photoPath = process.cwd() +"/public/photos";
  const slider = photoPath+"/slider";
  const gallery = photoPath+"/gallery";
  const sliderPhotos: string[] = [];
  const galleryPhotos: string[] = [];
  fs.readdirSync(slider).forEach(file => {
    sliderPhotos.push("/photos/slider/"+file);
  });
  fs.readdirSync(gallery).forEach(file => {
    galleryPhotos.push("/photos/gallery/"+file);
  });
  return new Response(JSON.stringify({sliderPhotos,galleryPhotos}), {status: 200});
}

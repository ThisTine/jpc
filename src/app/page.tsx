import Phase3Agenda from "@/components/phase3/Agenda";
import Phase3Footer from "@/components/phase3/Footer";
import Phase3Sponsor from "@/components/phase3/Sponsor";
import Phase3CsSIT from "@/components/phase3/cs-sit";
import Phase3FaqContact from "@/components/phase3/faq-contact";
import Phase3Title from "@/components/phase3/title";

export default async function Home() {
  const images = await fetchImages();
  return (
    <main className="w-full overflow-hidden">
      <Phase3Title {...images} />
      <Phase3Agenda />
      <Phase3Sponsor />
      <Phase3CsSIT />
      <Phase3FaqContact />
      <Phase3Footer />
    </main>
  );
}

const fetchImages = async () => {
  try{
    const res = await fetch("http://localhost:3000/api/photos", {
      next: {
        revalidate: 60,
      },
    });
    const images = await res.json();
    return images as { sliderPhotos: string[]; galleryPhotos: string[] };
  }catch (err){
    return { sliderPhotos: [], galleryPhotos: [] };
  }

};

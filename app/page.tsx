import { Commentssec, Distancesec, Herosec, Mapsec, Moresec, NumBoxessec, Projectssec, Servicesec, Whatsicon } from "@/components";
import SocialBoxessec from "@/components/SocialBoxessec";
import { HeroSldieText, SlidesImages } from "@/Constants";

export default function Home() {
  return (
    <>
      <Herosec slide1={SlidesImages.HeroSlides.Slide1} slide2={SlidesImages.HeroSlides.Slide2} slide3={SlidesImages.HeroSlides.Slide3}
      bgcolor={""} title={HeroSldieText.title} bio={HeroSldieText.bio} slide4={SlidesImages.HeroSlides.Slide4} slide5={SlidesImages.HeroSlides.Slide5} slide6={SlidesImages.HeroSlides.Slide6} slide7={SlidesImages.HeroSlides.Slide7} slide8={SlidesImages.HeroSlides.Slide8} slide9={SlidesImages.HeroSlides.Slide9} />
      
      <Moresec />
      
      <Servicesec />
      <div className="flex w-full justify-center items-center bg-amber-400 pt-10 -translate-y-40 ">
        <h1 className="md:text-[50px] text-4xl text-white border-white border-0 border-solid px-6 rounded-2xl font-sans py-2 font-bold" >
          من أعمالنا
        </h1>
      </div>
      <Projectssec />
      
      <NumBoxessec />
      <Commentssec />
      <Whatsicon />
      <Mapsec />
      <SocialBoxessec />
      
    </>
  );
}



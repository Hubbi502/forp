import HeroSectionTitle from "../ui/hero/title"
import VideoPlaceholder from "../ui/hero/videoPlaceholder"
import WhatsAppButton from "../ui/hero/whatsappButton"
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroSection() {
  useEffect(() => {
        AOS.init({
          duration: 1000, // Global animation duration
          once: true, // Only animate once
        });
      }, []);


  return(
    <div className="flex flex-col items-center justify-center bg-[#121212]" data-aos="fade-up" data-aos-duration="1000">
      <HeroSectionTitle />
      <VideoPlaceholder />
      <WhatsAppButton />
    </div>
  )
}
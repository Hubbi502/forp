import HeroSectionTitle from "../ui/hero/title"
import VideoPlaceholder from "../ui/hero/videoPlaceholder"
import WhatsAppButton from "../ui/hero/whatsappButton"
export default function HeroSection() {
  return(
    <div className="flex flex-col items-center justify-center bg-[#121212]">
      <HeroSectionTitle />
      <VideoPlaceholder />
      <WhatsAppButton />
    </div>
  )
}
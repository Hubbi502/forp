import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './aos-custom.css'

export default function VideoPlaceholder()   {
  useEffect(() => {
          AOS.init({
            duration: 1000, // Global animation duration
            once: true, // Only animate once
          });
        }, []);

  return (
    <div className="w-[80%] h-[40svw] bg-[#292929] rounded-3xl mt-10 flex justify-center items-center" 
    data-aos="flip-down-lite"
    data-aos-delay="100"
    data-aos-duration="1000">
      <button className="w-[8%] h-[6.33svw] rounded-full bg-[#a8a8a8] active:bg-[#8a8a8a] flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-play"
        >
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      </button>
    </div>
  );
}

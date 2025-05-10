import { useState, useEffect } from "react";
import IngredientsCard from "../ui/Ingredients/card";
import Marquee from "react-fast-marquee";

export default function Ingredients() {
  const [isMobile, setIsMobile] = useState<Boolean>(false);
  const [gradientWidth, setGradientWidth] = useState<number>(300);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 800);
      setGradientWidth(Math.max(50, width * 0.1)); // Gradient width 10% of screen width, minimum 50px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <section
        className={`mt-[10rem] ` + (isMobile ? "w-full" : "w-[80%]")}
        id="ingredients"
      >
        <Marquee
          autoFill
          gradient={true}
          gradientColor="#000000"
          gradientWidth={gradientWidth}
        >
          {[...Array(3)].map((_, index) => (
            <IngredientsCard key={index} />
          ))}
        </Marquee>
      </section>
    </div>
  );
}

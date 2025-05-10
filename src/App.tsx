import type { JSX } from "react";
import HeroSection from "./components/layout/HeroSection";
import About from "./components/layout/About";
import Ingredients from "./components/layout/Ingredients";
export default function App(): JSX.Element {
  return (
    <>
    <HeroSection />
    <About />
    <Ingredients />
    </>
);
}
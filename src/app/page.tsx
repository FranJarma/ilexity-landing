import { Metadata } from "next";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ScrollUp from "@/components/Common/ScrollUp";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Ilexity | Hacemos realidad tus ideas",
  description: "En Ilexity nos preocupamos por hacer realidad tus ideas, contamos con un equipo de profesionales que te ayudarán a llevar tu proyecto al siguiente nivel.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Services />
      {/* <Brands /> Cuando tengamos clientes */}
      <Technologies />
      <Process />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}

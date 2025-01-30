import { Service } from "@/types/service";
import Image from "next/image";

const servicesData: Service[] = [
  {
    id: 1,
    icon: <Image src="/images/services/landing-page.svg" alt="Landing Pages" width={40} height={40} />,  
    title: "Landing Pages",
    paragraph:
      "Creamos landing pages efectivas y optimizadas para convertir visitantes en clientes potenciales, utilizando las mejores prácticas de diseño y desarrollo web.",
  },
  {
    id: 2,
    icon: <Image src="/images/services/management-system.svg" alt="Sistemas de Gestión" width={40} height={40} />,
    title: "Sistemas de Gestión",
    paragraph:
      "Desarrollamos sistemas de gestión personalizados que ayudan a las empresas a optimizar sus procesos y mejorar la eficiencia operativa.",
    },
    {
    id: 3,
    icon: <Image src="/images/services/ai.svg" alt="Automatizaciones con IA" width={40} height={40} />,
    title: "Automatizaciones con IA",
    paragraph:
      "Creamos soluciones de automatización impulsadas por inteligencia artificial que optimizan procesos y mejoran la eficiencia.",
    }
];
export default servicesData;

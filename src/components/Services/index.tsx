import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <>
      <section id="servicios" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Nuestros servicios"
            paragraph="Ofrecemos distintos tipos de servicios que se ajustan a tu negocio o emprendimiento."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-3">
            {servicesData.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

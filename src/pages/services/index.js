import SEO from "@/components/SEO";
import ServiceCard from "../../components/services/ServiceCard";

const services = [
  {
    id: "vitiligo",
    title: "Vitiligo Treatment",
    description: "Advanced treatment protocols for vitiligo management and skin repigmentation.",
    image: "/images/services/vitiligo.jpg",
  },
  {
    id: "psoriasis",
    title: "Psoriasis Treatment",
    description: "Effective management and treatment of psoriasis symptoms.",
    image: "/images/services/psoriasis.png",
  },
  {
    id: "skin-disease",
    title: "General Skin Diseases",
    description: "Expert diagnosis and treatment for a wide range of common and complex skin conditions.",
    image: "/images/services/skin-disease.jpg",
  },
  {
    id: "knee-pain",
    title: "Knee & Joint Pain",
    description: "Effective non-surgical treatment for chronic knee and joint pain, improving mobility and comfort.",
    image: "/images/services/knee.jpg",
  },
  {
    id: "piles",
    title: "Piles (Hemorrhoids)",
    description: "Advanced and non-invasive treatment options for piles and fissures, ensuring relief and recovery.",
    image: "/images/services/piles.jpg",
  },
  {
    id: "infertility",
    title: "Infertility Treatment",
    description: "Comprehensive care and treatment for male and female infertility issues, guiding you towards parenthood.",
    image: "/images/services/womens-health.jpg", // Note: The previous image for infertility used womens-health.jpg
  },
  // {
  //   id: "womens-health",
  //   title: "Women’s Diseases",
  //   description: "Specialized care for a range of gynecological disorders and women's health issues.",
  //   image: "/images/services/womens-health.jpg",
  // },
];

export default function ServicesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <SEO
        title="Our Services | Sanjeevani Aarogya Kendra"
        description="Comprehensive Healthcare Solutions at Sanjeevani Aarogya Kendra including Vitiligo, Psoriasis, Joint Pain, and more."
        canonical={process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/services` : undefined}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Comprehensive Healthcare Solutions at Sanjeevani Aarogya Kendra
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

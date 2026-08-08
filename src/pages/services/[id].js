import { useRouter } from "next/router";
import Image from "next/image";
import { serviceImages } from "../../config/images";
import SEO from "@/components/SEO";

const serviceDetails = {
  "vitiligo": {
    title: "Vitiligo Treatment",
    description: "Advanced treatment for vitiligo using modern medical approaches",
    image: serviceImages.vitiligo.primary,
    content: [
      "Comprehensive diagnosis and treatment planning",
      "Advanced phototherapy treatments",
      "Topical medications and supplements",
      "Lifestyle and dietary recommendations",
      "Regular monitoring and adjustments",
    ],
  },
  "psoriasis": {
    title: "Psoriasis Treatment",
    description: "Effective management of psoriasis symptoms",
    image: serviceImages.psoriasis.primary,
    content: [
      "Personalized treatment plans",
      "Advanced topical treatments",
      "Systemic medications when needed",
      "Lifestyle modification guidance",
      "Regular follow-up care",
    ],
  },
  "skin-disease": {
    title: "Skin Disease Treatment",
    description: "Expert care for various skin conditions and disorders.",
    image: serviceImages.skinDisease.primary,
    content: [
      "Diagnosis and treatment of acne, eczema, and rashes",
      "Fungal and bacterial infection management",
      "Allergy testing and treatment",
      "Personalized skincare routines",
    ],
  },
  "knee-pain": {
    title: "Knee and Joint Pain",
    description: "Effective non-surgical treatment for chronic knee and joint pain.",
    image: serviceImages.kneePain.primary,
    content: [
      "Comprehensive assessment of joint issues",
      "Pain relief therapies",
      "Lifestyle and exercise recommendations",
      "Management of arthritis and other joint disorders",
    ],
  },
  "piles": {
    title: "Piles (Hemorrhoids) Treatment",
    description: "Advanced and non-invasive treatment for piles and fissures.",
    image: serviceImages.piles.primary,
    content: [
      "Consultation and diagnosis",
      "Medication and dietary advice",
      "Minimally invasive procedures",
      "Post-treatment care and prevention tips",
    ],
  },
  "infertility": {
    title: "Infertility Treatment",
    description: "Comprehensive care and treatment for male and female infertility issues.",
    image: serviceImages.infertility.primary,
    content: [
      "Detailed fertility assessment for couples",
      "Hormonal treatments and ovulation induction",
      "Guidance on lifestyle and nutritional factors",
      "Supportive care throughout the treatment process",
    ],
  },
  "womens-health": {
    title: "Women’s Diseases (Gynecological Disorders)",
    description: "Specialized care for a range of gynecological disorders and women's health issues.",
    image: serviceImages.womenHealth.primary,
    content: [
      "Diagnosis and treatment of common gynecological problems",
      "Management of menstrual disorders",
      "Preventive care and health check-ups",
      "Confidential and compassionate consultations",
    ],
  },
};

export default function ServiceDetail() {
  const router = useRouter();
  const { id } = router.query;
  const service = serviceDetails[id];

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold text-gray-700">Service not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <SEO
        title={`${service.title} | Sanjeevani Aarogya Kendra`}
        description={service.description}
        canonical={process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/services/${id}` : undefined}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              {service.description}
            </p>
            
            <div className="mt-10 rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200">
              <h2 className="text-2xl font-semibold leading-8 text-gray-900 mb-6">
                Treatment Features:
              </h2>
              <ul className="space-y-4">
                {service.content.map((item, index) => (
                  <li key={index} className="flex gap-x-3">
                    <svg className="mt-1 h-5 w-5 flex-none text-teal-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl lg:aspect-auto lg:h-[600px]">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Object.keys(serviceDetails).map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}

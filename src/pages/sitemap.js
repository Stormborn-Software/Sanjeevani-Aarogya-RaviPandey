import SEO from "@/components/SEO";
import Link from "next/link";

export default function Sitemap() {
  const pages = [
    {
      category: "Main Pages",
      links: [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/about" },
        { title: "Services", path: "/services" },
        { title: "Result", path: "/result" },
        { title: "Contact", path: "/contact" },
      ],
    },
    {
      category: "Services",
      links: [
        { title: "Vitiligo Treatment", path: "/services/vitiligo" },
        { title: "Psoriasis Treatment", path: "/services/psoriasis" },
        { title: "Skin Disease Treatment", path: "/services/skin-disease" },
        { title: "Knee & Joint Pain", path: "/services/knee-pain" },
        { title: "Piles (Hemorrhoids)", path: "/services/piles" },
        { title: "Infertility Treatment", path: "/services/infertility" },
        { title: "Women's Diseases", path: "/services/womens-health" },
      ],
    },
    {
      category: "Legal",
      links: [
        { title: "Privacy Policy", path: "/privacy-policy" },
        { title: "Terms & Conditions", path: "/terms" },
      ],
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <SEO
        title="Sitemap | Sanjeevani Aarogya Kendra"
        description="Sitemap for Sanjeevani Aarogya Kendra - Dr. Ravi Pandey."
        canonical={process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap` : undefined}
      />
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 border-b pb-4">
          Sitemap
        </h1>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-semibold text-teal-600 mb-6 border-b border-gray-100 pb-2">
                {section.category}
              </h2>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-gray-600 hover:text-teal-500 hover:underline transition-colors duration-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

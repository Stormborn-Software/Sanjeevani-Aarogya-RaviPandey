import React from "react";
import Image from "next/image";
import Link from "next/link";

// Accepts either a `service` object or individual props
const ServiceCard = ({
  service,
  id,
  name,
  title,
  description,
  image,
  imageUrl,
  link,
}) => {
  const svc = service || {};
  const displayTitle = svc.title || title || name || "Service";
  const displayDesc = svc.description || description || "";
  const href =
    link ||
    (svc.id ? `/services/${svc.id}` : id ? `/services/${id}` : "/services");
  const src = svc.image || image || imageUrl || "/images/placeholder.jpg";

  return (
    <Link href={href} className="block group h-full">
      <div className="relative h-full rounded-lg overflow-hidden shadow-lg bg-white transition-shadow duration-300 hover:shadow-2xl">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={src}
            alt={displayTitle}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">{displayTitle}</h3>
          <p className="mt-2 text-gray-600 text-sm">{displayDesc}</p>
        </div>
        <div className="absolute bottom-6 right-6 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="bg-teal-400 text-gray-900 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

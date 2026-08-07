import SEO from "@/components/SEO";
import React from "react";

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms and Conditions | Sanjeevani Aarogya Kendra"
        description="Terms and conditions for using Sanjeevani Aarogya Kendra services."
        canonical={process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/terms` : undefined}
      />
      <div className="bg-white py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            By accessing and using Sanjeevani Aarogya Kendra's services, you agree to be bound by these terms and conditions.
          </p>
          <div className="mt-10 max-w-2xl">
            <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">1. Acceptance of Terms</h2>
            <p className="mt-4">
              By accessing and using Sanjeevani Aarogya Kendra's services, you agree to be bound by these terms and conditions.
            </p>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">2. Medical Services</h2>
            <p className="mt-4">
              Our medical services are provided by qualified healthcare professionals. Treatment outcomes may vary based on individual cases.
            </p>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">3. Appointments and Cancellations</h2>
            <p className="mt-4">
              Please provide at least 24 hours notice for appointment cancellations. Repeated no-shows may affect future appointment scheduling.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

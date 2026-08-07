import SEO from "@/components/SEO";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Sanjeevani Aarogya Kendra"
        description="Privacy policy detailing how we handle your information at Sanjeevani Aarogya Kendra."
        canonical={process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy` : undefined}
      />
      <div className="bg-white py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            At Sanjeevani Aarogya Kendra, we are committed to protecting your privacy and ensuring the security of your personal and medical information.
          </p>
          <div className="mt-10 max-w-2xl">
            <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">Information We Collect</h2>
            <p className="mt-4">
              At Sanjeevani Aarogya Kendra, we collect information that you provide directly to us, including personal information and medical history necessary for your treatment.
            </p>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">How We Use Your Information</h2>
            <p className="mt-4">
              We use the information we collect to provide medical services, communicate with you about appointments, and improve our services.
            </p>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">Information Security</h2>
            <p className="mt-4">
              We implement appropriate security measures to protect your personal and medical information from unauthorized access or disclosure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

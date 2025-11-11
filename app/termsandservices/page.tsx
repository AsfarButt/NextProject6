"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const currentTime = new Date();
  const date = currentTime.getDate();
  const month = currentTime.toLocaleString("en-US", { month: "long" });
  const year = currentTime.getFullYear();

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      <div className="relative w-full py-8 border-b border-gray-400/40 flex justify-center items-center">
        <div className="relative w-full max-w-270">
          <button className="font-semibold text-[20px]" onClick={() => router.back()}>
            ← Back
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-280 h-auto flex flex-col px-2 sm:px-2 md:px-4 lg:px-8 justify-center items-center">
        <div className="relative w-full h-auto flex flex-col justify-start items-center">
          <div className="relative w-full py-8">
            <h1 className="text-4xl pb-8 font-bold font-sans text-black/90">Terms and Conditions</h1>
            <h2 className="text-gray-600/80 text-[19px] font-sans">
              Last updated {month} {date}, {year}
            </h2>
          </div>

          {/* 1st Paragraph */}
          <div className="relative mb-4 w-full h-auto">
            <h1 className="text-[26px] text-black/80 font-bold font-sans">1. Acceptance of Terms</h1>
            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
              By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
            </h2>
          </div>

          {/* 2nd Paragraph */}
          <div className="relative mb-4 w-full h-auto">
            <h1 className="text-[26px] text-black/80 font-bold font-sans">2. Account Responsibilities</h1>
            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
              Users are responsible for maintaining the confidentiality of their account information, including passwords, and for all activities under their account.
            </h2>
          </div>

          {/* 3rd Paragraph */}
          <div className="relative mb-4 w-full h-auto">
            <h1 className="text-[26px] text-black/80 font-bold font-sans">3. Use of Services</h1>
            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
              You may use our services only for lawful purposes and in accordance with these Terms. Prohibited uses include unauthorized access, disruption of services, or any activity that violates applicable laws.
            </h2>
          </div>

          {/* 4th Paragraph */}
          <div className="relative mb-4 w-full h-auto">
            <h1 className="text-[26px] text-black/80 font-bold font-sans">4. Intellectual Property</h1>
            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
              All content, trademarks, and materials provided by our platform are our property or licensed to us. You may not copy, modify, distribute, or create derivative works without permission.
            </h2>
          </div>

          {/* 5th Paragraph */}
          <div className="relative mb-4 w-full h-auto">
            <h1 className="text-[26px] text-black/80 font-bold font-sans">5. Third-Party Links</h1>
            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
              Our platform may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of these websites.
            </h2>
          </div>

          {/* 6th Paragraph */}
          <div className="relative mb-4 w-full h-auto">
            <h1 className="text-[26px] text-black/80 font-bold font-sans">6. Limitation of Liability</h1>
            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from your use of the services.
            </h2>
          </div>

          {/* 7th Paragraph */}
          <div className="relative mb-4 w-full h-auto">
            <h1 className="text-[26px] text-black/80 font-bold font-sans">7. Termination</h1>
            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
              We may suspend or terminate your account at our discretion, with or without notice, for violations of these Terms or other reasons deemed necessary.
            </h2>
          </div>

          {/* 8th Paragraph */}
          <div className="relative mb-4 w-full h-auto">
            <h1 className="text-[26px] text-black/80 font-bold font-sans">8. Governing Law</h1>
            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
              These Terms are governed by and construed in accordance with the laws of the United Kingdom, and any disputes shall be resolved in the relevant courts.
            </h2>
          </div>

          {/* 9th Paragraph */}
          <div className="relative mb-4 w-full h-auto">
            <h1 className="text-[26px] text-black/80 font-bold font-sans">9. Changes to Terms</h1>
            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
              We may update these Terms and Conditions from time to time. Continued use of our services constitutes acceptance of the updated terms.
            </h2>
          </div>

          {/* 10th Paragraph */}
          <div className="relative mb-4 w-full h-auto">
            <h1 className="text-[26px] text-black/80 font-bold font-sans">10. Contact Us</h1>
            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
              For questions regarding these Terms and Conditions, please contact us at <span className="font-bold font-sans">contact@gradewise.ai</span>.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

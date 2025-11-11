"use client";
import {useRouter} from "next/navigation";

export default function Page(){

    const router = useRouter();
    const currentTime = new Date();
    const date = currentTime.getDate();
    const month = currentTime.toLocaleString("en-US", { month: "long" });
    const year = currentTime.getFullYear();

    return(
        <div className="relative px-2 w-full h-full flex flex-col justify-center items-center">
            <div className="relative w-full py-8 border-b border-gray-400/40 flex justify-center items-center">
                    <div className="relative w-full max-w-270">
                    <button className="font-semibold text-[20px]" onClick={() => router.back()} >← Back</button>
                </div>
            </div>

            <div className="relative w-full max-w-280 h-auto flex flex-col px-2 sm:px-2 md:px-4 lg:px-8 justify-center items-center">
                <div className="relative w-full h-auto flex flex-col justify-start items-center">

                    <div className="relative w-full py-8">
                        <h1 className="text-3xl sm:text-4xl pb-4 sm:pb-8 font-bold font-sans text-black/90">Privacy Policy</h1>
                        <h2 className="text-gray-600/80 text-[19px] font-sans">Last updated {month} {date},{year}</h2>
                    </div>

                    <div className="relative w-full h-auto px-2 origin-top scale-90 sm:scale-100">
                        {/* 1st Paragraph */}
                        <div className="relative mb-3 w-full h-auto">
                            <h1 className="text-[26px] text-black/80 font-bold font-sans">1. Information We Collect</h1>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">We collect information you provide directly to us, including:</h2>
                            <ul className="pl-6 py-4 list-disc text-gray-900/85 text-[20px] font-sans">
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Name and email address when you create an account</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Educational preferences and exam board selections</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Learning progress and performance data</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Questions attempted and answers provided</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Study patterns and session duration</li>
                            </ul>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
                                We also automatically collect certain information when you use our Services, including IP address, browser type, device information, and usage data.
                            </h2>
                        </div>
                        
                        {/* 2nd Paragraph */}
                        <div className="relative mb-3 w-full h-auto">     
                            <h1 className="text-[26px] text-black/80 font-bold font-sans">2. How We Use Your Information</h1>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">We use the information we collect to:</h2>
                            <ul className="pl-6 py-4 list-disc text-gray-900/85 text-[20px] font-sans">
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Provide and maintain our educational services</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Personalize your learning experience</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Track your progress and provide analytics</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Improve our platform and services</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Communicate with you about your account</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Comply with legal obligations</li>
                            </ul>
                        </div>

                        {/* 3rd Paragraph */}
                        <div className="relative mb-3 w-full h-auto">     
                            <h1 className="text-[26px] text-black/80 font-bold font-sans">3. Legal Basis for Processing (UK/EU Users)</h1>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">Under UK GDPR and EU GDPR, we process your personal data based on the following legal grounds:</h2>
                            <ul className="pl-6 py-4 list-disc text-gray-900/85 text-[20px] font-sans">
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]"><span className="font-semibold">Contract:</span> To provide our educational services</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]"><span className="font-semibold">Legitimate Interest:</span> To improve our services and provide personalized learning</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]"><span className="font-semibold">Consent:</span>  For marketing communications (where applicable)</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]"><span className="font-semibold">Legal Obligation:</span> To comply with applicable laws</li>
                            </ul>
                        </div>

                        {/* 4th Paragraph */}
                        <div className="relative mb-3 w-full h-auto">     
                            <h1 className="text-[26px] text-black/80 font-bold font-sans">4. Information Sharing</h1>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">We do not sell your personal information. We may share your information with:</h2>
                            <ul className="pl-6 py-4 list-disc text-gray-900/85 text-[20px] font-sans">
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Service providers who assist in operating our platform</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Analytics providers (PostHog, Firebase)</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">AI service providers for educational features</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Legal authorities when required by law</li>
                            </ul>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">All third-party service providers are bound by data processing agreements and appropriate safeguards.</h2>
                        </div>

                        {/* 5th Paragraph */}
                        <div className="relative mb-3 w-full h-auto">     
                            <h1 className="text-[26px] text-black/80 font-bold font-sans">5. International Data Transfers</h1>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">Your information may be transferred to and processed in the United States. We ensure appropriate safeguards are in place for such transfers, including:</h2>
                            <ul className="pl-6 py-4 list-disc text-gray-900/85 text-[20px] font-sans">
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Adequacy decisions where applicable</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]">Other appropriate safeguards as required by law</li>
                            </ul>
                        </div>

                        {/* 6th Paragraph */}
                        <div className="relative mb-3 w-full h-auto">     
                            <h1 className="text-[26px] text-black/80 font-bold font-sans">6. Data Security</h1>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
                                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction, including encryption, access controls, and regular security assessments.
                            </h2>
                        </div>

                        {/* 7th Paragraph */}
                        <div className="relative mb-3 w-full h-auto">     
                            <h1 className="text-[26px] text-black/80 font-bold font-sans">7. Your Rights (UK/EU Users)</h1>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">Under UK GDPR and EU GDPR, you have the following rights:</h2>
                            <ul className="pl-6 py-4 list-disc text-gray-900/85 text-[20px] font-sans">
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]"><span className="font-semibold">Right of Access:</span> Request a copy of your personal data</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]"><span className="font-semibold">Right of Rectification:</span> Correct inaccurate information</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]"><span className="font-semibold">Right of Erasure:</span> Request deletion of your personal data</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]"><span className="font-semibold">Right to Restrict Processing:</span> Limit how we use your data</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]"><span className="font-semibold">Right to Data Portability:</span> Receive your data in a portable format</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]"><span className="font-semibold">Right to Object:</span> Object to processing based on legitimate interests</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]"><span className="font-semibold">Right to Withdraw Consent:</span> Where processing is based on consent</li>
                            </ul>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
                                To exercise these rights, contact us at <span className="font-semibold">contact@gradewise.ai</span>. We will respond within one month.
                            </h2>
                        </div>

                        {/* 8th Paragraph */}
                        <div className="relative mb-3 w-full h-auto">     
                            <h1 className="text-[26px] text-black/80 font-bold font-sans">8. Data Retention</h1>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
                                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When we no longer need your information, we will delete or anonymize it.
                            </h2>
                        </div>

                        {/* 9th Paragraph */}
                        <div className="relative mb-3 w-full h-auto">     
                            <h1 className="text-[26px] text-black/80 font-bold font-sans">9. Children's Privacy</h1>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
                                Our Services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                            </h2>
                        </div>

                        {/* 10th Paragraph */}
                        <div className="relative mb-3 w-full h-auto">     
                            <h1 className="text-[26px] text-black/80 font-bold font-sans">10. Cookies and Tracking Technologies</h1>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
                                We use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser. Essential cookies are necessary for the service to function.
                            </h2>
                        </div>

                        {/* 11th Paragraph */}
                        <div className="relative mb-3 w-full h-auto">     
                            <h1 className="text-[26px] text-black/80 font-bold font-sans">11. Complaints</h1>
                            <h2 className="text-[21px] py-4 font-sans text-gray-950/75">
                                If you have concerns about our data processing, you may lodge a complaint with:
                            </h2>
                            <ul className="pl-6 py-4 list-disc text-gray-900/85 text-[20px] font-sans">
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]"><span className="font-semibold">UK:</span> Information Commissioner's Office (ICO)</li>
                                <li className="marker:text-gray-600/40 py-1 marker:text-[14px]"><span className="font-semibold">EU:</span> Your local data protection authority</li>
                            </ul>
                            <h2 className="text-[19px] py-4 font-sans text-gray-950/75">
                                We encourage you to contact us first at <span className="font-semibold">contact@gradewise.ai</span> to resolve any issues.
                            </h2>
                        </div>

                        {/* 12th Paragraph */}
                        <div className="relative mb-3 w-full h-auto">     
                            <h1 className="text-[26px] text-black/80 font-bold font-sans">12. Changes to This Policy</h1>
                            <h2 className="text-[19px] py-4 font-sans text-gray-950/75">
                                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                            </h2>
                        </div>

                        {/* 13th Paragraph */}
                        <div className="relative mb-3 w-full h-auto">     
                            <h1 className="text-[26px] text-black/80 font-bold font-sans">13. Contact Us</h1>
                            <h2 className="text-[19px] py-4 font-sans text-gray-950/75">
                                If you have questions about this Privacy Policy, please contact us at contact@gradewise.ai.
                            </h2>
                            <h2 className="text-[19px] py-4 font-sans text-gray-950/75">
                                For UK/EU data protection inquiries, you may also contact our Data Protection Officer at contact@gradewise.ai.
                            </h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

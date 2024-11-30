import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ReadSidekick",
  description: "Privacy Policy",
};
const faqItems = [
  {
    question: "1. Introduction",
    answer:
      "This page describes the Privacy Policy that applies to all information collected or submitted when you install or use Read Sidekick. Read Sidekick is owned and operated by Wabi (referred to herein as “we”, “us”, or “our”). We take the protection of your personal data very seriously and will always offer you Read Sidekick and its functionality with your privacy in mind.",
  },
  {
    question: "2. Handling user data with Read Sidekick",
    answer:
      "To provide the reading functions, Read Sidekick retrieves the input/selected text and page URLs and sends the request to OpenAI’s API. Please refer to the privacy policy of OpenAI. We do not access/collect any of these data.",
  },
  {
    question: "3. External service",
    answer:
      "Read Sidekick includes links to external sites. When accessing external sites, the privacy policy of each site is applied.",
  },
  {
    question: "4. Contact us",
    answer:
      "If you have questions about this Privacy Policy, please contact us at the address below: Email: hello@readsidekick.com",
  },
  {
    question: "5. Changes to Privacy Policy",
    answer:
      "We may update this Privacy Policy and when we do, we will also revise the “Effective Date” at the top of the Privacy Policy.",
  },
];

export default function LoginPage() {
  return (
    <section id="faq">
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="text-center space-y-4 py-6 mx-auto">
        <h2 className="text-[14px] text-primary font-mono font-medium tracking-tight">
          Effective Date: November 29, 2024
        </h2>
        <h4 className="text-[42px] font-medium mb-2 text-balance max-w-3xl mx-auto tracking-tighter">
          Privacy Policy
        </h4>
      </div>
      <div className="grid gap-8 md:grid-cols-1 lg:gap-12 max-w-5xl mx-auto">
        {faqItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-medium">{item.question}</h3>
            <p className="text-muted-foreground">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}

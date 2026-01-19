import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Feedback | ReadSidekick",
    description: "Share your feedback with us",
};

export default function FeedbackPage() {
    return (
        <section className="py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-8">
                    <h1 className="text-4xl font-medium tracking-tighter">
                        Feedback
                    </h1>
                    <p className="text-muted-foreground">
                        We'd love to hear from you
                    </p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdf1w2po3y1y2gNfH-ZWe8AB3jPRuO-I8azsx32e6lqY5iBCA/viewform?usp=publish-editor"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        className="border-0"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </section>
    );
}

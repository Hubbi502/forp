import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = `faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <article className="border-b border-gray-200 py-[2svw]">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className="text-[2svw] font-medium text-white">{question}</span>
        <svg
          className={`w-[2.5svw] h-[2.5svw] text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id={answerId}
          className="mt-[1svw] text-gray-300"
        >
          <p className="text-[1.5svw]">{answer}</p>
        </div>
      )}
    </article>
  );
};

const faqs = [
  {
    question: 'What is Graphite, and how does it benefit my business?',
    answer: 'Graphite is an advanced analytics platform that helps businesses gain insights from their data. It provides real-time analytics, predictive modeling, and customizable dashboards to help you make data-driven decisions.'
  },
  {
    question: 'How easy is it to integrate Graphite with my existing tools?',
    answer: 'Graphite offers seamless integration with most popular business tools through our API and pre-built connectors. Setup typically takes less than 30 minutes with our step-by-step guide.'
  },
  {
    question: 'Is my data secure with Graphite?',
    answer: 'Absolutely. We use enterprise-grade encryption, regular security audits, and comply with major data protection regulations. Your data security is our top priority.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide 24/7 customer support via email, chat, and phone. All plans include access to our comprehensive documentation and community forums.'
  },
  {
    question: 'Can I upgrade or downgrade my plan at any time?',
    answer: 'Yes, you can change your plan at any time from your account settings. Changes take effect immediately with prorated billing.'
  },
  {
    question: 'How does Graphite leverage AI for analytics?',
    answer: 'Our AI algorithms automatically detect patterns, anomalies, and trends in your data. They provide predictive insights and recommendations to help you optimize your business processes.'
  },
  {
    question: 'How do I get this Framer Template?',
    answer: 'You can download the template from our marketplace. Once purchased, you\'ll receive instant access to all template files and documentation.'
  }
];

const FAQSection = () => (
  <section
    className="bg-gradient-to-b from-[#0B0B0B] via-white/5 to-red-950/50 max-w-[80svw] mt-[15svh] lg:mt-[15rem] mx-auto px-[5svw] py-[6svw] shadow-lg rounded-2xl text-white "
    aria-labelledby="faq-title"
  >
    <header className="mb-[3svw]">
      <div className="w-[10svw] bg-gradient-to-b from-white/20 to-white/50 mx-auto rounded-full mb-[1.5svw] py-[0.8svw]">
        <h2 id="faq-title" className="text-[2svw] font-bold text-center">FAQ</h2>
      </div>
      <h3 className="text-[4svw] text-center mb-[2svw]">Frequently Asked Questions</h3>
      <p className="text-center mb-[6svw] max-w-[50svw] mx-auto text-[1.5svw]">
        Here is our most frequently asked questions. If you can't find what you are looking for don't hesitate to contact us.
      </p>
    </header>
    <section className="space-y-[2svw]" aria-label="FAQ List">
      {faqs.map((faq) => (
        <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </section>
    <footer className="mt-[8svw] text-center">
      <button className="px-[4svw] py-[1.2svw] bg-white text-black rounded-full font-semibold hover:bg-black hover:text-white transition-colors duration-300">
        Contact us
      </button>
    </footer>
  </section>
);

export default FAQSection;

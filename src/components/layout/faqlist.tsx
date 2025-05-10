import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b  border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
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
          id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
          className="mt-2 text-gray-600"
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

interface FAQData {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqs: FAQData[] = [
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

  return (
    <div className="bg-gradient-to-b from-black/80 bg-white/5 to-red-950/50  max-w-6xl mt-72  mx-auto px-48 py-12 shadow-lg rounded-2xl text-white">
      <div className="w-24 bg-gradient-to-b from-white/20 to-white/50 text-white  mx-auto border-1 border-white rounded-full mb-6 py-2  ">
        <h2 className="text-xl font-bold text-center ">FAQ</h2>
      </div>
      <h3 className="text-5xl text-center text-white mb-8">Frequently Asked Questions</h3>
      <p className="text-center text-white mb-24 max-w-2xl mx-auto text-lg ">
        Here is our most frequently asked questions. If you can't find what you are looking for don't hesitate to contact us.
      </p>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
          />
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <button className="px-10 py-3 bg-white  cursor-pointer  text-black  rounded-full font-semibold hover:bg-black hover:text-white duration-300 transition-colors">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
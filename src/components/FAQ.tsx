import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: "Online Assessment Help",
    questions: [
      {
        question: "What is remote access?",
        answer: "Remote access allows our experts to securely connect to your computer to provide real-time assistance during your assessment."
      },
      {
        question: "How safe is UltraViewer/TeamViewer?",
        answer: "Both UltraViewer and TeamViewer are industry-standard remote access tools with strong security features. The connection is encrypted and requires your explicit permission."
      },
      {
        question: "What happens if I get stuck during the assessment?",
        answer: "Our experts will guide you through the problem-solving process, providing hints and explanations to help you arrive at the correct solution."
      }
    ]
  },
  {
    category: "Interview Assistance",
    questions: [
      {
        question: "How do I use Google Meet for the interview preparation?",
        answer: "You'll join the interview using Google Meet on your phone, which should be positioned to capture your laptop screen. We'll guide you through the setup process."
      },
      {
        question: "What is the process for interview assistance?",
        answer: "We provide real-time support through remote access and phone guidance. You'll receive a 30-minute training session to practice the process before your actual interview."
      },
      {
        question: "How do I ensure my success rate during interviews?",
        answer: "We conduct thorough mock sessions to help you perfect the process of receiving and implementing our guidance discreetly and effectively."
      }
    ]
  }
];

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleQuestion = (question: string) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(question)) {
      newOpenQuestions.delete(question);
    } else {
      newOpenQuestions.add(question);
    }
    setOpenQuestions(newOpenQuestions);
  };

  return (
    <div id="faq" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category) => (
            <div key={category.category} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                onClick={() => toggleCategory(category.category)}
              >
                <h3 className="text-lg font-medium text-gray-900">{category.category}</h3>
                {openCategory === category.category ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {openCategory === category.category && (
                <div className="px-6 py-4">
                  <div className="space-y-4">
                    {category.questions.map((faq) => (
                      <div key={faq.question} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                        <button
                          className="w-full text-left flex justify-between items-center"
                          onClick={() => toggleQuestion(faq.question)}
                        >
                          <h4 className="text-base font-medium text-gray-900">{faq.question}</h4>
                          {openQuestions.has(faq.question) ? (
                            <ChevronUp className="h-4 w-4 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-gray-500" />
                          )}
                        </button>
                        {openQuestions.has(faq.question) && (
                          <p className="mt-2 text-gray-600">{faq.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Why is social media management important for my business?",
    answer: "Social media management helps build brand awareness, engage with customers, and drive sales. A well-managed social media presence increases credibility and keeps your audience connected with your brand.",
    value: "item-1",
  },
  {
    question: "Can you design a custom WordPress website for my business",
    answer:
      "Yes! We create professional, fully responsive WordPress websites tailored to your brand. Whether you need an e-commerce store, business site, or portfolio, we ensure a seamless user experience and SEO optimization.",
    value: "item-2",
  },
  {
    question:
      " How can professional graphic design improve my brand?",
    answer:
      "High-quality visuals create a strong first impression, boost credibility, and make your brand stand out. From logos to social media posts, professional design helps communicate your message effectively.",
    value: "item-3",
  },
  {
    question: "What does Digital Marketing Management (DMM) include?",
    answer: "Our DMM services cover everything from SEO, PPC, and social media marketing to email campaigns and content creation. We handle strategy, execution, and optimization to maximize your online growth",
    value: "item-4",
  },
  {
    question:
      "How do I choose the right digital service for my business?",
    answer: "It depends on your goals! Need better engagement? Go for social media management. Want a strong online presence? A WordPress website is key. Looking for branding? Graphic design helps. For full digital success, DMM is the best choice!",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-20">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

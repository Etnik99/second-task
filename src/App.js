import { useState } from "react";
import TabsList from "./components/TabsList";
import FAQ1 from "./components/Faq1";
import "./components/Faq1.css";
import FAQs from "./components/FAQs/FAQs";
import './components/FAQs/faqs.css';



function App() {

  const [faqs1, setfaqs1] = useState([
    {
      question: 'Why park a domain name in Parkname ?',
      answer: 'Parkname is the leading industry standart for domain name parking and monetization services.We offer a wide variety of services to help you achieve',
      open: true
    },
  ]);

  const toggleFAQ1 = index => {
    setfaqs1(faqs1.map((faq1, i) => {
      if (i === index) {
        faq1.open1 = !faq1.open1
      } else {
        faq1.open1 = false;
      }

      return faq1;
    }))
  }

  return (

    <div className="App">
      <TabsList />


      <div className="faqs1">
        {faqs1.map((faq1, i) => (
          <FAQ1 faq1={faq1} index={i} toggleFAQ1={toggleFAQ1} />
        ))}
      </div>




      <FAQs />


    </div>
  );
}
export default App;
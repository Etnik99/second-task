import react, { useState } from "react";
import TabsList from "./components/TabsList";
import FAQ from "./components/FAQ";
import './components/FAQ.module.css';
import profile from '../src/profile.jpg';
import FAQ1 from "./components/Faq1";
import "./components/Faq1.css";

function App() {

  const [faqs1, setfaqs1] = useState([
    {
      question: 'Why park a domain name in Parkname ?',
      answer: 'Parkname is the leading industry standart for domain name parking and monetization services.We offer a wide variety of services to help you achieve',
      open: true
    },
  ]);



  const [items, setItems] = useState([
    {
      id: 1,
      open: true,
      header: {
        image: profile,
        title: 'About us',
        subtitle: '4 articles in this Topic',
      },
      answer: null,
      items: [
        {
          id: 'sub1',
          open: false,
          header: {
            image: '',
            title: 'How does park name separate itself ?',
            subtitle: '',
          },
          answer: 'Parkname is leading industry standart for domain name parking and monetization services.We offer a wide variety of services to help',
        },
        {
          id: 'sub2',
          open: false,
          header: {
            image: '',
            title: 'How does park name separate itself ?',
            subtitle: '',
          },
          answer: 'Parkname is leading industry standart for domain name parking and monetization services.We offer a wide variety of services to help',
        },
        {
          id: 'sub3',
          open: false,
          header: {
            image: '',
            title: 'How does park name separate itself ?',
            subtitle: '',
          },
          answer: 'Parkname is leading industry standart for domain name parking and monetization services.We offer a wide variety of services to help',
        }
      ]
    },


  ]);

  const toggleFAQ = id => {
    const toggleItem = items.find(item => item.id === id);
    if (toggleItem) {
      const newState = [{ ...toggleItem, open: !toggleItem.open }]
      setItems(newState);
      console.log(newState);
    }
  }

  const toggleSubItem = id => {
    const subItem = items.map(item => {
      if (item.items.length !== 0) {
        return [item.id, item.items.find(subItem => subItem.id === id)]
      }
    })
    if (subItem) {
      const foundItem = items.find(item => item.id === subItem[0][0]);
      if (foundItem) {
        const newState = [{ ...foundItem, items: [...foundItem.items, { ...subItem[0][1], open: true }] }];
        setItems([...items, newState]);
        console.log([...items, newState]);
      }
    }
  }

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


      <div className="faqs">
        {items.map(faq => (
          <FAQ key={faq.id} header={faq.header} open={faq.open} index={faq.id} toggleFAQ={toggleFAQ}>
            {faq.items ? (
              faq.items.map((faqItem, i) => (
                <FAQ key={faqItem.id} header={faqItem.header} open={faqItem.open} index={faqItem.id} toggleFAQ={toggleSubItem}>
                  <p>{faqItem.answer}</p>
                </FAQ>
              ))) : (
              <p>{faq.answer}</p>
            )}
          </FAQ>
        ))}
      </div>

    </div>
  );
}

export default App;
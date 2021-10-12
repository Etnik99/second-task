import React from 'react'

function FAQ1({ faq1, index, toggleFAQ1 }) {
    return (
        <div
            className={"faq1 " + (faq1.open1 ? 'open1' : '')}
            key={index}
            onClick={() => toggleFAQ1(index)}
        >
            <div className="faq-question">
                {faq1.question}
            </div>
            <div className="faq-answer">
                {faq1.answer}
            </div>
        </div>
    )
}

export default FAQ1;
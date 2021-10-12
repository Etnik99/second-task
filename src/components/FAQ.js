import react from "react";
import style from './FAQ.module.css';




function FAQ({ header, open, index, toggleFAQ, children }) {
    return (
        <div
            className={style.faq}
        >
            <div className={style.faqQuestion} onClick={(e) => { e.preventDefault(); return toggleFAQ(index); }}>
                <div className={style.faqHeader}>
                    {header.subtitle && header.image ? (
                        <>
                            <img className={style.faqImage} src={header.image} />
                            <div className={style.faqOpener}>
                                <h2 className={style.faqOpenerTitle}>{header.title}</h2>
                                <h4 className={style.faqOpenerSubtitle}>{header.subtitle}</h4>
                            </div>
                        </>
                    ) : (
                        <h5 className={style.faqTitle}>{header.title}</h5>
                    )}
                </div>
            </div>
            <div className={`${style.faqAnswer} ${open ? style.open : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default FAQ;
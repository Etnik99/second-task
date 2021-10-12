import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import './faqs.css'
import { FAQdata } from './data'
import FAQitem from './FAQitem'

const FAQs = () => {
    const [faqs, setFaqs] = useState(false)
    const showFaqs = () => {
        setFaqs(!faqs)
    }

    return (
        <div className='all-faqs'>
            <div className='main-faq' onClick={showFaqs}>
                <div className='first'>
                    <div className='icon'>
                        <FaRegUserCircle />
                    </div>
                    <div className='block'>
                        <h5>About Us</h5>
                        <small>4 articles in this Topic</small>
                    </div>
                </div>

                <div className='arrow'>
                    <MdKeyboardArrowDown />
                </div>
            </div>

            {faqs ? <div className='other-faqs'>
                {FAQdata.map((props) => {
                    return (
                        <FAQitem title={props.title} answer={props.answer} />
                    )
                })}
            </div> : null}
        </div>
    )
}

export default FAQs

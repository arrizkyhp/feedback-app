import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ select }) {
    const [number, setNumber] = useState(10);
    const [selected, setSelected] = useState(10)
    const { feedbackEdit } = useContext(FeedbackContext);


    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

    const rateNumber = []
    for (let i = 0; i < number; i++) {
        rateNumber.push(i+1);
    }

    const handleChange = (e) => {
        // + change string to number
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value);
    }
    return (
        <ul className='rating'>
            {rateNumber.map((item) => {
                return <li key={item}>
                    <input
                        type='radio'
                        id={`num${item}`}
                        name='rating'
                        value={item}
                        onChange={handleChange}
                        checked={selected === item}
                    />
                    <label htmlFor={`num${item}`}>{item}</label>
                </li>
            })}
    </ul>
    )
}

export default RatingSelect

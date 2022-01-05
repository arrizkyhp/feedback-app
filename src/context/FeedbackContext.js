import { createContext, useState } from 'react'
import { v4 as uuidv4 } from "uuid";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this item is from context",
      rating: 10,
    },
    {
      id: 2,
      text: "this item is from context too",
      rating: 7,
    },
    {
      id: 3,
      text: "Wow this is Delicioussssss",
      rating: 8,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // set Add Item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Set Edit Item
  const editFeedback = (item) => {
      console.log('test');
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // set update Item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map( item => item.id === id ? {...item, ...updatedItem} : item))
}

  // set Delete Item
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext
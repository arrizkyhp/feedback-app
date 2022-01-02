import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) { return <p>No Feedback yet..</p>};

    return (

        <div className="feedback-list">
            <AnimatePresence>
          {feedback.map((item) => (
              <motion.div
                key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
              >
              <FeedbackItem
                item={item}
                handleDelete={handleDelete}
            />
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

    );

    // return (
    //   <div>
    //     <div className="feedback-list">
    //       {feedback.map((item) => (
    //           <FeedbackItem
    //             key={item.id}
    //             item={item}
    //             handleDelete={handleDelete}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]).isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
}

export default FeedbackList

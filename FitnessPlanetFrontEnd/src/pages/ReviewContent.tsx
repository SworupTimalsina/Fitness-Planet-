import React, { useState } from 'react';
import './ReviewContent.css';

const ReviewContent: React.FC = () => {
    const [comment, setComment] = useState('');


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle submitting the comment (e.g., sending it to a server)
        console.log('Submitted comment:', comment);
        setComment(''); // Clear the comment after submitting (you can customize this behavior)
    };

    return (
        <div>
            <h2>Adjustable Dumbbell Weights-<br/>24kg(1 unit)</h2>
            <form onSubmit={handleSubmit}>
                <div className="feedbacks">
                    <div>
                        <div className="bullet"></div>
                        very heavy
                    </div>
                    <hr className="divider" />
                    <div>
                        <div className="bullet"></div>
                        nice product quality.
                    </div>
                </div>

                <button className="add-review-btn">Add Review</button>

                {/*<textarea*/}
                {/*    value={comment}*/}
                {/*    onChange={handleCommentChange}*/}
                {/*    placeholder="Add your comment or feedback here..."*/}
                {/*    rows={4}*/}
                {/*    cols={40}*/}
                {/*></textarea>*/}
                {/*<button type="submit">Submit Comment</button>*/}
            </form>
        </div>
    );
};

export default ReviewContent;
//

// interface ReviewContentProps {
//     itemDTO: ItemDTO;
// }
//
// const ReviewContent: React.FC<ReviewContentProps> = ({ itemDTO }) => {
//     // Use itemDTO to render content
//     return (
//         <div>
//             {/* Render content using itemDTO */}
//         </div>
//     );
// };
//
// export default ReviewContent;

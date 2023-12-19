import React, { useState } from 'react';
import './ReviewContent.css';

const ReviewContent: React.FC = () => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle submitting the comment (e.g., sending it to a server)
        console.log('Submitted comment:', comment);
        setComment(''); // Clear the comment after submitting (you can customize this behavior)
    };

    return (
        <div>
            <h2>Adjustable Dumbbell Weights-24kg(1 unit)</h2>
            <p></p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={comment}
                    onChange={handleCommentChange}
                    placeholder="Add your comment..."
                    rows={4}
                    cols={40}
                ></textarea>
                <button type="submit">Submit Comment</button>
                <form className="review"></form>
            </form>
        </div>
    );
};

export default ReviewContent;

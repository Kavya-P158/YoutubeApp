import React from 'react'
import Comment from './Comment'

const CommentContainer = () => {
    const commentData = [{
        name: "Kaavi",
        comment: "Good content",
        replies: [
            {

                name: "Kaavi",
                comment: "Good content",
                replies: [

                ]
            },
            {
                name: "Kaavi",
                comment: "Good content",
                replies: [

                ]
            }
        ]
    },

    {
        name: "Kaavi",
        comment: "Good content",
        replies: [

        ]
    }]

    const CommentsList = ({ comments }) => {
        return (
            comments.map((comment, index) =>

            (
                <div key={index}>
                    <Comment data={comment} />

                    <div className='pl-5 border border-l-black ml-5'>
                        <CommentsList comments={comment.replies} />
                    </div>
                </div>
            )

            ))
    }
    return (
        <div>

            <h1 className='font-bold p-2 m-2 text-2xl'>Comments</h1>
            <CommentsList comments={commentData} />
        </div>
    )
}

export default CommentContainer
import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import PostItem from '../posts/PostItem'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
import { connect } from 'react-redux'
import { getPostById } from '../../actions/post'
 
const Post = ({ getPostById, post: { post, loading }, match }) => {

    useEffect(() => {
        getPostById(match.params.id)
    },[getPostById, match.params.id]);

    return (
        <Fragment>
            {loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <Link to='/posts' className='btn'>Go back</Link>
                    <PostItem post={post} showActions={false} />
                    <CommentForm postId={post._id} />
                    <div className='comments'>
                        {post.comments.map(comment => (
                            <CommentItem key={comment._id} comment={comment} postId={post._id} />
                        ))}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );

}

Post.propTypes = {
    getPostById: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPostById })(Post)

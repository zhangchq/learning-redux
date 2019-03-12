import { connect } from 'react-redux';
import PostList from '../components/PostList';

const mapStateToProps = (state/*, props*/) => {
    const filteredPosts = state.filter ?
        state.posts.filter((post) => post.category === state.filter) :
        state.posts;

    return {
        posts: filteredPosts.map((post) => {
            const { user, ...rest } = post;
            const userObj = state.users.find(
                ({ userName }) => user === userName
            );
            return {
                user: userObj,
                ...rest,
            }
        }),
    };
} 

const ConnectedPostList = connect(mapStateToProps)(PostList);

export default ConnectedPostList;
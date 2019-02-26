import { connect } from 'react-redux';

import PostList from '../components/PostList';

const mapStateToProps = (state, props) => {
    return {posts: state.posts};
} 

const ConnectedPostList = connect(mapStateToProps)(PostList);

export default ConnectedPostList;
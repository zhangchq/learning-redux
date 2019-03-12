import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import FilterList from "../components/FilterList";
import { clearFilter, setFilter } from "../actions";

const mapStateToProps = (state, props) => {
    const categories = state.posts.reduce((acc, post) => {
        if (!acc.includes(post.category)) {
            return [ ...acc, post.category ];
        }
        return acc;
    }, []);

    return { categories };
}

/*const mapDispatchToProps = (dispatch, props) => {
    return {
        setFilter: (category) => dispatch(setFilter(category)),
        clearFilter: () => dispatch(clearFilter()),
    };
};*/

const mapDispatchToProps = (dispatch, props) => 
    bindActionCreators({ setFilter, clearFilter }, dispatch);

const ConnectedFilterList = connect(mapStateToProps, mapDispatchToProps)(FilterList);

export default ConnectedFilterList;

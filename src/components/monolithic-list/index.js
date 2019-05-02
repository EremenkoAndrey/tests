import React from 'react';
import { connect } from 'react-redux';
import DumpItem from '../dump-item';

function MonolithicList({ list, changeItem }) {
    return (
        <ul>
            {list.map((item, index) => (
                <DumpItem key={item} item={item} index={index} changeItem={changeItem} />
            ))}
        </ul>
    )
}

const mapStateToProps = state => ({
    list: state.list1
});

const mapDispatchToProps = dispatch => ({
    changeItem: index => dispatch({ type: 'CHANGE_ITEM_1', index })
});

export default connect(mapStateToProps, mapDispatchToProps)(MonolithicList);

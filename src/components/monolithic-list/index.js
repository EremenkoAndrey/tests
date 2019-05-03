import React from 'react';
import { connect } from 'react-redux';
import DumpItem from '../dump-item';

function MonolithicList({ list, changeItem, addItems }) {
    console.log('MonolithicList render')

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <DumpItem item={item} index={index} changeItem={changeItem} key={item}  />
                ))}
            </ul>
            <button onClick={addItems}>Add items</button>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.list1
});

const mapDispatchToProps = dispatch => ({
    changeItem: index => dispatch({ type: 'CHANGE_ITEM_1', index }),
    addItems: () => dispatch({ type: 'ADD_ITEMS_1' })
});

export default connect(mapStateToProps, mapDispatchToProps)(MonolithicList);

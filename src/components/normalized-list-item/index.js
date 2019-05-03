import React from 'react';
import { connect } from 'react-redux';

function NormalizedListItem({ item, id, changeItem }) {
    console.log(`NormalizedListItem render id ${id}`)

    return (
        <li style={{ padding: '10px' }}>
            {item}
            <br />
            <button onClick={() => changeItem(id)}>{'Increment'}</button>
        </li>
    )
}

const mapStateToProps = (state, ownProps) => ({
    item: state.items[ownProps.id]
});

const mapDispatchToProps = dispatch => ({
    changeItem: id => dispatch({ type: 'CHANGE_ITEM_3', id })
});

export default connect(mapStateToProps, mapDispatchToProps)(NormalizedListItem);

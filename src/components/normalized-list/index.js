import React from 'react';
import { connect } from 'react-redux';
import NormalizedListItem from '../normalized-list-item';

function NormalizedList({ list, addItems }) {
    console.log('NormalizedList render');

    return (
        <div>
            <ul>
                {list.map(id => (
                    <NormalizedListItem id={id} key={id} />
                ))}
            </ul>
            <button onClick={addItems}>Add items</button>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.list3
});

const mapDispatchToProps = dispatch => ({
    addItems: () => dispatch({ type: 'ADD_ITEMS_3' })
});

export default connect(mapStateToProps, mapDispatchToProps)(NormalizedList);

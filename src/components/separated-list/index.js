import React from 'react';
import { connect } from 'react-redux';
import ContainerItem from '../container-item';

function SeparatedList({ list, addItems }) {
    console.log('SeparatedList render')

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <ContainerItem index={index} key={item} />
                ))}
            </ul>
            <button onClick={addItems}>Add items</button>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.list2
});

const mapDispatchToProps = dispatch => ({
    addItems: () => dispatch({ type: 'ADD_ITEMS_2' })
});

export default connect(mapStateToProps, mapDispatchToProps)(SeparatedList);

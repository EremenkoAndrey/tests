import React from 'react';
import { connect } from 'react-redux';

function ContainerItem({ item, index, changeItem }) {
    console.log(`ContainerItem render ${index}`)

    return (
        <li style={{ padding: '10px' }} key={item}>
            {item}
            <br />
            <button onClick={() => changeItem(index)}>{'Increment'}</button>
        </li>
    )
}

const mapStateToProps = (state, ownProps) => ({
    item: state.list2[ownProps.index]
});

const mapDispatchToProps = dispatch => ({
    changeItem: index => dispatch({ type: 'CHANGE_ITEM_2', index })
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerItem);

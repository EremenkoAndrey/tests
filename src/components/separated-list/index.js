import React from 'react';
import { connect } from 'react-redux';
import ContainerItem from '../container-item';

function SeparatedList({ list }) {
    return (
        <ul>
            {list.map((item, index) => (
                <ContainerItem key={item} index={index} />
            ))}
        </ul>
    )
}

const mapStateToProps = state => ({
    list: state.list2
});


export default connect(mapStateToProps)(SeparatedList);

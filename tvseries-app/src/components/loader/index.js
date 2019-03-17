import React from 'react';
import loader from '../../assets/loader.gif'

const Loader = props => (
    <div>
        <img style={{width: 100}} src={loader} alt="loader icon"/>
    </div>
);

export default Loader;
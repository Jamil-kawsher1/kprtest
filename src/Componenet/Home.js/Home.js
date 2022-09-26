import React, { useContext } from 'react';

const Home = () => {
    const value = 'defaultvalue'
    return (
        <div>
            <h3>This is Home</h3>
            <h5>{value}</h5>
        </div>
    );
};

export default Home;
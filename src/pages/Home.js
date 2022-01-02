import React ,{useState}from 'react';
import Navigation from "../components/nav/Navigation";
import Main from "../components/Main";

const Home = () => {
    return (
        <div>
            <Navigation color={oldColor} setOldColor={setOldColor} />
            <Main/>
        </div>
    );
};

export default Home;
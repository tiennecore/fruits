import React from 'react';

import Card from "./main/Card";
import goyave from "../img/goyave.jpg"
import figue from "../img/figue.jpg"
import mangue from "../img/mangue.jpg"
import grenade from "../img/grenade.jpg"
import annanas from "../img/annanas.jpg"
import litchi from "../img/litchi.png"

const Main = () => {
    return (
        <main>
            <div className="containerMain">
                <Card source={goyave} />
                <Card source={figue} />
                <Card source={mangue} />
                <Card source={grenade} />
                <Card source={annanas} />
                <Card source={litchi} />
            </div>
        </main>
    );
};

export default Main;

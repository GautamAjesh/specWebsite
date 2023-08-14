

import React from 'react';
import '../css_file/middle.css';
import Slider from "./Card";

const products = [
    {
        id: 1,
        name: 'EYEGLASSES',
        image: 'https://static1.lenskart.com/media/desktop/img/Apr22/a2.png',
    },
    {
        id: 2,
        name: 'COMPUTER GLASSES',
        image: 'https://static1.lenskart.com/media/desktop/img/Apr22/d2.png'
    },
    {
        id: 3,
        name: 'SUNGLASSES',
        image: 'https://static1.lenskart.com/media/desktop/img/Apr22/b2.png'
    },
    {
        id: 4,
        name: 'PROGRESSIVE LENSES',
        image: 'https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg',
    },
    {
        id: 5,
        name: 'CONTACT LENSES',
        image: 'https://static1.lenskart.com/media/desktop/img/Apr22/d.png'
    }
];
const prod = [
    {
        id: 1,
        image:'https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif'
    },
    {
        id: 2,
        image: 'https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg'
    },
    {
        id: 3,
        image: 'https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg',
    },
    {
        id: 4,
        image: 'https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg'
    },
];

const middle = () => {
    return (
        <>
            <div className='container1'>
                {products.map((product) => (
                    <div className='card'key={product.id}>
                        <img src={product.image} alt='pro'></img>
                        <div>{product.name}</div>
                    </div>
                ))}
            </div>
            <div className='container2'>
                {prod.map((product) => (
                    <div className='card2'key={product.id}>
                        <img src={product.image} alt='pro'></img>
                        <div>{product.name}</div>
                    </div>
                ))}
            </div>
            <Slider/>

        </>
    );
};

export default middle;


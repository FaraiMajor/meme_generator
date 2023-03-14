import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3si4.jpg"
    });
    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
            .then(response => setAllMemes(response.data.data.memes))
            .catch(error => console.log(error));
    }, []);

    // useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => setAllMemes(data.data.memes))
    //         .catch(error => console.log(error));
    // }, []);

    function getImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <>
            <div className="form">
                <input
                    type='text'
                    placeholder="Top text"
                    className='form-input'
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder="Bottom text"
                    className='form-input'
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button className='form--button' onClick={getImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt="meme-images" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </>
    )
}
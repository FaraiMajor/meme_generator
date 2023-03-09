import React from 'react'

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3si4.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([]);
    return (
        <main>
            <form className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <img style={{ marginLeft: "450px" }} src={meme.randomImage} />
        </main>
    )
}
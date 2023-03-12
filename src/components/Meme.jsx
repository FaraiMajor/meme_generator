import React from 'react'
import memesData from '../memesData';

export default function Meme() {

    const [meme, setMeme] = React.useState(memesData.data.memes)
    const [allMemes, setAllMemes] = React.useState([]);

    const src_link = meme.map(link => {
        return (
            link.url
        )
    })
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
            <img style={{ marginLeft: "450px" }} src={meme.map(link => {
                return (
                    link.url
                )
            })} />
        </main>
    )
}
import "./Profile.css"
import {Posts} from "./Posts"
import photo from "./../../img/photo.jpeg"
import { useState } from "react"
import {sendPost} from "../../state"

export function Profile(){
    const [imageInputText, setImageInputText] = useState("")
    const [inputText, setInputText] = useState("")
    function handleAddPost(){
        sendPost({
            imageLink:imageInputText, 
            text:inputText
        })
        setImageInputText("")
        setInputText("")
    }
    return(
        <section className="profile content">
            <div className="profile-top">
                <div className="profile-top_photo">
                    <img src={photo}/>
                </div>
                <div className="profile-top_info">
                    <ul>
                        <li className="list-item"> <span>0</span> <br/> Posts</li>
                        <li className="list-item"> <span>0</span> <br/> Followers</li>
                        <li className="list-item"> <span>0</span> <br/> Following</li>
                    </ul>
                </div>
                <div className="user_info-card">
                    <p>City: <span>Moskow</span></p>
                    <p>Work: <span>Photo-boom</span></p>
                    <p>Study: <span>School 2567</span></p>
                    <p>Status: <span>I am a photographer</span></p>
                </div>
            </div>
            <div className="profile-bottom">
                <p className="name">Bill Smith <span>he/him</span> </p>
                <p className="about">I am a photographer</p>
            </div>
            <button className="profile-button">Edit profile</button>
            <div className="create-post">
                <input placeholder="image link" className="post-image-input" 
                value={imageInputText} onChange={(e)=>{setImageInputText(e.target.value)}}></input>
                <textarea 
                    placeholder="What's happening?"
                    className="post-input"
                    value={inputText} onChange={(e)=>{setInputText(e.target.value)}}
                />
                <div className="buttons"> 
                    <button className="add-post-btn" onClick={handleAddPost}>Add Post</button>
                </div>
            </div>
            
            <Posts></Posts>
        </section>
    )
}
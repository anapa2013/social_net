import "./Posts.css"
import like from "./../../img/like.png"
import comment from "./../../img/comment.png"
import repost from "./../../img/repost.png"
import { useState } from "react"
import {getPosts} from "../../state.js"



export function Post({id, imageLink, text, likes, comments}){
    return (
        <div className="post">
            <img className="post-img" src={imageLink}/>
            <p className="post-text">{text}</p>
            <div className="post-nav">
               <span className="likes">{likes} <img src={like}/> </span>
               <span className="comments"><img src={comment}/></span>
               <span className="repost"><img src={repost}/></span>
            </div>
        </div>
    )
}
export function Posts(){
    const [posts, setPosts] = useState(getPosts())
    let postsDisplay = posts.map((post)=>(
        <Post id={post.id} imageLink={post.imageLink} text={post.text} likes={post.likes} comments={post.comments} key={`post ${post.id}`}></Post>
    ))

    return (
        <div className="posts">
            {postsDisplay}
        </div>
    )
}
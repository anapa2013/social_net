import "./Posts.css"
import like from "./img/like.png"
import comment from "./img/comment.png"
import repost from "./img/repost.png"

let posts = [
    {
        id:0,
        imageLink: "https://github.com/anapa2013/social_net/blob/main/public/media/photo%201.jpeg?raw=true",
        text: "Солнечные лучи пробиваются сквозь густую листву, освещая поляну. В воздухе пахнет хвоей и свежестью. Тишину нарушает лишь шелест листьев и пение птиц.",
        likes: 6,
        comments: [
            "wow!", 
            "text from ai",
        ]
    },
    {
        id:1,
        imageLink: "https://github.com/anapa2013/social_net/blob/main/public/media/photo%201.jpeg?raw=true",
        text: "Солнечные лучи пробиваются сквозь густую листву, освещая поляну. В воздухе пахнет хвоей и свежестью. Тишину нарушает лишь шелест листьев и пение птиц.",
        likes: 6,
        comments: [
            "wow!", 
            "text from ai",
        ]
    },
    {
        id:2,
        imageLink: "https://github.com/anapa2013/social_net/blob/main/public/media/photo%201.jpeg?raw=true",
        text: "Солнечные лучи пробиваются сквозь густую листву, освещая поляну. В воздухе пахнет хвоей и свежестью. Тишину нарушает лишь шелест листьев и пение птиц.",
        likes: 6,
        comments: [
            "wow!", 
            "text from ai",
        ]
    }
]

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

    let postsDisplay = posts.map((post)=>(
        <Post id={post.id} imageLink={post.imageLink} text={post.text} likes={post.likes} comments={post.comments}></Post>
    ))

    return (
        <div className="posts">
            {postsDisplay}
        </div>
    )
}
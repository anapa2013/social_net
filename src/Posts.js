import "./Posts.css"

export function Post(){
    return (
        <div className="post">
            <img className="post-img"/>
            <p className="post-text"></p>
            <div className="post-nav">
                <ul>
                    <li className="nav-item"><img /></li>
                    <li className="nav-item"><img /></li>
                    <li className="nav-item"><img /></li>
                </ul>
            </div>
        </div>
    )
}
export function Posts(){
    return (
        <div className="posts">
            <Post></Post>
        </div>
    )
}
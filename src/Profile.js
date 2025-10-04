import "./Profile.css"
import {Posts} from "./Posts"
import photo from "./img/photo.jpeg"

export function Profile(){
    return(
        <section className="profile">
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
                <div class="user_info-card">
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
            <Posts></Posts>
        </section>
    )
}
import "./Nav.css"
import home from "./../../img/home.png"
import profile from "./../../img/account.png"
import chat from "./../../img/chat.png"
import friends from "./../../img/friends.png"
import groups from "./../../img/group.png"
import settings from "./../../img/settings.png"
import help from "./../../img/help.png"
import { Link } from "react-router-dom"

export function Nav(){
    return(
        <nav>
            <div className="nav-list">
                <div className="main-nav">
                    <ul>
                        <li className="nav-item"><Link to="/scroll"> <span><img src={home} alt="Лента"/></span> Scroll</Link></li>
                        <li className="nav-item"><Link to="/profile"><span><img src={profile} alt="Профиль"/></span>My profile</Link></li>
                        <li className="nav-item"><Link to="/messages"><span><img src={chat} alt="Сообщения"/></span>Messages</Link></li>
                        <li className="nav-item"><Link to="/friends"><span><img src={friends} alt="Друзья"/></span>Friends</Link></li>
                        <li className="nav-item"><Link to="/community"><span><img src={groups} alt="Сообщества"/></span>Community</Link></li>
                    </ul>
                </div>
                
                <ul className="secondary-nav">
                    <li className="nav-item"><Link to="/settings"><span><img src={settings} alt="Настройки"/></span>Settings</Link></li>
                    <li className="nav-item"><Link to="/help"><span><img src={help} alt="Помощь"/></span>Help</Link></li>
                </ul>
            </div>
        </nav>
    )
}
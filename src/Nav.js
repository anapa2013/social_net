import "./Nav.css"
import home from "./img/home.png"
import profile from "./img/account.png"
import chat from "./img/chat.png"
import friends from "./img/friends.png"
import groups from "./img/group.png"
import settings from "./img/settings.png"
import help from "./img/help.png"

export function Nav(){
    return(
        <nav>
            <div className="nav-list">
                <div className="main-nav">
                    <ul>
                        <li className="nav-item"><a href="#"> <span><img src={home} alt="Лента"/></span> Scroll</a></li>
                        <li className="nav-item"><a href="#"><span><img src={profile} alt="Профиль"/></span>My profile</a></li>
                        <li className="nav-item"><a href="#"><span><img src={chat} alt="Сообщения"/></span>Messages</a></li>
                        <li className="nav-item"><a href="#"><span><img src={friends} alt="Друзья"/></span>Friends</a></li>
                        <li className="nav-item"><a href="#"><span><img src={groups} alt="Сообщества"/></span>Community</a></li>
                    </ul>
                </div>
                
                <ul className="secondary-nav">
                    <li className="nav-item"><a href="#"><span><img src={settings} alt="Настройки"/></span>Settings</a></li>
                    <li className="nav-item"><a href="#"><span><img src={help} alt="Помощь"/></span>Help</a></li>
                </ul>
            </div>
        </nav>
    )
}
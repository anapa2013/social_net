let state = {
    posts:[
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
}
export function getPosts(){
    return state.posts
}
export function sendPost({imageLink, text}){
    let post = {
            id:state.posts.length,
            imageLink: imageLink,
            text: text,
            likes: 0,
            comments: []
        }
    state.posts.push(post)
}
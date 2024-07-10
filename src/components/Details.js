import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import blogs from "../data/blogs"
export default function Details(){
    const{id} = useParams()
    const [title,setTitle] = useState("")
    const [image,setImage] = useState("")
    const [content,setContent] = useState("")
    const [author,setAuthor] = useState("")
    useEffect(()=>{
        //ดึงบทความ
        const result =  blogs.find((item)=>item.id === parseInt(id))
        setTitle(result.title)
        setImage(result.image_url)
        setContent(result.content)
        setAuthor(result.author)
        // eslint-disable-next-line
    },[])
    return(
        <div className="conainer">
            <h2 className="title">
                รายละเอียดบทความ : {title}
            </h2>
            <img src={image} alt={title}></img>
            <strong>ผู้เขียน : {author}</strong>
            <p>{content}</p>
        </div>
    )
}
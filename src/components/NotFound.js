import notfound from "../images/notfound.svg"
export default function Blogs (){
    return(
        <div className="container">
            <h2>ไม่พบหน้าเว็บ (404 PAGE NOT FOUND)</h2>
            <img src={notfound} alt="notfound"></img>
        </div>
    )
}
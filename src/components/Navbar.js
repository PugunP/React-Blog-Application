import { Link } from "react-router-dom"
import "./Navbar.css"
export default function Navbar(){
    return(
        <nav>
            <Link to="/" className="logo">
                <h3>Blog App</h3>
            </Link>
            <Link to="/">หน้าเเรก</Link>
            <Link to="/blogs">บทความทั้งหมด</Link>
            <Link to="/about">เกี่ยวกับ</Link>
        </nav>
    )
}
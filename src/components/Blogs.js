import "./Blogs.css";
import blogs from "../data/blogs";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [search, setSearch] = useState("");
  const [filterBlog,setFilterBlog] = useState([])
  useEffect(()=>{
    const result = blogs.filter((item)=>item.title.toLowerCase().includes(search))
    setFilterBlog(result)
    console.log(result)
  },[search])
  return (
    <div className="blogs-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหาบทความ"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <article>
        {filterBlog.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card">
              <h2>{item.title}</h2>
              <p>{item.content.substring(0, 300)}</p>
              <hr />
            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}

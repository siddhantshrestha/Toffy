import { Link } from "react-router-dom"
import { AddPostData, GetPostData } from "../hook/postQuery"
import { useState } from "react"

const Post = () => {
  const { isLoading, data, isError, error, } = GetPostData()

  const [id, setId] = useState("")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  if (isLoading) {
    return <p> Loading...</p>
  }
  if (isError) {
    return <p> {error.message}</p>
  }

  const { mutate: addPost } = AddPostData()

  const handleClick = () => {
    console.log({ id,title, desc })
    const postData = { id,title, desc }
    addPost(postData)
  }

  return (
    <div>
      <Link to='/'> back to home</Link>
      <h1>Post Page</h1>

      <input
        type='number'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type='text'
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <input type='text' value={desc} onChange={e => setDesc(e.target.value)} />
      <button onClick={handleClick}>add post</button>

      {data?.data.map(item => {
        {
          /* console.log(item.id) */
        }
        return (
          <Link key={item.id} to={`/posts/${item.id}`}>
            <div className='post'>
              {item.id}
              <p>{item.title}</p>
              <p>{item.desc}</p>
            </div>
          </Link>
        )
      })}

      {/* <Outlet /> */}
    </div>
  )
}

export default Post

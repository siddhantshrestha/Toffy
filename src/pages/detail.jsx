import { Link, useParams } from "react-router-dom"
import { GetPostDetailData } from "../hook/postDetailQuery"

const Detail = () => {
  const { pid } = useParams()

  const { data, isLoading, isError, error } = GetPostDetailData(pid)

  if (isLoading) {
    return <p>Loading....</p>
  }
  if (isError) {
    return <p>Something went wrong...., {error.message}</p>
  }

  return (
    <>
      <Link to='/'> back to home</Link>

      <div className='post'>
        <h1>{data?.data.title}</h1>
        <p>{data?.data.desc}</p>
      </div>
    </>
  )

}

export default Detail

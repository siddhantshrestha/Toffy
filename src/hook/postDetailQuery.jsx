import { useQuery } from "react-query"
import axios from "axios"

const fetchPostDetailData = pid => {
  return axios.get(`http://localhost:3000/posts/${pid}`)
}


export const GetPostDetailData = pid => {
  console.log(pid)

  return useQuery(["post", pid], () => fetchPostDetailData(pid))
}

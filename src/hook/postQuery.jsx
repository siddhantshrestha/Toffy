import { useQuery, useMutation, useQueryClient } from "react-query"
import axios from "axios"

const addPost = postData => {
  return axios.post("http://localhost:3000/posts", postData)
}

const fetchPostData = () => {
  return axios.get("http://localhost:3000/posts")
}

export const GetPostData = () => {
  return useQuery(["posts"], fetchPostData, {
    refetchInterval: 5000,
  })
}

export const AddPostData = () => {
  const queryCLient = useQueryClient()

  return useMutation(addPost, {
    onSuccess: data => {
      //invalidate queries perform additional network request
      // queryCLient.invalidateQueries("posts")

      queryCLient.setQueryData("posts", oldData => {
        return {
          ...oldData,
          data: [...oldData.data, data.data],
        }
      })
    },
  })
}

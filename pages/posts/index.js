import { useRouter } from 'next/router';

import { useEffect, useState } from "react"; 


export default function IndexP() {
    const [posts,setPosts]=useState([]);
    const router = useRouter();
    const fetchApi=async()=>{
    const res = await fetch('https://gorest.co.in/public/v2/posts')
     const data = await res.json();
     setPosts(data);
    }
    const gotoPost=async(id)=>{
        router.push({
            pathname:'/posts/'+id,
        })
    }
    //console.log('posts',posts)
    useEffect(()=>{
        fetchApi();
    },[])
    return (<div>
    <table><thead><tr>
    <th>ID</th>
    <th>NAME</th>
  </tr>
  </thead>
  <tbody>
    {posts.map((post)=>(
    <tr>
    <td>{post.id}</td>
    <td>{post.title}</td>
    <td><button onClick={()=>gotoPost(post.id)}>Go to </button></td>
  </tr>
    ))}
 
  </tbody>
</table>
</div>
    )
}
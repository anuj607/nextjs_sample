export default function (props){
    const data=props.data;
    return (<div>
    <h1>List</h1>
            <table><thead><tr>
    <th>ID</th>
    <th>NAME</th>
  </tr>
  </thead>
  <tbody>
    {data.map((dat)=>(
    <tr>
    <td>{dat.id}</td>
    <td>{dat.title}</td>
  </tr>
    ))}
 
  </tbody>
</table>
    </div>)
}
const fetchApi = async () => {
    const res = await fetch('https://gorest.co.in/public/v2/posts')
    const data = await res.json();
    return data;
}

export const getServerSideProps = async () => {   
    const data= await fetchApi();
    console.log('hello server side')
    return {
        props:{data:data}
    }

}
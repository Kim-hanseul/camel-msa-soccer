import axios from 'axios';
import { useState, useEffect } from 'react';
import tableStyles from '../common/style/table.module.css'

const Table = ({columns, colspan, data}) => {  
    return (
        <table className={tableStyles.table}>
        <thead>
            <tr className={tableStyles.tr}>
            {columns.map((column)=> (
                <th key={column.username} className={tableStyles.td}>{column}</th>
            ))}
            </tr>
        </thead>
        <tbody>
                    {data.length==0 ?<td colSpan={colspan} className={tableStyles.td}> No data </td>
                    :data.map((user) =>(
                     <tr className={tableStyles.tr} key={user.username} > 
                        <td className={tableStyles.td}>{user.username}</td>
                        <td className={tableStyles.td}>{user.password}</td>
                        <td className={tableStyles.td}>{user.name}</td>
                        <td className={tableStyles.td}>{user.telephone}</td>
                        </tr>
                    ))}
                
        </tbody>
        </table>
    );
}
export default function UserList(){

    const columns = ["Username", "Password", "Name", "Telephone"];
    const [data, setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/api/user/list').then(res=>{
        setData(res.data.users)
      }).catch(err=>{})
    },[])
    return(<>
        <h1>User List</h1> 
        <div className={tableStyles.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>)
}
import tableStyles from '../common/style/table.module.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Table = ({columns, colspan, data}) => {  
    return (
        <table className={tableStyles.table}>
        <thead>
            <tr className={tableStyles.tr}>
            {columns.map((column)=> (
                <th key={column.passengerId} className={tableStyles.td}>{column}</th>
            ))}
            </tr>
        </thead>
        <tbody>
                    {data.length==0 ?<td colSpan={colspan} className={tableStyles.td}> No data </td>
                    :data.map((board) =>(
                     <tr className={tableStyles.tr} key={board.passengerId} > 
                        <td className={tableStyles.td}>{board.passengerId}</td>
                        <td className={tableStyles.td}>{board.name}</td>
                        <td className={tableStyles.td}>{board.teamId}</td>
                        <td className={tableStyles.td}>{board.subject}</td>
                        </tr>
                    ))}
        </tbody>
        </table>
    );
}

export default function BoardList(){

    const columns = ["passengerId", "name", "teamId", "subject"];
    const [data, setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/api/board/list').then(res=>{
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
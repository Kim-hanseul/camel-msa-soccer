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
            <tr className={tableStyles.tr}>
                    {data.length==0 ?<td colSpan={colspan} className={tableStyles.td}> No data </td>
                    :<td colSpan={colspan} className={tableStyles.td}> data </td>} 
                </tr>
        </tbody>
        </table>
    );
}

export default function UserList(){
    const columns=['Username','Password','Name','Telephone']
    const data =[]
    const count =data.length
       return <>
       <h2>사용자 목록</h2>
          {count!=0 && <h3>회원수 : {count} 명 </h3>}
          <div className={tableStyles.td}>
          <Table columns={columns} colspan={4} data={data}/>
          </div>
       </>
  }
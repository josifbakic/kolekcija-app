import { Data } from "../api"
type Props = {
    podaci: Data[];
}

const Table = ({podaci}: Props) => {
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>User type</th>
                <th>Created date</th>
                <th>City</th>
                <th>Address</th>
            </tr>
            {podaci.map(x=>{return <tr>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.surname}</td>
                <td>{x.userType}</td>
                <td>{x.createdDate}</td>
                <td>{x.city}</td>
                <td>{x.address}</td>
            </tr>})}
        </table>
    )
}

export default Table
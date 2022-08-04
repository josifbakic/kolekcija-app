import { Data } from "../api"
type Props = {
    podaci: Data[];
    searchCriteria: string;
    onChangeCriteria: (value: string) => void
    search: () => void;
}

const Searchbar = ({podaci, searchCriteria, onChangeCriteria, search}: Props) => {
    const tipovi = (podaci: Data[]) => {
        return podaci.map(x=>x.userType).reduce((acc: string[], curr: string)=>{
            if(!acc.includes(curr)){
                acc.push(curr);
            }
            return acc;
        }, [])
    }

    return (
        <div>
            <label>Name</label>
            <input type="text" value={searchCriteria} onChange={(e)=>onChangeCriteria(e.target.value)}>

            </input>
            <label>User type</label>
            <select>
                <option value=" "></option>
                {tipovi(podaci).map(x=>
                    (<option value={x}>{x}</option>)
                )}
            </select>
            <button onClick={search}>Search</button>
        </div>
    )
}

export default Searchbar;
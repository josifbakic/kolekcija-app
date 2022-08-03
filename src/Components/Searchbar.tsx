import { Data } from "../api"
type Props = {
    podaci: Data[];
}

const Searchbar = ({podaci}: Props) => {
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
            <input type="text">

            </input>
            <label>User type</label>
            <select>
                {tipovi(podaci).map(x=>
                    (<option value={x}>{x}</option>)
                )}
            </select>
            <button>Search</button>
        </div>
    )
}

export default Searchbar;
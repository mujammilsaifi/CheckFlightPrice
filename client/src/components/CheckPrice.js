import React,{useState} from 'react'
import axios from 'axios';
const CheckPrice = () => {
    //CREATE STATE
    const [src, setSrc] = useState(["Delhi","Mumbai","Jaipur","Punjab","Pune"]);
    const [desti, setDesti] = useState(["Delhi","Mumbai","Jaipur","Punjab","Pune"]);
    const [selectdate, setSelectDate] = useState(["4 may 2023","5 may 2023","6 may 2023","7 may 2023"]);
    const [source, setSourse] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState(null);

    //API CALL HANDLE FUNCTION
    const getPrice=async(e)=>{
        e.preventDefault();
        try {            
            const {data}=await axios.post(`${process.env.REACT_APP_API}/api/v1/flight/price`,{source,destination,date});
            setPrice(data?.Prices);
        } catch (error) {
            console.log(error)
        }
       
    }
  return (
    <div className='container mt-4 ' style={{ minHeight: "76vh" }}>
        <h1>You can Check Ticket Price Your Flight</h1>
    <div className="row mt-3">
        <div className="col-md-2 ">
            <select bordered={false}  size='large' showSearch 
            className='form-select mb-3' onChange={(e)=>{setSourse(e.target.value)}} >
                <option key={"from"} selected>From</option>
            {src?.map(s=>(
            <option key={s} value={s}>{s}</option>
                ))}
            </select>
        </div>        
        <div className="col-md-2 ">
            <select bordered={false}  size='large' showSearch 
            className='form-select mb-3' onChange={(e)=>{setDestination(e.target.value)}} >
                <option key={"to"} selected>To</option>
            {desti?.map(d=>(
            <option key={d}  value={d}>{d}</option>
                ))}
            </select>
        </div>
        <div className="col-md-3 ">
            <select bordered={false} size='large' showSearch 
            className='form-select mb-3' onChange={(e)=>{setDate(e.target.value)}} >
                <option key={"from"} selected>Select Date</option>
            {selectdate?.map(sd=>(
            <option  value={sd}>{sd}</option>
                ))}
            </select>
        </div>
        <div className="col-md-2">
            <button className='btn btn-primary' onClick={getPrice}>Check price</button>
        </div>    
    </div>
    <div className="col-md-4">
      { price?(<table class="table">
            <tbody>
                <tr>
                <th scope="row">Indigo</th>
                <td>&#8377;{price?.indigoPrice}</td>
                </tr>
                <tr>
                <th scope="row">airAsia</th>
                <td>&#8377;{price?.airAsiaPrice}</td>
                </tr>
                <tr>
                <th scope="row">visTara</th>
                <td>&#8377;{price?.vistaraPrice}</td>
                </tr>
            </tbody>
            </table>
        ):(<h3>No Result Found</h3>)}
    </div>
</div>
)
}

export default CheckPrice
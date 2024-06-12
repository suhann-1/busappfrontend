import React from 'react'

const Search = () => {
    const [data,changeData]=useState(
        {
           "BusNo":""
        }
     )
     const [result,setResult]=useState([])
     const inputHandler=(event)=>{
         changeData({...data,[event.target.name]:event.target.value})
     }
     const readValue=()=>{
         console.log(data)
         axios.post("",data).then(
             (response)=>{
                 setResult(response.data)
             }
         ).catch()
     }
     const delt=(id)=>{
         let input={"_id":id}
         axios.post("",input).then(
             (response)=>{
                 console.log(response.data)
                 if(response.data.status=="success"){
                     alert("deleted")
                 }
                 else{
                     alert("failed")
                 }
             }
         ).catch()
     }
     
  return (
    <div>
        <Nav/>
          <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                       
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">BusNo</label>
                            <input type="text" className="form-control" />
                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Search</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">BusNo</th>
     
      
    </tr>
  </thead>
  <tbody>
   {result.map(
    (value,index)=>{
        return <tr>
      
        <td>{value.busno}</td>
       <button className="btn btn-danger" onClick={()=>{delt(value._id)}}>delete</button>
        <td></td>
       
      </tr>
    }
   )}
    
  </tbody>
</table>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Search
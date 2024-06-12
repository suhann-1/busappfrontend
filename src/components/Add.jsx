import React from 'react'

const Add = () => {
  
    
        const [data,changeData]=useState({
        "name":"",
        "phno":"",
        "busno":"",
        "from":"",
        "to":"",
        "date":""
    })
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("").then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("added")
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
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                     
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                      <div/>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">phone number</label>
                        <input type="text" className="form-control" name='phno' value={data.phno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label"> BusNo</label>
                        <input type="text" className="form-control"name='busno'value={data.busno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">starting from</label>
                        <input type="text" className="form-control"name='from' value={data.from} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">going to</label>
                        <input type="text" className="form-control" name='to' value={data.to} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">date</label>
                        <input type="date" name="date" id="" className="form-control" value={data.date}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">no.of.passengers</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>BookSeats</button>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Add
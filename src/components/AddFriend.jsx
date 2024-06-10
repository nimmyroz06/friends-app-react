import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddFriend = () => {
    const [data,setdata]=useState(
        {
            "name": "",
    "friendName": "",
    "friendNickName":"",
    "DescribeYourFriend":""
        }
    )
    const inputhandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        console.log(data)
        
            axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Successful")
                    } else {
                        alert("Failed")
                    }
                }
            )
        }
    
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><h1><b>Add Friends</b></h1></center><br/>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Friend Name</label>
                            <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Nick Name</label>
                            <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">describe</label>
                            <textarea name="DescribeYourFriend" value={data.DescribeYourFriend} onChange={inputhandler} id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFriend
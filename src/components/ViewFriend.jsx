import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewFriend = () => {
    const [data, changedata] = useState([])
    const fetchData = ()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{
                changedata(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Freind Name</th>
                                    <th scope="col">Nick Name</th>
                                    <th scope="col">Describe</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                     return  <tr>
                                    <th scope="row">{value._id}</th>
                                    <td>{value.name}</td>
                                    <td>{value.friendName}</td>
                                    <td>{value.friendNickName}</td>
                                    <td>{value.DescribeYourFriend}</td>
                                </tr>
        }
                                )
    }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewFriend
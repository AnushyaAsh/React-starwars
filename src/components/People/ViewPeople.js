import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../Navbar";

function ViewPost() {
    var {personId} = useParams()
    var [person,setPerson] = useState({height:'', mass:'', hair_color:'', skin_color:'',
    eye_color:'', birth_year:'', gender:'', created:'', edited:'', name:'', homeworld:'', url:'', description:'', _id:'' })
    useEffect(()=>{
        axios.get('https://www.swapi.tech/api/people/'+personId).then(response=>{
            setPerson(response.data)
        })
    },[personId]);
    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header"><h3>Person Details</h3></div>
                        <div className="card-body">{person.height}</div>
                        <div className="card-body">{person.mass}</div>
                        <div className="card-body">{person.hair_color}</div>
                        <div className="card-body">{person.skin_color}</div>
                        <div className="card-body">{person.eye_color}</div>
                        <div className="card-body">{person.birth_year}</div>
                        <div className="card-body">{person.gender}</div>
                        <div className="card-body">{person.created}</div>
                        <div className="card-body">{person.edited}</div>
                        <div className="card-body">{person.name}</div>
                        <div className="card-body">{person.homeworld}</div>
                        <div className="card-body">{person.url}</div>
                        <div className="card-body">{person.description}</div>
                        <div className="card-body">{person._id}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ViewPost;
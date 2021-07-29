import React, { useState, useEffect} from 'react'
import axios from 'axios'

function User() {
    const [user, setUser] = useState([])
    
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
        .then(response => { 
            setUser(response.data.results)
        
        })
    })

        if(user){
            return (
                 user.map((user) => (
            <section>
                <div className="smart">
                    
                <ul>
                    <img src = "https://source.unsplash.com/random/200x200?sig=3" alt = "" />
                 <li key = {user}>
                    <h1>Name: {user.name}</h1>
                    <p>Gender: {user.gender}</p>
                    <p>Height: {user.height}</p>
                 </li>
                 </ul>
            </div>
            </section>
        
                 ))
            )
           
        }

      return ( 
            <p>{user}</p>
    )
}

export default User

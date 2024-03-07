import React from 'react'
import { useState } from 'react'

const Registration_Form = () => {


    let[state , setState] = useState({
        username : '',
        email : '' ,
        password : ''
    })
    let[newstate , setNewState] = useState({})

    function handleChange(e){
        setState((preValue)=>{
            if(e.target.name === 'username'){
                return {...preValue , username:e.target.value}
            }else if(e.target.name === 'email'){
                return {...preValue , email:e.target.value}
            }else if(e.target.name === 'password'){
                return {...preValue , password:e.target.value}
            } 
        })
    }
    
    function handleSubmit(e){
        setNewState(state)

        e.preventDefault()
    }
    
  return (
    <>
    <center className='heading'>Registration_Form</center>
    <div className="container mt-1">
    <form action="" onSubmit={handleSubmit}>
    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Username</span>
    <input type="text" onChange={handleChange} class="form-control"  aria-label="Username" aria-describedby="basic-addon1" name='username'/>
    </div>
    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Mail</span>
    <input type="email" onChange={handleChange} class="form-control"  aria-label="Username" aria-describedby="basic-addon1" name='email' />
    </div>
    <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Password</span>
    <input type="password" onChange={handleChange} class="form-control"  aria-label="Username" aria-describedby="basic-addon1" name='password'/>
    </div>
    <button className='btn btn-success' type='submit'>Submit</button>
    </form>
    <br />
    <h4>Username : {newstate.username}</h4>
    <h4>Mail : {newstate.email}</h4>
    <h4>Password : {newstate.password}</h4>
    </div>
    </>
  )
}

export default Registration_Form
import React, { useState } from 'react';

const Form = () => {

const[city,setcity]=useState("")

const onSubmit =(e) => {
    e.preventDefault();
    console.log(city);
    if (city===""||!city) return;
}


    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className='form-comtrol' placeholder='Ciudad' onChange={(e) =>setcity(e.target.value)} />
                    <button className='btn btn-prymary input-group-text' type='submit'>Buscar</button>
                </div>
            </form>
        </div>
    );
};

export default Form;

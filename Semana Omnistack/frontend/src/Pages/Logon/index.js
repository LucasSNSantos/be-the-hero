import React, { useState } from 'react';
import api from '../../services/api'
import {Link,useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoimg from '../../assets/logo.svg'

export default function Logon(){
    const [id,setID] = useState()
    const history = useHistory();

    async function handleLogin(e)
    {
        e.preventDefault();
        try{
           const response = await api.post('session',{id});
           localStorage.setItem('ongId', id);
           localStorage.setItem('ongName',response.data.name);    
           history.push('profile')
        }catch(e){
            alert('Falha no login, tente novamente.');
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
            <img src = {logoimg} alt= "Be the Hero" />

            <form onSubmit={handleLogin}>
                <h1>Entrar</h1>

                <input
                placeholder = "Sua ID"
                value={id}
                onChange = {e => setID(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>


                <Link className="back-link" to= "/register">
                    <FiLogIn size ={16} color= "#E02141" />
                Nao tenho Cadastro
                </Link>
            </form>

            </section>
            <img src = {heroesImg} alt="Heroes"/>
        </div>    
    );
}
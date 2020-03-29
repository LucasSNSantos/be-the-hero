import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'

import './styles.css';
import logoImg from "../../assets/logo.svg";
import {FiPower, FiTrash2} from 'react-icons/fi'

import api from '../../services/api'


export default function Profile()
{
    const history = useHistory();

    const [incidents,setIncidents] = useState([]);
    const ongName  = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    

    useEffect(() => {
        api.get('profile',{
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            
            setIncidents(response.data);
        })
    },[ongId]);

    async function handleDeleteIncidente(id)
    {
        try {
            await api.delete(`incidents/${id}`, {headers:{
                Authorization:ongId
            }});

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (error) {
            alert('Erro ao deletar, tente novamente');
        }
    }

    async function handleLogout()
    {
        localStorage.clear();

        history.push('/');
    }


    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>


                <Link className="button" to="/incidents/new">Cadastrar novo Caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size = {18} color="#E20041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
             {
                 incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRICAO</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-br',{style: 'currency', currency: 'BRL',
                                                }).format(incident.value)}</p>

                        <button type="button" onClick = {() => handleDeleteIncidente(incident.id)}>
                            <FiTrash2 size={20} color="#a8Aab3" background="none"></FiTrash2>
                        </button>
                    </li>
                 ))}
            </ul>
        </div>
    );
}
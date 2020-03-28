import React,{useEffect, useState} from 'react'; //useEffect, serve para disparar uma função em algum momento do componente
import {Link, useHistory} from 'react-router-dom'; //importação para fazer a aplição ter o comportamento de um SPA
import {FiPower, FiTrash2} from 'react-icons/fi';

import './styles.css';
import '../../global.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Profile(){
    const [incidents,setIncidents] = useState([]);    
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();
    console.log(ongName);
    console.log(ongId);
    
    useEffect(() => {
        api.get('profile',{
            headers:{
                authorization: ongId,
            }
        }).then( response =>{
            console.log(response);
            setIncidents(response.data);
        })
    },[ongId]);


    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`,
            {
                headers:{
                    authorization: ongId,
            }
            
        });
        setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (error) {
            alert("Erro ao deletar caso, tente novamente.");
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo Be The Hero"/>
                <span>Bem vindo, {ongName}</span>
                <Link className="button" to="/incident/new">
                    Cadastrar novo caso
                </Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
            <h1>Casos cadastrados</h1>

            <ul>
                {
                    incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>{incident.description}</p>

                            <strong>VALOR:</strong>
                                <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                                <FiTrash2 size={20} color="#a8a8b3"/>
                            </button>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    );
}
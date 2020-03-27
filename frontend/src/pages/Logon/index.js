import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'; //importação para fazer a aplição ter o comportamento de um SPA
import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
import '../../global.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
export default function Logon(){
    const [id,setId] = useState('');
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();

        try {
            const resp = await api.post('sessions',{id});
            const name = resp.data.name;
            console.log(name);
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',name);
            history.push('profile');
        } catch (err) {
            alert('Falha no login');
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                    placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back_link" to="/register"> {/* aqui substituí o "a" por "Link" e o "href" por "to" */}
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}
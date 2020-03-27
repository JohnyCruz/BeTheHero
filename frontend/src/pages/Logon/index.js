import React from 'react';
import {Link} from 'react-router-dom'; //importação para fazer a aplição ter o comportamento de um SPA
import {FiLogIn} from 'react-icons/fi';

import './styles.css';
import '../../global.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo Be The Hero"/>
                <form action="">
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"/>
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
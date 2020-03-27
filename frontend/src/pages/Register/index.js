import React from 'react';
import {Link} from 'react-router-dom'; //importação para fazer a aplição ter o comportamento de um SPA
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css'
import '../../global.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){
    return (
    <div className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Logo Be The Hero"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadasto, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                <Link className="back_link" to="/"> {/* aqui substituí o "a" por "Link" e o "href" por "to" */}
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para logon
                    </Link>   
                </p>
            </section>
            <form>
                <input placeholder="Nome da ONG"/>
                <input type="email" placeholder="E-Mail"/>
                <input placeholder="WhatsApp"/>
                <div className="input-group">
                    <input placeholder="Cidade"/>
                    <input placeholder="UF" style={{width:80}}/>
                </div>
                <button className="button" type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    </div>
    );

}
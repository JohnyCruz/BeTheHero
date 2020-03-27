import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import '../../global.css';
import logoImg from '../../assets/logo.svg';


export default function New(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logo Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva um caso detalhadamente para encontrar um herói para resolver isso.
                    <Link className="back_link" to="/profile"> {/* aqui substituí o "a" por "Link" e o "href" por "to" */}
                            <FiArrowLeft size={16} color="#E02041"/>
                            Voltar para home
                        </Link>   
                    </p>
                </section>
                <form>
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="E-Mail"/>
                    <input placeholder="Valor em reais"/>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
        );
}
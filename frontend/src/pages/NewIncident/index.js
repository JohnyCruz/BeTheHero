import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import '../../global.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function New(){
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIntent(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }
        try {
            const resp = await api.post('incidents',data, {
                headers: {
                    Authorization:ongId,
                }
            });
            history.push('/profile');
        } catch (err) {
            alert('Falha ao criar novo caso, tente novament.');
        }
    }

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
                <form onSubmit={handleNewIntent}>
                    <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e=>setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                    />
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
        );
}
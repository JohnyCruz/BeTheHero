import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom'; //importação para fazer a aplição ter o comportamento de um SPA
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css'
import '../../global.css';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function Register(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhatsApp] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');

    const history = useHistory();

    async function  handleRegister(e){
        e.preventDefault();//esse método evita que a página recarregue quando a função for chamada

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        console.log(data);
        try {
            const resp = await api.post('ongs',data);
            alert(`Cadastro realizado com sucesso, aqui está o seu ID: ${resp.data.id}`);
            history.push('/');
        } catch (error) {
            alert('Falha ao realizar o cadastro, favor tentar novamente.');
        }
        
        
    }
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
            <form onSubmit={handleRegister}>
                <input 
                    placeholder="Nome da ONG" 
                    value={name} 
                    onChange={e => setName(e.target.value)}/>
                <input 
                    type="email" 
                    placeholder="E-Mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                <input 
                placeholder="WhatsApp"
                value={whatsapp}
                onChange={e => setWhatsApp(e.target.value)}
                />
                <div className="input-group">
                    <input 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                    <input
                        placeholder="UF"
                        style={{width:80}}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                         />
                </div>
                <button className="button" type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    </div>
    );

}
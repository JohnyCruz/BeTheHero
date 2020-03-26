import React, {useState} from 'react'; //O useState deve ser importado do React para poder atualizar algum objeto da página sem ferir o principio da imutabilidade
import Header from './Header';



function App() {
  const [counter, setCounter] = useState(0); // inicializo um contador e junto com ele a funcao para atualiza-lo
  
  function increment(){ // No react podemos criar uma função dentro da outra
    setCounter(counter + 1); // Eu não poderia mudar o contador direto, pelo conceito de imutabilidade do React
  }
  
  return (
    //No React nunca podemos ter duas tags juntas que não estejam dentro de outra tag
    //Quando for chamar uma função dentro de um objeto ela deve ser passada entre {}
    <div> 
        <Header>
          Contador: {counter}
        </Header>
        <button onClick={increment}>Incrementa</button>
   </div>
  );
}

export default App;

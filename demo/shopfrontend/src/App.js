import { useState, useEffect, useContext } from 'react';
import './App.css';
import NavBar from './Component/NavBar';
import Prodotto from './Component/Prodotto';
import { GestioneProdotti } from './Data/GestioneProdotti'

function App() {
  const { prodotti, setProdotti, aggiungiProdotto, esaurimento } = useContext(GestioneProdotti);
  const [nuovoProdotto, setNuovoProdotto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    aggiungiProdotto(nuovoProdotto);
    setNuovoProdotto("");
  }
  return (
    <div className="App">
      <NavBar />
      <div className='container'>
        <div className='addProduct'>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className='inputBar'
              value={nuovoProdotto}
              placeholder="Cosa devi acquistare?"
              onChange={(e) => setNuovoProdotto(e.target.value)}
            />
            <button type="submit">Aggiungi</button>
          </form>
        </div>

        <div className='prodottiContainer'>
          <ul>
            {prodotti.length > 0 ? (
              prodotti.map((prodotto, index) => (
                <Prodotto
                  lista={true}
                  esaurito={false}
                  acquistato={false}
                  key={index} // AGGIUNGI QUESTA RIGA
                  indice={prodotto.id}
                  nome={prodotto.nome}
                ></Prodotto>
              ))
            ) : (
              <p>Nessun prodotto</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

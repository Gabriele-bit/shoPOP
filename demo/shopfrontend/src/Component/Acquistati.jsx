import { useContext } from 'react';
import Prodotto from './Prodotto';
import { GestioneProdotti } from '../Data/GestioneProdotti'
import NavBar from './NavBar';
import "../App.css";
function Acquistati() {
    const { acquistati } = useContext(GestioneProdotti);
    return (
        <div className='App'>
            <NavBar />
            <div className='prodottiContainer'>
                    {acquistati.length > 0 ? (
                        acquistati.map((prodotto, index) => (
                            <Prodotto
                                esaurito={true}
                                acquistato={true}
                                key={index} // AGGIUNGI QUESTA RIGA
                                indice={prodotto.id}
                                nome={prodotto.nome}
                            ></Prodotto>
                        ))
                    ) : (
                        <p>Nessun prodotto</p>
                    )}
            </div>
        </div>
    )
}
export default Acquistati;
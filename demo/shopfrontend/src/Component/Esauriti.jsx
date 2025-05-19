import { useContext } from "react";
import { GestioneProdotti } from "../Data/GestioneProdotti";
import NavBar from "./NavBar";
import Prodotto from "./Prodotto";
import "../style/prodotto.css";
import "../App.css";
function Esauriti() {
    const { esauriti, rimuoviProdotto } = useContext(GestioneProdotti);
    return (
        <div className="App">
            <NavBar></NavBar>
            <div className="prodottiContainer">
                {esauriti.length > 0 ? (
                    esauriti.map((prodotto, index) => (
                        <Prodotto
                            finito={true}
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
            </div>
        </div>
    )
}

export default Esauriti;
import { useContext } from "react";
import { GestioneProdotti } from "../Data/GestioneProdotti";
import "../style/prodotto.css";

function Prodotto(props) {
    const { rimuoviEsaurito, aggiungiEsaurito, rimuoviProdotto, acquistato, rimuoviAcquisto } = useContext(GestioneProdotti);

    const renderEliminaButton = () => {
        if (!props.esaurito && props.lista) {
            return <button className="eliminaButton" onClick={() => rimuoviProdotto(props.indice)}>X</button>;
        } else if (props.esaurito && props.acquistato) {
            return <button className="eliminaButton" onClick={() => rimuoviAcquisto(props.indice)}>X</button>;
        } else if (!props.esaurito && props.finito) {
            return <button className="eliminaButton" onClick={() => rimuoviEsaurito(props.indice)}>X</button>;
        }
        return null;
    };


    return (
        <div className="prodotto">
            <div className="prodName">
                {renderEliminaButton()}
                <p>{props.nome}</p>
            </div>
            <div className="buttons">
                {props.esaurito === true && (
                    <button onClick={() => aggiungiEsaurito(props.indice)}>Finito</button>
                )}
                {props.acquistato === false && (
                    <button onClick={() => acquistato(props.indice)}>Acquistato</button>
                )}
            </div>
        </div>
    );
}

export default Prodotto;

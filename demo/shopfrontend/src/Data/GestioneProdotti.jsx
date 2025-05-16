import { Children, createContext, useEffect, useState } from "react";
export const GestioneProdotti = createContext();

export const ProviderProdotti = ({ children }) => {
    const [prodotti, setProdotti] = useState(() => {
        const salvati = localStorage.getItem("prodotti");
        return salvati ? JSON.parse(salvati) : [];
    });

    const [esauriti, setEsauriti] = useState(() => {
        const salvati2 = localStorage.getItem("esauriti");
        return salvati2 ? JSON.parse(salvati2) : [];
    });

    const [acquistati, setAcquistati] = useState(() => {
        const salvati3 = localStorage.getItem("acquistati");
        return salvati3 ? JSON.parse(salvati3) : [];
    })


    useEffect(() => {
        localStorage.setItem("prodotti", JSON.stringify(prodotti));
        console.log("sono stato chiamato", localStorage.getItem("prodotti"));
    }, [prodotti]);

    useEffect(() => {
        localStorage.setItem("esauriti", JSON.stringify(esauriti));
    }, [esauriti]);

    useEffect(() => {
        localStorage.setItem("acquistati", JSON.stringify(acquistati));
    }, [acquistati]);

    const rimuoviProdotto = (id) => {
        setProdotti(prodotti.filter(prod => prod.id !== id));
    };

    const rimuoviEsaurito = (id) => {
        setEsauriti(esauriti.filter(p => p.id !== id));
    };

    const rimuoviAcquisto = (id) => {
        setAcquistati(acquistati.filter(prod => prod.id !== id));
    };

    const aggiungiProdotto = (nome) => {
        if (nome.trim() !== "") {
            const nuovoProdotto = {
                id: Date.now(),
                nome: nome.trim()
            };
            setProdotti([...prodotti, nuovoProdotto]);
        }
    };

    const aggiungiEsaurito = (id) => {
        const prod = acquistati.find(p => p.id === id);
        if (prod) {
            setAcquistati(acquistati.filter(p => p.id !== id));
            setEsauriti(prev => [...prev, prod]);
        }
    }

    const acquistato = (id) => {
        var prod = prodotti.find(p => p.id === id);
        if(!prod) prod=esauriti.find(p=>p.id===id);
        if (prod) {
            setProdotti(prodotti.filter(p => p.id !== id));
            setEsauriti(esauriti.filter(p => p.id !== id));
            setAcquistati(prev => [...prev, prod]);
        }
    }

    return (
        <GestioneProdotti.Provider value={{ rimuoviAcquisto, acquistati, acquistato, rimuoviProdotto, rimuoviEsaurito, esauriti, prodotti, aggiungiProdotto, aggiungiEsaurito }}>{children}</GestioneProdotti.Provider>
    )
}
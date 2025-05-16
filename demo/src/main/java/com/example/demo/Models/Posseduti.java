package com.example.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="posseduti")
public class Posseduti {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int quantita;
    @ManyToOne
    @JoinColumn(name="prodotto")
    private Prodotti prodotto;
    @ManyToOne
    @JoinColumn(name = "utente")
    private Utenti utente;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getQuantita() {
        return quantita;
    }
    public void setQuantita(int quantita) {
        this.quantita = quantita;
    }
    public Prodotti getProdotto() {
        return prodotto;
    }
    public void setProdotto(Prodotti prodotto) {
        this.prodotto = prodotto;
    }
    public Utenti getUtente() {
        return utente;
    }
    public void setUtente(Utenti utente) {
        this.utente = utente;
    }
    public String nomeUtente(){
        return this.utente.getNome();
    }
    private String nomeProdotto(){
        return this.prodotto.getNome();
    }
}

import { Injectable } from '@angular/core';
import { CardResumeModel } from '../models/cardResumeModel';

@Injectable({
  providedIn: 'root'
})
export class Myresume {

  private edcuationCards: CardResumeModel[] = [
    new CardResumeModel(
      "Licence en informatique",
      "2021",
      "2024",
      "intitut superieur polytechnique de madagasar",
      "Cours d'informatique où j'ai pu réalisé des projets autant personnels que par équipe.",
      false
    ),
    new CardResumeModel(
      "Annéé Préparatoire",
      "Jan 21",
      "Sep 21",
      "Programme SESAME",
      "on a fait de l'orientation scolaire, professionnelle, développement personnel, renforcement scolaire.",
      false
    ),  

    new CardResumeModel(
      "Baccalaureat",
      "2019",
      "2020",
      "Lycee Presentation de Marie",
      "Baccalauréat série C avec mention Bien.",
      false
    ),




  ];

  getEducationCards(): CardResumeModel[] {
    return this.edcuationCards;
  }

  private experienceCards: CardResumeModel[] = [
    new CardResumeModel(
      "Fullstack Django",
      "Fev 25",
      "Mai 25",
      "Freelance",
      "Réalisation d'une application de gestion de rendez-vous et de l'evolution de dossier pour un avocat.",
      false
    ),

    new CardResumeModel(
      "Fullstack PHP",
      "Jan 25",
      "Avr 25",
      "Full remote",
      "Site de gestion d'un bien immobilier (bailonline). Création des biens, abonnement, paiement loyer,...",
      false
    ),

    new CardResumeModel(
      "Stagiaire Backend",
      "Fev 25",
      "Jui 25",
      "Oceantrade du Group Viseo",
      "Création d'api et maintenance d'une application CSMS. Traitement en temps réel avec Websocket et rabbitMQ.",
      false
    ),

    new CardResumeModel(
      "Stage Decouverte",
      "Oct 21",
      "Nov 21",
      "ingenosya madagasar",
      "Initiation et découverte du langage PHP et réalisation d'un mini projet.",
      false
    ),
  ];

  getExperienceCards(): CardResumeModel[] {
    return this.experienceCards;
  }

  private certificatCards: CardResumeModel[] = [
    new CardResumeModel(
      "Angular Basic",
      "Juin 25",
      "Juin 25",
      "hackerrank",
      "Maitrise du fondamentale d'angular: component, services, event, data binding,...",
      false
    ),

    new CardResumeModel(
      "ML intermédiaire",
      "Juin 25",
      "",
      "Kaggle",
      "Amélioration de la performance de la création de modèle: cross validation, XGBoost, ...",
      false
    ),

    new CardResumeModel(
      "Machine Learning intro",
      "Avr 25",
      "",
      "Kaggle",
      "Premier pas dans la machine learning: les bases de ML,regression linéaire,...",
      false
    ),

    new CardResumeModel(
      "Python",
      "Avr 25",
      "",
      "Kaggle",
      "Base du langage python: variable, fonction, type des données,...",
      false
    ),

    new CardResumeModel(
      "SQL intermédiaire",
      "Mar 25",
      "",
      "Hackerrank",
      "Compétences intermédiaires en SQL acquises via des exercices et certifications sur Hackerrank.",
      false
    ),
  ]

  getCertificatCards(): CardResumeModel[] {
    return this.certificatCards;
  }
  constructor() { }
}

import { Injectable } from '@angular/core';
import { CardResumeModel } from '../models/cardResumeModel';

@Injectable({
  providedIn: 'root'
})
export class Myresume {

  private edcuationCards: CardResumeModel[] = [
    new CardResumeModel(
      "Bachelor's Degree in Computer Science",
      "2021",
      "2024",
      "Higher Polytechnic Institute of Madagascar",
      "Computer science program where I completed both personal and team projects.",
      false
    ),
    new CardResumeModel(
      "Foundation Year",
      "Jan 21",
      "Sep 21",
      "SESAME Program",
      "Covered academic and career guidance, personal development, and academic reinforcement.",
      false
    ),  

    new CardResumeModel(
      "High School Diploma",
      "2019",
      "2020",
      "Presentation de Marie High School",
      "Science track (Series C) with honors.",
      false
    ),




  ];

  getEducationCards(): CardResumeModel[] {
    return this.edcuationCards;
  }

  private experienceCards: CardResumeModel[] = [
    new CardResumeModel(
      "Full-Stack Django",
      "Feb 25",
      "May 25",
      "Freelance",
      "Built an appointment and case-tracking management application for a lawyer.",
      false
    ),

    new CardResumeModel(
      "Full-Stack PHP",
      "Jan 25",
      "Apr 25",
      "Fully remote",
      "Real estate management platform (BailOnline): property creation, subscriptions, rent payments, and more.",
      false
    ),

    new CardResumeModel(
      "Backend Intern",
      "Feb 25",
      "Jul 25",
      "Oceantrade - Viseo Group",
      "Built APIs and maintained a CSMS application with real-time processing using WebSocket and RabbitMQ.",
      false
    ),

    new CardResumeModel(
      "Discovery Internship",
      "Oct 21",
      "Nov 21",
      "Ingenosya Madagascar",
      "Introduction to PHP and delivery of a mini project.",
      false
    ),
  ];

  getExperienceCards(): CardResumeModel[] {
    return this.experienceCards;
  }

  private certificatCards: CardResumeModel[] = [
    new CardResumeModel(
      "Angular Basic",
      "Jun 25",
      "",
      "HackerRank",
      "Mastery of Angular fundamentals: components, services, events, data binding, and more.",
      false
    ),

    new CardResumeModel(
      "Intermediate ML",
      "May 25",
      "",
      "Kaggle",
      "Improved model-building performance: cross-validation, XGBoost, and more.",
      false
    ),

    new CardResumeModel(
      "Machine Learning Intro",
      "Apr 25",
      "",
      "Kaggle",
      "First steps in machine learning: ML fundamentals, linear regression, and more.",
      false
    ),

    new CardResumeModel(
      "Python",
      "Apr 25",
      "",
      "Kaggle",
      "Python fundamentals: variables, functions, data types, and more.",
      false
    ),

    new CardResumeModel(
      "Intermediate SQL",
      "Mar 25",
      "",
      "HackerRank",
      "Intermediate SQL skills developed through exercises and certifications on HackerRank.",
      false
    ),
  ]

  getCertificatCards(): CardResumeModel[] {
    return this.certificatCards;
  }

  private prizeCards: CardResumeModel[] = [
    new CardResumeModel(
      "ODC Champions 2025",
      "Dec 25",
      "",
      "ISPM Team",
      "3rd place nationally with the ISPM team.",
      false
    ),

    new CardResumeModel(
      "Stupid Hackathon",
      "Jul 25",
      "",
      "Stupid Hackathon",
      "Won the Most Perseverant Team prize after delivering a creative, intentionally absurd web project.",
      false
    ),

    new CardResumeModel(
      "DevFest 2024",
      "Nov 24",
      "",
      "Competitive Programming",
      "1st place. Solved CodinGame optimization challenges (resource management, shortest path, advanced sorting) and algorithmic tasks (vacuum bot, laundry bot, image upscaling); scores: 5,275,044 points and 25/25.",
      false
    ),
  ]

  getPrizeCards(): CardResumeModel[] {
    return this.prizeCards;
  }
  constructor() { }
}

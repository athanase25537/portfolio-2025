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
      "Lead Backend Developer",
      "Nov 25",
      "Present",
      "Oceantrade - Viseo Group",
      "Leading backend development, designing REST APIs and real-time services with FastAPI, WebSocket, and RabbitMQ while mentoring interns.",
      false
    ),

    new CardResumeModel(
      "Backend Intern",
      "Feb 25",
      "Jul 25",
      "Oceantrade - Viseo Group",
      "Developed and maintained a CSMS platform, built REST APIs with FastAPI, integrated RabbitMQ and the OCPP protocol, and optimized application performance.",
      false
    ),

    new CardResumeModel(
      "Full-Stack Django Developer",
      "Feb 25",
      "May 25",
      "Freelance",
      "Designed and developed a complete web application for appointment scheduling, case tracking, and real-time messaging using Django Channels.",
      false
    ),

    new CardResumeModel(
      "Full-Stack PHP Developer",
      "Jan 25",
      "Apr 25",
      "Freelance",
      "Developed a real estate management platform featuring property management, subscriptions, rent payments, and client administration.",
      false
    ),

    new CardResumeModel(
      "Discovery Internship",
      "Oct 21",
      "Nov 21",
      "Ingenosya Madagascar",
      "Learned PHP fundamentals and delivered a mini web application as part of the internship program.",
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

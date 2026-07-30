import { Injectable } from '@angular/core';
import { cardPortfolioModel } from '../models/cardPortfolioModel';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  myPortfolio: cardPortfolioModel[] = [
    new cardPortfolioModel(
      "assets/imgs/andaohiasa.webp",
      "AndaoHiasa AI",
      "AI-powered recruitment SaaS platform automating CV analysis, candidate matching, AI scoring, interview workflows, and recruitment management through a modern multi-agent architecture.",
      "https://github.com/Rakotoarinosy/AndaoHiasa",
      "https://andaohiasa.rakotoarinosy.com/",
      ["FastAPI", "Angular", "PostgreSQL", "Docker", "MinIO", "Nginx", "n8n", "Gemini API"],
      "RAKOTOARINOSY Fehizoro",
      "https://rakotoarinosy.com/"
    ),

    new cardPortfolioModel(
      "assets/imgs/kajy_vola.webp",
      "Kajy Vola",
      "Personal finance management application featuring income tracking, expense categorization, budgeting, interactive dashboards, secure authentication, and detailed financial statistics.",
      "https://github.com/athanase25537/budget_management",
      "https://budget-management-frontend-pchq.onrender.com/",
      ["FastAPI", "Angular", "PostgreSQL", "JWT", "Docker"]
    ),

    new cardPortfolioModel(
      "assets/imgs/my-shop.webp",
      "My Shop",
      "Modern e-commerce platform featuring product management, category navigation, responsive interfaces, customer-friendly shopping experience, and secure online order management.",
      "https://github.com/athanase25537/e-commerce",
      "https://my-shop-1yly.onrender.com/",
      ["Symfony", "PostgreSQL", "Tailwind", "JavaScript"]
    ),

    new cardPortfolioModel(
      "assets/imgs/rendezvous.webp",
      "RendezVous",
      "Web application for lawyers providing appointment scheduling, case management, real-time messaging, and an intuitive dashboard for daily legal activities.",
      "https://github.com/athanase25537/rendezvous",
      "https://rendezvous-1-k3uj.onrender.com",
      ["Django", "Django Channels", "PostgreSQL", "Bootstrap", "WebSocket"]
    ),

    new cardPortfolioModel(
      "assets/imgs/portfolio.webp",
      "Portfolio",
      "Personal portfolio showcasing professional experience, technical skills, software engineering projects, achievements, and practical expertise in modern web development.",
      "https://github.com/athanase25537/portfolio-2025",
      "https://athanase-portfolio.onrender.com/",
      ["Angular", "TypeScript", "Tailwind CSS"]
    ),

    new cardPortfolioModel(
      "assets/imgs/mvola.webp",
      "MVola API Docs",
      "Comprehensive developer documentation explaining MVola API integration, authentication, payment workflows, request examples, and implementation best practices.",
      "https://github.com/athanase25537/mvolaapi",
      "https://mvolaapi.onrender.com/",
      ["Angular", "FastAPI", "Swagger", "REST API"]
    ),

    new cardPortfolioModel(
      "assets/imgs/api.webp",
      "Housing Price API",
      "REST API predicting California housing prices using machine learning models, data preprocessing, model evaluation, and efficient backend service architecture.",
      "https://github.com/athanase25537/california_housing",
      "",
      ["FastAPI", "Scikit-learn", "Pandas", "NumPy"]
    ),

    new cardPortfolioModel(
      "assets/imgs/gemini.webp",
      "Gemini Chatbot",
      "AI chatbot powered by Google's Gemini API, supporting natural conversations, intelligent responses, contextual understanding, and interactive user experiences.",
      "https://github.com/athanase25537/chat-gemini",
      "",
      ["Python", "Gemini API", "LLM"]
    ),

    new cardPortfolioModel(
      "assets/imgs/quiz.webp",
      "Quiz App",
      "Interactive quiz application featuring multiple question categories, score tracking, responsive interfaces, and an engaging learning experience for every user.",
      "https://github.com/athanase25537/quiz",
      "",
      ["PHP", "HTML", "CSS", "JavaScript"]
    )
  ];  
  getMyPortfolio(): cardPortfolioModel[] {
    return this.myPortfolio;
  }
}

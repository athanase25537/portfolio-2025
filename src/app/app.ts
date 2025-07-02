import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Card } from './components/card/card';
import { Myservices } from "./components/myservices/myservices";
import { CardResume } from "./components/card-resume/card-resume";
import { SchoolResume } from "./components/school-resume/school-resume";
import { Portfolio } from "./components/portfolio/portfolio";
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [Header, Main, Card, Myservices, CardResume, SchoolResume, Portfolio, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio-2025';
}

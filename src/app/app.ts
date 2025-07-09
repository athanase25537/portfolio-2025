import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Myservices } from "./components/myservices/myservices";
import { SchoolResume } from "./components/school-resume/school-resume";
import { Portfolio } from "./components/portfolio/portfolio";
import { Contact } from "./components/contact/contact";
import { Techno } from "./components/techno/techno";
import { Icon } from "./components/icon/icon";

@Component({
  selector: 'app-root',
  imports: [Header, Main, Myservices, SchoolResume, Portfolio, Contact, Techno, Icon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio-2025';
}

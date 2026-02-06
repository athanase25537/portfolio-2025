import { Component, OnInit } from '@angular/core';
import { CardResumeModel } from '../../models/cardResumeModel';
import { CardResume } from "../card-resume/card-resume";
import { Myresume } from '../../services/myresume';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school-resume',
  imports: [CardResume, CommonModule],
  templateUrl: './school-resume.html',
  styleUrl: './school-resume.scss'
})
export class SchoolResume implements OnInit {

  educationCards!: CardResumeModel[];
  experienceCards!: CardResumeModel[]; 
  certificatCards!: CardResumeModel[];
  prizeCards!: CardResumeModel[];
  type!: string; // edu | exp | cert | prize

  constructor(private resumeService: Myresume) { }

  ngOnInit(): void {
    this.type = "exp"
    this.educationCards = this.resumeService.getEducationCards();
    this.experienceCards = this.resumeService.getExperienceCards();
    this.certificatCards = this.resumeService.getCertificatCards();
    this.prizeCards = this.resumeService.getPrizeCards();
  }

  onClick(val: string) {
    this.type = val;
  }
  
}

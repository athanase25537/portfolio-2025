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
  type!: string; // edu | exp | ski

  constructor(private resumeService: Myresume) { }

  ngOnInit(): void {
    this.type = "exp"
    this.educationCards = this.resumeService.getEducationCards();
    this.experienceCards = this.resumeService.getExperienceCards();
    this.certificatCards = this.resumeService.getCertificatCards();
  }

  onClick(val: string) {
    this.type = val;
  }
  
}

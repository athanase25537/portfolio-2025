import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  email: string = 'andriamasyathanase.nazy@gmail.com';
  phone: string = '038 32 217 44';
  address: string = 'II M 45 ABC Androhibe Antananarivo';


  isSending$ = new BehaviorSubject<boolean>(false);


  successMessage = '';
  errorMessage = '';


  form = {
    name: '',
    email: '',
    message: '',
    subject: 'DEMANDE DE CONTACT'
  };


  ngOnInit() {
    emailjs.init("-CT_I-Qaajwm9Q_Hc");
  }

  sendEmail() {

    console.log("clicked")
    console.log(this.form.name)
    // Reset messages
    this.successMessage = '';
    this.errorMessage = '';


    // Validation des champs vides
    if (
      !this.form.name.trim() ||
      !this.form.email.trim() ||
      !this.form.message.trim()
    ) {

      this.errorMessage = "Please fill in all fields.";
      return;

    }


    // Validation du nom
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;

    if (!nameRegex.test(this.form.name)) {

      this.errorMessage =
        "Name can only contain letters, spaces, apostrophes or hyphens.";

      return;

    }


    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(this.form.email)) {

      this.errorMessage =
        "Please enter a valid email address.";

      return;

    }


    // Validation message
    if (this.form.message.length < 10) {

      this.errorMessage =
        "Your message must contain at least 10 characters.";

      return;

    }


    // Début envoi
    this.isSending$.next(true);


    emailjs.send(
      "service_102tyjr",
      "template_c5d054e",
      {
        name: this.form.name.trim(),
        email: this.form.email.trim(),
        subject: this.form.subject,
        message: this.form.message.trim()
      }

    )
    .then(() => {


      this.successMessage =
        "Your message has been sent successfully. I will reply as soon as possible.";


      this.form = {
        name: '',
        email: '',
        subject: 'DEMANDE DE CONTACT',
        message: ''
      };


      this.isSending$.next(false);


    })
    .catch((error) => {


      console.error("EmailJS error:", error);


      this.errorMessage =
        "Unable to send your message. Please try again later.";


      this.isSending$.next(false);

    });

  }

}
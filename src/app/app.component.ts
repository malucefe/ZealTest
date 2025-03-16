import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactForm: FormGroup;
  newsletterEmail: string = '';
  showThanks: boolean = false;
  currentProjectIndex: number = 0;

  projects = [
    {
      title: 'Eco-Innovación',
      description: 'Soluciones sostenibles para empresas modernas',
      details: 'Implementación de sistemas de gestión ambiental y optimización de recursos energéticos.',
      icon: '🌿'
    },
    {
      title: 'Ciudad Verde',
      description: 'Transformando espacios urbanos en áreas verdes',
      details: 'Diseño e implementación de jardines verticales y techos verdes para empresas y comunidades.',
      icon: '🏢'
    },
    {
      title: 'Energía Limpia',
      description: 'Implementación de energías renovables',
      details: 'Instalación de paneles solares y sistemas de energía eólica para reducir la huella de carbono.',
      icon: '⚡'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  nextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
  }

  prevProject() {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.contactForm.reset();
      this.showThanks = true;
      setTimeout(() => this.showThanks = false, 3000);
    }
  }

  subscribeNewsletter() {
    if (this.newsletterEmail && this.newsletterEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      console.log('Newsletter subscription:', this.newsletterEmail);
      this.newsletterEmail = '';
      alert('¡Gracias por suscribirte a nuestro boletín!');
    }
  }
}

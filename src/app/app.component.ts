import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideAnimation', [
      state('*', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-out')
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms ease-out')
      ])
    ])
  ]
})
export class AppComponent {
  contactForm: FormGroup;
  newsletterEmail: string = '';
  showThanks: boolean = false;
  currentProjectIndex: number = 0;
  currentTeamIndex: number = 0;

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

  team = [
    {
      name: 'Juan Gil',
      role: 'Backend Developer',
      description: 'Experto en desarrollo sostenible y arquitectura de software',
      image: 'assets/team/juan-gil.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/juan-gil',
        github: 'https://github.com/Juangil56'
      }
    },
    {
      name: 'Issa Cooper',
      role: 'Frontend Developer',
      description: 'Diseñadora creativa enfocada en interfaces sostenibles',
      image: 'issa-cooper.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/issa-cooper-moretti-b9a3b5324/',
        github: 'https://github.com/ISSACOOPER'
      }
    },
    {
      name: 'John Montoya',
      role: 'Backend Developer',
      description: 'Experto en optimización y seguridad de sistemas',
      image: 'assets/team/john-montoya.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/john-montoya',
        github: 'https://github.com/JohnMUCA'
      }
    },
    {
      name: 'Luis Martinez',
      role: 'Frontend Developer',
      description: 'Especialista en crear experiencias de usuario excepcionales',
      image: 'assets/team/luis-martinez.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/luis-martínez-3a9881343/',
        github: 'https://github.com/malucefe'
      }
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

  nextTeamMember() {
    this.currentTeamIndex = (this.currentTeamIndex + 1) % this.team.length;
  }

  prevTeamMember() {
    this.currentTeamIndex = (this.currentTeamIndex - 1 + this.team.length) % this.team.length;
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

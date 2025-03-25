import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}


team = [
  {
    name: 'Juan Gil',
    role: 'Backend Developer',
    description: 'Experto en desarrollo sostenible y arquitectura de software',
    image: './assets/team/juan-gil.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/juan-gil',
      github: 'https://github.com/Juangil56'
    }
  },
  {
    name: 'Issa Cooper',
    role: 'Frontend Developer',
    description: 'Diseñadora creativa enfocada en interfaces sostenibles',
    image: './assets/team/issa-cooper.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/issa-cooper-moretti-b9a3b5324/',
      github: 'https://github.com/ISSACOOPER'
    }
  },
  {
    name: 'John Montoya',
    role: 'Backend Developer',
    description: 'Experto en optimización y seguridad de sistemas',
    image: './assets/team/john-montoya.jpg',
    social: {
      linkedin: 'https://linkedin.com/in/john-montoya',
      github: 'https://github.com/JohnMUCA'
    }
  },
  {
    name: 'Luis Martinez',
    role: 'Frontend Developer',
    description: 'Especialista en crear experiencias de usuario excepcionales',
    image: './assets/team/luis-martinez.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/luis-martínez-3a9881343/',
      github: 'https://github.com/malucefe'
    }
  }
];
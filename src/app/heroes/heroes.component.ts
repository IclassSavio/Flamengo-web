import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero.model';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  hero: Hero = {
    id: 10,
    name: "Gabigol"
  }; 

  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
this.selectedHero = hero;
  }
}

export class SimpleFormComp {
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    public name: string = "ironMan";
    public age: number =  45;

    get capitalizedName(): string{
      return this.name.toUpperCase();
    }

    getHeroDescripcion(): string{

       return `${ this.name} - ${this.age}`;
    }

    changeHero(): void{
      this.name = "Spiderman";
    }

    changeAge(): void{
      this.age = 40;
    }

    reset(): void{
      this.name = 'ironman';
      this.age = 45;
    }
}

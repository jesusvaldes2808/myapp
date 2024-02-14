import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})
export class HerolistComponent {

  public heroNames: string [] = ['Spiderman', 'IronMan', 'Hulk', 'See Hulk', 'Thor'];
  public deletedHero?: string;
  removeHeroHero():void{
    this.deletedHero = this.heroNames.pop();
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
  standalone: false
})

export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy?: keyof Hero | '' ): Hero[] {

    // console.log({ heroes, sortBy });

    switch ( sortBy ) {

      case 'name':
        return heroes.sort( (a: Hero, b: Hero) => (a.name > b.name) ? 1 : -1 );

      case 'canFly':
        return heroes.sort( (a: Hero, b: Hero) => (a.canFly > b.canFly) ? 1 : -1 );

      case 'color':
        return heroes.sort( (a: Hero, b: Hero) => (a.color > b.color) ? 1 : -1 );

      default:
        return heroes;
    };
  };
};

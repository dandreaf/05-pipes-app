import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorName',
  standalone: false
})
export class ColorNamePipe implements PipeTransform {

  transform(color: number): string {
    return Color[color];
  };
};

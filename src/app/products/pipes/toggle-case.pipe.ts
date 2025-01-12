import { Pipe, PipeTransform } from "@angular/core";

// fabricio | toggleCase = 'FABRICIO'
// FABRICIO | toggleCase = 'fabricio'

@Pipe({
  name: 'toggleCase',
  standalone: false,
})
export class ToggleCasePipe implements PipeTransform {

  transform( value: string, toUpper: boolean = false ): string {
    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  };

};

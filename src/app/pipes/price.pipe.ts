import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(val: number): unknown {
    return `${val.toFixed(2)} Euro`;
  }

}

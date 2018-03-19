import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asyncObservable'
})
export class AsyncObservablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

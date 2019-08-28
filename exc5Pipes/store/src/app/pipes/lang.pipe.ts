import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return args.length > 0 ? value[args[0]] : value.en;
  }

}

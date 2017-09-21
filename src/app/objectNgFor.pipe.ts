import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'keys' })
export class ObjectNgFor implements PipeTransform {
    transform(value, args:string[]) : any {
        let keys = [];
        for (let key in value) {
          keys.push({key: key, value: value[key]});
        }
        console.log(keys);
        return keys;
    }
}
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {
  subjectTeste = new Subject<number>();

  constructor() { }

  //O observador que desejar se inscrever nas notificações, receberá tudo o que há aqui dentro
  counter = new Observable<number>((observer) => {
    let count = 0;

    const intervalId = setInterval(() => {
      observer.next(count);
      count += 1;
      let maxCount = 7;


      //Se cair nesta condição, nem cai no erro, já encerra o processo
      if (count >= maxCount) {
        observer.complete();
        clearInterval(intervalId);
      }

      if (count > maxCount) {
        observer.error('Alguma coisa deu errada');
      }
    }, 1000);
  });



}

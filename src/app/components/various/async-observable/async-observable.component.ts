import { Component, OnInit } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-async-observable',
  templateUrl: './async-observable.component.html',
  styleUrls: ['./async-observable.component.css']
})
export class AsyncObservableComponent {

  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 200);
  });

}

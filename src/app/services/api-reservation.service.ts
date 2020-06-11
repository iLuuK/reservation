import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiReservationService {

  canReserve : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(undefined);

  constructor(private http: HttpClient) { }

  private getUrlService(roomNumber: number, date: Date): string {
    
    //return 'http://localhost:8080/resource/'+roomNumber+'/available?datetime='+date;

    return 'http://localhost:8080/resource/'+roomNumber+'/available?datetime=2020-03-19T12:00:00';
  }

  public getDataFromApi(roomNumber: number, date: Date) {
    this.http
      .get(this.getUrlService(roomNumber, date)).pipe()
      .toPromise()
      .then((data) => {
        console.log(data['available']);
        if(data['available'] === 'true'){
          this.canReserve.next(true);
        }else{
          this.canReserve.next(false);
        }
      })
      .catch((err: HttpErrorResponse) => {
        console.error('An error occurred:', err.error);
      });
  }

  subscribeToCanReserve(): Observable<boolean>{
    return this.canReserve.asObservable();
  }
}

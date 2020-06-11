import { Component, OnInit } from '@angular/core';
import { ApiReservationService } from 'src/app/services/api-reservation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  canReserve: Observable<boolean>;

  constructor(private apiReservationService : ApiReservationService) { }

  ngOnInit() {
    this.canReserve = this.apiReservationService.subscribeToCanReserve();
    this.canReserve.subscribe();
  }



}

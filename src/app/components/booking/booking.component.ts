import { Component, OnInit } from '@angular/core';
import { ApiReservationService } from 'src/app/services/api-reservation.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

interface Hour {
  value: string;
}

interface Minute {
  value: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  hours: Hour[] = [
    {value: '08'},
    {value: '09'},
    {value: '10'}
  ];

  minutes: Minute[] = [
    {value: '00'},
    {value: '30'},
    {value: '45'}
  ];

  dateReserve: Date;
  roomNumberReserve: number

  myForm = new FormGroup({
    roomNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    date: new FormControl('', [
      Validators.required,
    ])
  });

  constructor(private apiReservationService: ApiReservationService) { }

  ngOnInit() {
    this.myForm.get("roomNumber").valueChanges.subscribe(roomNumber => {
      this.roomNumberReserve = roomNumber;
   })
  }

  dateChange(event): void {
    this.dateReserve = event.value;
    console.log(this.dateReserve);
  }

  checkCanReserve(): void{
    this.apiReservationService.getDataFromApi(this.roomNumberReserve, this.dateReserve);
  }

}

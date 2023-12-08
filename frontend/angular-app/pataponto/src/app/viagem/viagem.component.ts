import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})

export class ViagemComponent implements OnInit {
  trips: any[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    
    // Use this to debug
    // this.apiService.getTravels().subscribe(response => {
    //   console.log(response);
    //  
    // });
    this.apiService.getTravels().subscribe(data => {
      this.trips = data.data;

      this.trips.forEach(trip => {
        trip.partida = this.formatDate(trip.partida);
        trip.volta = this.formatDate(trip.volta);
      });
    });
  }

  private formatDate(dateString: string): string {
    const formattedDate = format(new Date(dateString), 'dd/MM/yyyy hh:mm a');
    return formattedDate;
  }
}



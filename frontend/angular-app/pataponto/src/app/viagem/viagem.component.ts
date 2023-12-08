import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})

export class ViagemComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    
    this.apiService.getTravels().subscribe(response => {
      console.log(response);
      // TODO
    });
  }
}



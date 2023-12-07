import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Viagens } from '../api';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})


export class ViagemComponent implements OnInit {

  viagens: Viagens[] = [];
  constructor(private service: ApiService) {}

  ngOnInit() {
    //this.service.list().subscribe(console.log);
    this.service.list().subscribe(dados => this.viagens = dados);
  }

}

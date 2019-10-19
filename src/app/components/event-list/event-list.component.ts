import { Component, OnInit } from '@angular/core';
import { ContractEvent } from '../../models/contract-event.model';
import { Web3Service } from '../../services/web3.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  providers: []
})
export class EventListComponent implements OnInit {
  eventsModel: ContractEvent[];

  constructor(private service: Web3Service) {}

  ngOnInit() {
    this.fetchEvents();
  }

  async fetchEvents() {
    this.eventsModel = await this.service.getPastEvents(24);
    console.log('Model: ', this.eventsModel);
  }
}

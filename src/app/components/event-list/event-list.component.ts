import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ContractEvent } from '../../models/contract-event.model';
import { Web3ConfigService } from '../../services/web3-config.service';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  providers: []
})
export class EventListComponent implements OnInit {
  model: ContractEvent[];
  web3: Web3;
  contract: Contract;

  constructor() {}

  ngOnInit() {
    this.web3 = new Web3(Web3ConfigService.settings.networks[0].provider);
    this.contract = new this.web3.eth.Contract(
      Web3ConfigService.settings.abi,
      Web3ConfigService.settings.networks[0].address
    );

    console.log('web3', this.web3);
    console.log('contract', this.contract);
  }
}

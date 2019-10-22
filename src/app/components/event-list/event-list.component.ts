import { Component, OnInit } from '@angular/core';
import { ContractEvent } from '../../models/contract-event.model';
import { Web3Service } from '../../services/web3.service';
import { ConvertHelper } from '../../utils/convert-helper';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  providers: [Web3Service]
})
export class EventListComponent implements OnInit {
  eventsModel: ContractEvent[];
  searchQuery: string;
  noSearchResult: boolean;
  public config: PaginationInstance = {
    itemsPerPage: 10,
    currentPage: 1
  };

  // convert helpers
  substring = ConvertHelper.substringTo26Chart;
  unixTimestamp = ConvertHelper.unixTimestamp;
  hexToNumber = ConvertHelper.hexToNumber;
  hexToNumberString = ConvertHelper.hexToNumberString;
  toEther = ConvertHelper.toEther;

  constructor(public service: Web3Service) {}

  ngOnInit() {
    this.fetchEvents();
  }

  async fetchEvents() {
    this.eventsModel = await this.service.getPastEvents(24);

    // Config pagination instance
    if (this.eventsModel) {
      this.config.totalItems = this.eventsModel.length;
    }
  }

  setStatus() {
    this.noSearchResult = !this.noSearchResult;
    this.fetchEvents();
  }
}

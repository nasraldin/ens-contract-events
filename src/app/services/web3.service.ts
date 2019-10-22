import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { Web3ConfigService } from './web3-config.service';
import { ContractEvent } from '../models/contract-event.model';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  private web3: Web3;
  private contract: Contract;

  // estimatd based one data of the pervious days:
  // https://etherscan.io/chart/blocktime
  public AVERAGEBLOCKTIME = 13.34;

  constructor() {
    this.initWeb3();
  }

  //#region publicFunc

  /**
   * Get Web3 instance obj.
   */
  public getWeb3(): Web3 {
    return this.web3;
  }

  /**
   * Get contract instance obj.
   */
  public getContract(): Contract {
    return this.contract;
  }

  /**
   * Get event obj.
   * @param hours The hours used to calc blocknumber.
   * @returns A Promise for the ContractEvent of the callback.
   */
  public async getPastEvents(hours: number) {
    let returnValues: ContractEvent[] = [];

    await this.getBlockNumberHoursAGo(hours).then(async value => {
      returnValues = await this.getEvents(value);
    });

    if (returnValues) {
      return returnValues;
    }

    return null;
  }

  //#endregion

  //#region privateFunc

  /**
   * initialize instance obj of Web3, contract.
   */
  private initWeb3() {
    this.web3 = new Web3(Web3ConfigService.settings.networks[0].provider);
    this.contract = new this.web3.eth.Contract(
      Web3ConfigService.settings.abi,
      Web3ConfigService.settings.networks[0].address
    );
  }

  /**
   * Get events from contract.
   * @param blockNumber The fromBlock.
   * @returns A Promise for the ContractEvent of the callback.
   */
  private async getEvents(blockNumber: number): Promise<ContractEvent[]> {
    const returnValues: ContractEvent[] = [];

    if (this.contract && blockNumber) {
      await this.contract.getPastEvents(
        'allEvents',
        {
          fromBlock: blockNumber,
          toBlock: 'latest'
        },
        (error, events) => {
          if (error) {
            console.error(error);
            return null;
          }

          try {
            if (events) {
              for (const key in events) {
                if (events.hasOwnProperty(key)) {
                  const element = events[key];

                  // map props name, label, etc..
                  returnValues.push({
                    name: element.returnValues.name,
                    label: element.returnValues.label,
                    owner: element.returnValues.owner,
                    expires: element.returnValues.expires._hex,
                    cost: element.returnValues.cost._hex,
                    itemOrder: Number(key) + 1
                  });
                }
              }
            }
          } catch (error) {
            console.error(error);
          }
        }
      );
    }

    return returnValues;
  }

  /**
   * Return blockNumber calc by hours a go.
   * @param hours The hours used to calc blocknumber.
   * @returns BlockNumber.
   */
  private async getBlockNumberHoursAGo(hours: number): Promise<number> {
    // Use Math.floor() to round a number downward to its nearest integer.
    return Math.floor(
      (await this.web3.eth.getBlockNumber()) -
        (hours * 60 * 60) / this.AVERAGEBLOCKTIME
    );
  }

  //#endregion
}

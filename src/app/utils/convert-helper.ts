import { hexToNumber, hexToNumberString, fromWei } from 'web3-utils';

export class ConvertHelper {
  /**
   * @desc substring values to 26 characters
   * @param  val The string will substring
   * @return string ex: (value...)
   */
  static substringTo26Chart(val: string) {
    if (val) {
      return val.substring(0, 26) + '...';
    }
  }

  /**
   * @desc Convert a Unix timestamp to datetime
   * @param  val Unix timestamp
   * @return local datetime 10/21/2020, 5:18:56 AM
   */
  static unixTimestamp(val: number) {
    if (val) {
      return new Date(val * 1000).toLocaleString();
    }
  }

  /**
   * @desc Convert from Wei to Ether
   * @param  val Wei value
   * @return ether value
   */
  static toEther(val: string) {
    if (val) {
      return fromWei(val, 'ether');
    }
  }

  /**
   * @desc convert hex to number
   * @param  val hex value
   * @return string
   */
  static hexToNumber(val: string) {
    if (val) {
      return hexToNumber(val);
    }
  }

  /**
   * @desc convert hex to number string
   * @param  val hex value
   * @return string
   */
  static hexToNumberString(val: string) {
    if (val) {
      return hexToNumberString(val);
    }
  }
}

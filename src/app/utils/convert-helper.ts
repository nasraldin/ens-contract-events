import { hexToNumber, hexToNumberString } from 'web3-utils';

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

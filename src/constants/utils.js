
export default class Utils {
  /**
   * 
   * @param {*} fibonacciNumber 
   * This method is used for get fibonacci numbers 
   */
  static FibonacciSeries(fibonacciNumber) {
    let prevValue = 0;
    let nextValue = 1;
    let currentValue = 0;
    let fibonacciSeriesArr = [];
    let i;

    for (i = 0; i < fibonacciNumber; i++) {
      if (prevValue <= fibonacciNumber) {
        fibonacciSeriesArr.push(prevValue);
      }
      currentValue = prevValue;
      prevValue = nextValue;
      nextValue = currentValue + nextValue;
    }
    return fibonacciSeriesArr;
  }

  /**
   * 
   * @param {*} noOfArr 
   * @param {*} temp_array1 
   * @param {*} temp_array2 
   * @param {*} temp_array3 
   * This method is used for get combine array values
   */
  static CombineArray(noOfArr, temp_array1, temp_array2, temp_array3) {
    let combos = [];

    if (noOfArr === 3) {
      for (var i = 0; i < temp_array1.length; i++) {
        for (var j = 0; j < temp_array2.length; j++) {
          for (var k = 0; k < temp_array3.length; k++) {
            combos.push(
              temp_array1[i] + "," + temp_array2[j] + "," + temp_array3[k]
            );
          }
        }
      }
    }

    return combos;
  }
}

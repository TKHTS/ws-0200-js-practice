
/**
 *  2.3.1 リニアサーチ
 *
 *  リニアサーチを実装してください。(入力は数値のみ)
 *  二つ目の引数に合致した配列の添字を返却してください。
 *  合致のする数字のない場合は-1を返却してください。
 *
 *  example:
 *    [1, 3, 2, 4, 5], 3 => 1
 *    [5, 3, 2, 1], 6 => -1
 */

function linearSearch (array, target) {
  for(i = 0; i < array.length; i++){
    if(array[i] == target){
      return i;
    }
  }
  return -1;
}

/**
 *  2.3.2 バイナリサーチ
 *
 *  バイナリサーチを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 2, 3, 4, 5], 2 => 2
 *    [1, 2, 3, 4] 5 => -1
 */

function binarySearch (array, target) {
  let left = 0;
  let right = array.length - 1;
  while(left <= right){
    middle = Math.floor((left + right) / 2);
    if(array[middle] == target){
      return middle;
    }
    else if(array[middle] < target){
      left = middle + 1;
    }
    else{
      right = middle - 1;
    }
  }
  return -1;
}

module.exports = {
  linearSearch,
  binarySearch
}

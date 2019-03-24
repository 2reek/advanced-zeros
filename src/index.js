module.exports = function getZerosCount(number, base) {
  // your implementation

  let primeNumber = {};                          //Обьект всех простых множителей (и степеней этих чисел)                
    for ( let i = 2; i <= base; i++) {           //Оставляю только простые
      if (base % i) {                   
        continue;
      }
    let counter = 0;                             //Колличество множителей
      while (base % i == 0) {           
        counter++;
        base /= i; 
      }
    primeNumber[i] = counter;                    
    }
    let minZeros = 0;
      for (var prime in primeNumber) {                                    
        let maxPowerNumber = 0;                                                   //
          for (let j = 0; Math.pow(prime, j) <= number; j++) {                    //Ищем максимальную степень множителя
            maxPowerNumber = j;                                                   //
          }
        let countZeros = 0;                                                       //
          for (maxPowerNumber; maxPowerNumber > 0; maxPowerNumber--) {            //Считаем колличество нулей
            countZeros += Math.floor(number / Math.pow(prime, maxPowerNumber));   //
          };                                                                      //
              countZeros = Math.floor(countZeros / primeNumber[prime]);                 
        if (minZeros == 0) {                                                      //                                 
          minZeros = countZeros;                                                  //
            } else if (minZeros > countZeros) {                                   //Выбираем минимальное число
                minZeros = countZeros;                                            //
                }                                                               //
      }
  return minZeros;
}


  
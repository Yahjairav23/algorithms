function divisors(integer) {
    let divisors = []
  //   loop through numbers between and not including 1 and integer
    for(let i = 2; i < integer; i++){
  //   check to see if our array of divisors included current num 
      if(divisors.includes(i)){
        //   if divisors includes num break loop
        break
      }else if (integer%i == 0){
        //   if not and current num evenly divides into integer push num to divisors arr
        divisors.push(i)
      }
    }
  //   return arr of nums
    if (divisors.length == 0){
      console.log(`${integer} is prime`)
    } else {
      console.log(divisors)
    }
  };

  divisors(15)
  // [3, 5]
  divisors(13)
  // 13 is prime
  divisors(12)
  // [2, 3, 4, 6]

  divisors(25)
  divisors(350)




  /*
we can omit checking for inclusion by only looping through Math.floor(integer/2)
this will reduce time complexity from O(n^2) to O(n)
  */
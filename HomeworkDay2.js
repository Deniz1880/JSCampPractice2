//--------Asal sayı bulan program--------
function findPrime(...numbers) {

    let counter = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 2) {
      console.log(numbers[i] + " Asal Olmayan Bir Sayıdır!");

    } else if (numbers[i] == 2) 
    {
      console.log(numbers[i] + " Asal Bir Sayıdır");
    } 
    else {
      for (let j = 2; j < numbers[i]; j++) {
        counter = numbers[i] % j;
        if (counter == 0) {
          break;
        }
      }

      if (counter > 0) {
        console.log(numbers[i] + " Asaldır.");
      } else {
        console.log(numbers[i] + " Asal değildir.");
      }
    }
  }
}
findPrime(1,3,7,13,31,38,77)


//--------Arkadaş sayıları bulan program--------
function findFriends(x , y) {
    
    let number1=0
    let number2=0
    for (let i = 0; i < x; i++){

        if (x%i == 0) {

            number1 +=i
        }
        
    }
    for (let j = 0; j < y; j++){
        
        if (y%j == 0) {
            
            number2 += j
        }
        
    }

    if (number1==y && number2==x) {
        console.log(x,y,"Verilen iki sayı arkadaş sayıdır.")
    }
    else
        console.log(x,y, +"Verilen sayılar arkadaş sayı değildir.")
        
 
}
findFriends(220,284)


//--------Mükemmel sayı bulan program--------
function findPerfectNum(number) {
    
    let numCounter =0
    for (let i = 0; i < number; i++) {
        
        if (number%i==0) {
            numCounter +=i 
        }
    }
    if (numCounter==number) {
        console.log(number + " Mükemmel sayıdır.")
    }
    else
    console.log(number + " Mükemmel sayı değildir.")
    
}
findPerfectNum(496)


//--------1000'e kadar olan mükemmel sayıları bulan program--------
function perfectUntillThousand() {
    
    
    let counter =0
    for (let i = 1; i < 1000; i++) {
        
        for (let j = 1; j < i; j++) {
            
            if (i%j==0) {
                counter +=j
            }
            
        }
        if (counter == i) {
                console.log(i + " Mükemmel sayı")
            }
        counter =0
    }
}
perfectUntillThousand()


//--------1000'e kadar olan asal sayıları bulan program--------
function primeUntillThousand() {
    
    let counter =0
    for (let i = 2; i < 1000; i++) {
        
        for (let j = 2; j < i; j++) {
            counter = i % j;
            if (counter == 0) {
              break;
            }
          }
    
          if (counter > 0) {
            console.log(i + " Asaldır." );
          }
        
        
    }
}
primeUntillThousand()
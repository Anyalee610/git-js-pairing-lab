//Code your solutions in this file

//1 console logs all numbers from 5 to 100.
console.log("Q1-----")
function fiveToOneHundred(){
    for(let i = 5; i <= 100; i++)
    console.log(i)
    
}

fiveToOneHundred()
    


//2 logs all positive numbers to 100 that is a multiple of 3. 
console.log('Q2---')
function multiplesOfThree(){
    for(let i = 1; i <= 100; i++){
        if (i % 3 === 0) {
            console.log(i)
            
        }
        
    }
}
multiplesOfThree()

//3logs all positive numbers to 100 if that number is either a mulitple of 3 or a mutliple of 5.
console.log('Q3-----')
function multiplesOfThreeOrFive(){
    for(let i =1; i <=100; i++){
        if(i % 3 ===0 || i % 5 === 0){
            console.log(i)
        }
    }
    
}

multiplesOfThreeOrFive()


//4
console.log('Q4')
function untilNum(num)
    {
    for(let i= 1; i <= num; i++){
        console.log(i)
    }
    
    
}

untilNum(10)

//5 `multiply` takes in two number parameters and **returns** their product.
console.log('Q5-----')
function multiply(a, b){
    return a*b
    
}
console.log(multiply(2, 2))

//6 `add` that takes in two number parameters and **returns** their sum. But if the two values are the same, return **triple their sum**!
console.log('Q6')
function add(){
    
}
add()

//7  `isNegative` that takes in a number parameter and **returns** `true` is the number is a negative value and `false` is the number is a positive value. 
console.log('Q7----')
function isNegative(){
    
}
isNegative()

//8 triangleArea` that takes in the height and base of a triangle and **returns** the [area of the triangle](https://www.mathsisfun.com/algebra/trig-area-triangle-without-right-angle.html).
console.log('Q8---')
function triangleArea(){
    
}

triangleArea()

//9 takes in a number parameter and checks whether a given integer is within 20 of 100. It **returns** `true` if it is and `false` if not.
console.log('Q9----')
function betweenTwentyAndFourty(){
    
}
betweenTwentyAndFourty()

//10 `largest` that takes in three number parameters and **returns** the largest of the values.
console.log('10----')
function Largest(){
    
}
Largest()
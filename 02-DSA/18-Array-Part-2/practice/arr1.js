const numbers = [4, 7, 2, 9, 5, 2, 7, 1];

let obj = {}



for (let i = 0 ; i <numbers.length;i++){
    let count = 0;

    for(let j = 0 ; j<numbers.length;j++){
        if(numbers[i]===numbers[j]){
            count++
        }
    }
    
    obj[numbers[i]]=count
}

console.log(obj)

const values = [3, 6, 9, 12, 15, 18];

let newValue =[]

for(let i = 0 ; i <values.length;i++){
    if(values[i]%2===0&&values[i]%3===0){
        newValue.push(values[i])
    }
}

console.log(newValue);
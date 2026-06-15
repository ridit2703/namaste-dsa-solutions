let prices=[21,54,34,12,79,45,56];

function maxProfit(arr){
    let min=prices[0];
    let maxProfit=0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]-min > maxProfit){
            maxProfit=prices[i]-min
        }
        if(prices[i]<min){
            min=prices[i]
        }
        
    }
    return maxProfit
    
}

let result=maxProfit(prices)
console.log(result)
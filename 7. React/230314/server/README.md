# Counter Server

let counter 


post /counters/increment  
counter += 1


post /counters/decrement 
counter -= 1

get /counters
{ count: $counter }
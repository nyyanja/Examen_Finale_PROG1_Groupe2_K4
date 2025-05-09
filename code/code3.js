export function reduceDirections(directions=[]) {
    let result = [];
    for(let i = 0; i < directions.length; i++){
        if ((directions[i] == "NORD" && directions[i + 1] == "SUD") || (directions[i] == "SUD") && (directions[i+1] == "NORD"))  {
            directions.shift();
        }
        
        else if ((directions[i] == "EST" && directions[i+1] == "OUEST") || (directions[i] == "OUEST" && directions[i+1] == "EST")) {
            directions.shift();
        }
        else{
            result.push(directions[i])
        }
    }
   
   return result;
}
console.log(reduceDirections(["NORD", "SUD", "SUD", "EST", "OUEST", "NORD", "OUEST"]));

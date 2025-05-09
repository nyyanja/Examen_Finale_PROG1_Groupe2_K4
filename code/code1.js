export function getLastDelegation(delegations= [{}]){
   if (delegations.length === 0) {
       return "";
   }
    let lastDelegation = "";
    let maxDuration = 0;

    for(let i =0; i<delegations.length;i++){
        let [name, distance, rate] = delegations[i].split(" ");
        distance = parseInt(distance);
        rate = parseInt(rate);
        let duration = distance / rate;
        if (duration > maxDuration) {
            maxDuration = duration;
            lastDelegation = name;
        }
        else if (duration === maxDuration) {
            lastDelegation = name;
        }
    }
    return lastDelegation;
}
console.log(getLastDelegation(["Chill 101 2","Estonia 58 1","Romania 102 3", "Ecuador 103 4","Madagascar 104 5","Oman 50 1","Yemen 53 4"]));

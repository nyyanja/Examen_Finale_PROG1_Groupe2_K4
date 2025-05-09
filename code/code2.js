
export function countMaxBobsleigh(N,map){
    if (N === 0) {
        return 0;
    }
    let count = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (map[i][j] === 'B') {
                count++;
            }
        }
    }

    return count;
}
 console.log(countMaxBobsleigh("X....")("....X")(".....")("XX...")("X..X."));
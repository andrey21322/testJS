function loadGrain(levels) {
    let sum = 0
        max = levels[0]
        idx = 0
    for (let i = 1; i <= levels.length; i++) {
        if (levels[i] >= max) {
            for (let j = idx+1; j < i; j++) {
                sum = sum + max - levels[j]
            }
            max = levels[i]
            idx = i
        } else {
            if (i == levels.length -1) {
                levels.reverse()
                let newMax = levels[0]
                    for (let j=1; j < i; j++) {
                        if( levels[j] >= newMax ) {
                            newMax = levels[j]
                            let a = newMax - levels[j]
                            sum = sum + a
                        } else {
                            sum = sum + newMax - levels[j]
                        }
                        if(newMax == max) {
                            console.log(sum)
                            return 0
                        }
                    }
                    
              }
        }
    }
    console.log(sum)
}

loadGrain([2,37,6,2,39,20,31,8,35,11,12,13,14,43,49,7,44,43,0,11,5,42,8,21,14,9,40])
loadGrain([4,1,3,4,0,3,4,0,3])
loadGrain([4,0,1,3])
loadGrain([4,1,3])
loadGrain([2,4,2])
loadGrain([2,4])

let fibonnaciSeq = [ ]

fibonnaciSeq[0] = 0
fibonnaciSeq[1] = 1
fibonnaciSeq[2] = 1

for (let i = 3; i < 20; i++){
    fibonnaciSeq[i] = fibonnaciSeq[i-1] + fibonnaciSeq[i-2]
}

console.log(fibonnaciSeq)
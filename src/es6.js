function sleep (t) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, 1000);
    })
}

(async ()=>{
    for(let i = 0; i < 10; i++){
        await(sleep())
        console.log(i)
    }
})();


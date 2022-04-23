let fun1=function star(){
    for(let i=1;i<10;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write('*');  // process.stdout is node js function that don't add new line by default whereas console.log add new line
        }
        console.log();
    }
}

fun1();
//Using recursion

let fab = function fabonacci(num){
    if(num==0) return 0;
    if(num==1) return 1;
    else return fabonacci(num-1)+fabonacci(num-2);
}

let num=10;
for(let i =0;i<num;i++){
    process.stdout.write(fab(i)+" ");
}

console.log();
//Using array
console.log();

let fab2 = (num) => {
    let arr=[]; 
    for(let i=0;i<num;i++){
		if(i==0) arr[0]=0;
		else if(i==1) arr[1]=1;
		else arr[i]=arr[i-1]+arr[i-2];
    }

	return arr;
}

let output=fab2(10);
for(let i of output){
	process.stdout.write(i+" ");
}
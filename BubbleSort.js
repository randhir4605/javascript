class Sorting{
    constructor(){

    }

    bubbleSort = (arr)=>{
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<i;j++){
                if(arr[i]<arr[j]){
                    this.swap(arr,i,j);
                }
            }
        }
    }

    swap = (arr,index1,index2)=>{
        let temp=arr[index1];
        arr[index1]=arr[index2];
        arr[index2]=temp;
    }
}

let arr = [3,6,2,8,21,84,1,5,99,34]

let sortingObj = new Sorting();
sortingObj.bubbleSort(arr);
for(let i of arr){
    process.stdout.write(i+" ");
}
//arr=[1,2,3,4,5,6]
//target=7
//write a code find the all paires that sum up to the target

let arr=[1,2,3,4,5,6]
let target=7

for(let i=0;i<arr.length;i++){
	for(let j=0; j<arr.length;j++){
		num1=arr[i]
		num2=arr[j]
	
	 
	if(num1+num2==target){
		console.log(num1,num2)
	}
}	
}

//find the max number in the array
let a=[2,3,4,5,6]
let max=a[0]
for(i=0;i<a.length;i++){
	max<a[i]
	max=a[i]
}
console.log("max:"+max)

//foreach
a.forEach((n)=>{
	if(max<n){
		max=n
	}
})
console.log("max:"+max)

//forEach
a.forEach((n)=>{
	(max<n) && (max=n)
})
console.log("max:"+max)

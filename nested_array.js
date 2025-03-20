//print nested array
//[[1,2,30],[5,6],[8,5,3]]

let arr2=[[1,2,30],[5,6],[8,5,3]]
console.log(arr2)

arr2.forEach((n)=>{
	n.forEach((i)=>{
		console.log(i)
	})
})
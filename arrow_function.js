//arrow function
const msg = ()=>{
  console.log("Hello JS")
}
msg()

//write an array function to sum 2 numbers

const sum =(num1,num2) =>{
	return (num1+num2)
}
console.log(sum(2,5))

//multiply

const mul =(num1,num2=4) =>{
	return (num1*num2)
}
console.log(mul(2,5))
console.log(mul(2))

//Reset parameter
const mysum = (...n) =>{
	console.log(n)
}
mysum(4,5,6,85,2)

//Reset sum parameter
const mynumsum =(...n) =>{
	let t=0
	n.forEach((i)=>
	t=t+i)
	console.log(t)
}
mynumsum(1,2,3)

const mynums =(...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mynums(4,5,6))


//callback function
//a function passed as an argument
const greet =(msg,fun)=>{
	console.log("Hi..."+msg)
	fun()
}
greet("Good morning",()=>console.log("My name is David"))

const multwo = (n)=>n*3
const myarr =(mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multwo,4,5,6,8,2)
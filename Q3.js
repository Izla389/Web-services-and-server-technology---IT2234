function maxRearrange(num) {
    if (num < 10) 
		return num; 
    
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''), 10);
}

// Example usage:
console.log(maxRearrange(215));  
console.log(maxRearrange(1093)); 

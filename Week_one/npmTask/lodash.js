const lodash = require('lodash')

let nums = [2,3,4,5,1,6,7]
nums = lodash.sortBy(nums)


const sum = lodash.sum(nums)
const max_val = lodash.max(nums)
const chunks = lodash.chunk(nums, 4)


console.log("The sum of the array is " + sum)
console.log("The max value is " + max_val)
console.log("The sorted array is " + nums)
console.log("The chunks " + chunks)


function debounces(){

    console.log("logging from debounces function")

}


const debouncesFunction = lodash.debounce(debounces, 600)

for(let i = 0; i < 3; i++)
{
    setInterval(()=>{
        debounces()
    }, i * 200)
}
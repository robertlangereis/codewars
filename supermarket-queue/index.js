/*There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.

output
The function should return an integer, the total time required.*/

// describe("example tests", function() {
//     Test.assertEquals(queueTime([], 1), 0);
//     Test.assertEquals(queueTime([1,2,3,4], 1), 10);
//     Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9);
//     Test.assertEquals(queueTime([1,2,3,4,5], 100), 5);

//     })
const queueTime = (arrayOfCustomers, till) => {
	const tillObject = {}
	for (let index = 0; index < till; index++) tillObject[index] = 0
	for (let customerIndex = 0; customerIndex < arrayOfCustomers.length; customerIndex++) {
		const tillWithLowestTime = Object.keys(tillObject).reduce((key, v) =>
			tillObject[v] < tillObject[key] ? v : key
		)
		tillObject[tillWithLowestTime] =
			tillObject[tillWithLowestTime] + arrayOfCustomers[customerIndex]
	}
	let tillTimeArray = Object.values(tillObject);
	let totalTimeSlowestTill = Math.max(...tillTimeArray);
	return totalTimeSlowestTill + console.log('totalTimeSlowestTill', totalTimeSlowestTill);
}

// queueTime([], 1) //0
// queueTime([1, 2, 3, 4], 1) //10
// queueTime([2, 2, 3, 3, 4, 4], 2) //9
// queueTime([1, 2, 3, 4, 5], 100) //5
queueTime(
	[9, 19, 21, 31, 12, 36, 47, 30, 41, 10, 3, 41, 14, 45, 48, 21, 22, 27],
	3
) //169

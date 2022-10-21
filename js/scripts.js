// This is a JavaScript refreshment session using various examples//
// appending, removing, splicing .pop//


myList = ['rug','chair','desk']

myList.append('lamp')

// now, myList == ['rug', 'chair', 'desk', 'lamp'] //

myList = ['strawberry', 'blackberry', 'blueberry']
 
myList.splice(1, 0, 'cherry') // make 'cherry' the second item in the list
 
// now, myList = ['strawberry', 'blackberry', 'blueberry', 'cherry'] //




myList = ['rug','chair','desk']

  // removes 'lamp' from myList and return 'lamp'//
myList('lamp')

  // now, myList == ['rug', ['chair']]

myList = ['strawberry', 'blackberry', 'blueberry']
 
myList.splice(1, 1,) // removes 'blackberry' from myList and returns 'banana' //  
  // now, myList = ['strawberry', 'blueberry'// 



  // Example Run: Building a list //

  myList = ['dog', 'cat', 'parrot']
  // myList[0] <--- This will return 'dog' //

  // saving to a variable //

states = ['oregon', 'california', 'texas', 'washington']
  // states[2] <--- This will return 'texas' //

  theWarmestState = states[2]


// Loops Overview w/ varibles, operators, & data types //
// functions & control flow | list & loops //

// for loop example //

for (i = 0; i < 10; i++) {
  putBucket('soccer')
  putBucket('basketball')
  putBucket('soccer')
}

// while loop example - creates a counter at 0 and add 1 to every iteration. //
//  The loop is executed until the counter is 10 or more. //

let i = 0;
while (i < 10) {
  putBucket('soccer')
  putBucket('basketball')
  putBucket('soccer')
  i++
}
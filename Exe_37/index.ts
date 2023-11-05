// Exercise 37
//37) Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


//function from EX:36
function make_shirt(size:string, message:string):void { 
    console.log(`Size:${size},\n Message: ${message}`);
    return ;

};

// Modify the make_shirt function

make_shirt("large", ' "I love Typescript" ');

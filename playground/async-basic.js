console.log('Starting App');

setTimeout(()=>{
console.log('First callback');
},3000);

setTimeout(()=>{
    console.log('Second callback');
},0);

setTimeout(()=>{
    console.log('Third timeout');
},1000);

setTimeout(()=>{
    console.log('Fourth timeout');
},2000);

console.log('When will i be executed?');

console.log('Finishing App');


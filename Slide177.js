/*Write the code that performs the following steps:
log message “Start”
after 1 second, log message “1 sec passed”
2 seconds after step 2, log message “another 2 sec passed”
2 seconds after step 3, log message “End”*/

console.log('Start')
setTimeout(() => {
    console.log('1 sec passed')
},1000);
setTimeout(() => {
    console.log('Another 2 sec passed')
},4000);
setTimeout(() => {
    console.log('End')
},6000);
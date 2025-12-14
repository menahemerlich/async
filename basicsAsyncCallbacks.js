
// function getUserName(callback){
//     console.log(1);
//     setTimeout(()=>{
//         const userName = 'Moshe'
//         callback(userName)
//     },1000)
//     console.log(2);
// }
// getUserName(function(name){
//     console.log('User name is: ' + name);

// })

// function loadScore(callback){
//     setTimeout(()=>{
//         const score = 85
//         callback(score)
//     },1500)
// }

// loadScore(function(score){
//     console.log('Loaded score: ' + score);
// })

// console.log('End of script');

// function checkLogin(callback){
//     setTimeout(()=>{
//         const isLoggedIn = false
//         callback(isLoggedIn)
//     },2000)
// }

// checkLogin(function(isLoggedIn){
//     if (isLoggedIn){
//         console.log('User is logged in');
//     }else{console.log('User is NOT logged in');
//     }
// })

// function getProductPrice(productId, callback){
//     setTimeout(()=>{
//         const price = 99.9
//         callback(productId, price)
//     }, 1200)
// }
// console.log('Requesting product price...');

// getProductPrice(123, function(productId, price){
//     console.log('Price for product '+ productId + ' is: ' + price); 
// })

// function loadConfig(callback){
//     setTimeout(()=>{
//         const config = {
//             env: 'dev',
//             debug: true
//         }
//     callback(config)
//     }, 500)
// }

// loadConfig(function(config){
//     console.log('Config loaded: ' + config);

// })

// function addAsync(a, b, callback){
//     setTimeout(()=>{
//     }, 1000)
//     let sum = a + b
//     callback(sum)
// }

// addAsync(5, 7, function(sum){
//     console.log('Sum is: ' + sum);
// })

// function getFirstAsync(array, callback){
//     setTimeout(()=>{}, 700)
//     let element = array[0]
//     callback(element)
// }

// getFirstAsync(['a', 'b', 'c'], function(element){
//     console.log('First: ' + element);

// })

// function isEvenAsync(number, callback){
//     setTimeout(()=>{}, 800)
//     const isEven = number % 2 === 0
//     if (isEven){
//         callback(true)
//     }else{
//         callback(false)
//     }
// }

// isEvenAsync(4, function(isEven){
//     console.log('number is even: ' + isEven);

// })
// isEvenAsync(5, function(isEven){
//     console.log('number is even: ' + isEven);

// })

// function downloadFile(url, callback){
//     setTimeout(()=>{}, 1500)
//     console.log('Downloading from: ' + url);
//     callback('Download finished')    
// }

// downloadFile('http://example.com/file', function(result){
//     console.log(result);
// })

// function doubleAsync(value, callback){
//     setTimeout(()=>{}, 300)
//     const result = value * 2
//     callback(result)
// }

// doubleAsync(10, function(result){
//     console.log('Result: ' + result);

// })
import fs from 'fs';

// fs.writeFile('myfile.txt','Helo from async writeFile', 'utf8', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('File written successfully');
// });

// fs.readFile('myfile.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content:', data);
// });

// fs.appendFile('myfile.txt', '\nNew line added', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Line appended');
// });

// fs.mkdir('logs', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Directory "logs" created.');
// })

// fs.writeFile('logs/log.txt','First log line', (err) => {
//   if (err) {
//     console.log('Error creating log file')
//     return;
//   }
//   console.log('Log file created');
// });

// fs.readdir('./logs/', (err, files) => {
//     if (err) {
//     console.error(err);
//     return;
//   }
//   files.forEach(file => {
//       console.log('Files in logs: ' + file);
//   });
// });

// fs.stat('myfile.txt', (err, stats)=>{
//     if (err){
//         console.log('Error getting stats');
//     }
//     console.log('Is file: ' + stats.isFile(), 'Size: ' + stats.size);  
// })

// fs.unlink('logs/log.txt', (err)=>{
//     if (err){
//         console.error(err);
//     }
//     console.log('log.txt deleted');
    
// })

// fs.writeFile('myfile.txt', 'New content here', (err, data)=>{
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('myfile.txt overwritten');
    
//     fs.readFile('myfile.txt', 'utf8', (err, data) => {
//     console.log('File content:', data);
//     });
// })

// fs.mkdir('data', (err)=>{
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Directory "data" created.');
//     fs.writeFile("data/info.txt", "Some info", (err)=>{
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File written successfully');
//     })
// })
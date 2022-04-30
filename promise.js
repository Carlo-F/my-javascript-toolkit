//basic use case
getJSON('/api/user/profile').then(displayUserProfile).catch(handleProfileError);

//Parallel Promises
Promise.all(promises)
  .then(bodies => {/* do something */}
  .catch(e => console.error(e));

Promise.allSettled(promises)
  .then(results => {
    results[0] // status fulfilled
    results[1] // status rejected
    results[2] // status fulfilled
  });

//create a promise
function wait(duration){
 return new Promise((resolve,reject) => {
    if (duration < 0) {
      reject(new Error('Time travel not yet implemented'));
    }
   
    setTimeout(resolve,duration);
  });
}

//async await
async function getHighScore() {
  let response = await fetch('/api/user/profile');
  let profile = await response.json();
  return profile.highScore;
}

// for/await cycle
for await (const response of promises) {
  handle(response);
}

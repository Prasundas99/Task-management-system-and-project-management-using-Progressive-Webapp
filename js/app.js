if("serviceWorker" in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then( (reg) => console.log('service Worker Registered', reg))
    .catch( (err) => console.log('Not Registered', err));
}
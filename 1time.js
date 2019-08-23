function solution(){
    let sec = new Date().getSeconds();
    let min = new Date().getMinutes();
    let hour = new Date().getHours();
    let month = new Date().getMonth();
    let day = new Date().getDate();
    let year = new Date().getFullYear();
  
    let time = hour + ':' + min + ':' + sec;
    let date = month + '/' + day + '/' + year;
  
    return date + ' --' +time;
}

console.log(solution());
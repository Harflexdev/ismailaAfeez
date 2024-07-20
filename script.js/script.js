AOS.init({
    duration: 1700,
    easing: 'ease-in-out',
    once: false,
    mirror: false
    });

    const time = document.getElementById("time");

function countDown(seconds){
    const time = document.getElementById("time");
    
   const x = setInterval(() =>{
        let actualTime = Number(time.innerText);
        actualTime = seconds++;
        if(actualTime >= 200) clearInterval(x);
        time.innerText = `${actualTime + "+"}${"client"}`;
    }, 10)
};
countDown(0);

function countDown2(seconds2){
    const time1 = document.getElementById("time1");
   const y = setInterval(() =>{
        let actualTime2 = Number(time1.innerText);
        actualTime2 = seconds2++;
        if(actualTime2 >= 3) clearInterval(y);
        time1.innerText = `${actualTime2 + "+"}`;
    }, 1000)
};
countDown2(0);
function countDown3(seconds3){
    const time3 = document.getElementById("time3");
   const z = setInterval(() =>{
        let actualTime3 = Number(time3.innerText);
        actualTime3 = seconds3++;
        if(actualTime3 >= 80) clearInterval(z);
        time3.innerText = `${actualTime3 + "+"}`;
    }, 100)
};
countDown3(0);
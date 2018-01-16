// PhantomJS CasperJS

// Handlers
const click = document.getElementById("downloadThisPage");
const fizz = document.getElementById('fizzbuzz');
const button = document.getElementById('button');

// Moment where script gonna run
const execTime = `${14}:${17}:${5}`


console.log(execTime);

function checkTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const currentTime = `${hours}:${minutes}:${seconds}`;

    fizz.innerHTML = currentTime;

    if(currentTime === execTime) {
        button.click();
        console.log(true);
    }
    else console.log(false);
}

// Repeater
setInterval(checkTime, 1000);

var myWindow = window.open("", "MsgWindow", "width=200,height=100");
myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");

click.addEventListener('click', function() {
    fizz.innerHTML = "Yeah you clicked me!";
});
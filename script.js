
// To get IP address

fetch("http://ip.jsontest.com/")
.then(res => res.json())
.then(data => document.getElementById("ipAddress").innerText = (data.ip))

//To get headers

fetch("http://headers.jsontest.com/")
    .then(res => res.json())
    .then(data => document.getElementById("httpHeaders").innerText = (data.Origin))

// To get date and current time

fetch("http://time.jsontest.com")
    .then(res => res.json())
    .then(data => document.getElementById("currentDate").innerText = (data.date))

setInterval(getTime,1000);
function getTime() {
    fetch("http://time.jsontest.com")
        .then(res => res.json())
        .then(data => document.getElementById("updatedTime").innerText = (data.time))
}

//Validation

function validateText   () {
    const sampleJson = document.getElementById("jsonCheck")
    let testJson = "http://validate.jsontest.com/?json=" + sampleJson.value
    fetch(testJson)
        .then(res => res.json())
        .then(ifThen)
    function ifThen(data) {
        document.getElementById("jsonValidate").innerText = (data.validate)
        document.getElementById("jsonExplanation").innerText = (data.error)
    }
}

// MD5
function calculateMdFiveFunction () {
    const exampleText = document.getElementById("calculateMdfive")
    let testMd = "http://md5.jsontest.com/?text=" + exampleText.value
    fetch(testMd)
        .then(res => res.json())
        .then(data => document.getElementById("mdFive").innerText = (data.md5))
}

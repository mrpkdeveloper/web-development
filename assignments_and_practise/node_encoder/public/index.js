let msg = document.getElementById("msg")
let encode_btn = document.getElementById("encode")
let disp = document.getElementById("disp")

encode_btn.onclick = function () {
    let data = btoa(msg.value)
    disp.value = data
}
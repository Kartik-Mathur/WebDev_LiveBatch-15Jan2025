// Callback: Ek function jab apna kaam poora kr lega toh uske baad jis function
// ko call krte hai that function is called as "CALLBACK FUNCTION"
function maggiLana(cb) {
    console.log("Maggi Le aaye 10 min mei")

    // Ab maggi aa gai, toh hum uske baad wale function jisse chalana hai
    // call kr denge usse
    cb(maggiKhana); // cb -> maggiBanana
}

function maggiBanana(cb) {
    console.log("Maggi Bana di 2 min mei")

    cb(); // cb-> maggiKhana
}

function maggiKhana(){
    console.log("Maggi ko kha lia");
}


// maggiLana ke andar humne maggiBanana pass kia
maggiLana(maggiBanana); // maggiBanana tabhi kar skte hai jab maggiLe aaenge
// maggiBanana function is callback of maggiLana function
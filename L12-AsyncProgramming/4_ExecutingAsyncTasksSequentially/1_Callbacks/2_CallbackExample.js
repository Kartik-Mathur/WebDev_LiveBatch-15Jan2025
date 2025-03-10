function maggiLaana(cb) {
    console.log("Maggi lene gaye");
    setTimeout(() => {
        console.log("Maggi aa gai")

        cb(maggiKhana); // cb-> maggiBanana function ko call krdo
    }, 2000); // representing it takes 2 seconds to get maggi from shop
}

function maggiBanana(cb) {
    console.log("Maggi banana start");
    setTimeout(() => {
        console.log("Maggi bann gai")

        cb(); // cb-> maggiKhana function ko call kardo
    }, 2000); // representing it takes 2 seconds to get maggi make maggi
}

function maggiKhana() {
    console.log("Maggi khana shuru");
    setTimeout(() => {
        console.log("Maggi khana khatam");
    }, 2000);
}

maggiLaana(maggiBanana); // Pehle maggi le aao 
// maggiBanana is callback of maggiLaana(maggiBanana shuru krna hai jab
// maggi ko le aaenge)
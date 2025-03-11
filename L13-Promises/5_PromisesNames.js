function downloadMovie(url) {
    return new Promise((res, rej) => {
        if (!url) rej("URL not provided");
        else {
            console.log("Download started");
            setTimeout(() => {
                let movieName = url.split('/').pop();
                res(movieName)
            }, 2000);
        }
    });
}

let p = downloadMovie('http://fakeurl.com/movie/jaanidushman.mp4');
// let p = downloadMovie(); // catch call kr dega

p.then((movieName) => {
    console.log("Download completed", movieName)
}).catch(msg => {
    console.log(msg);
})

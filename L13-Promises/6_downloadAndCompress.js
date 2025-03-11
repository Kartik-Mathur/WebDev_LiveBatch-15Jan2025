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

function compress(movieName) {
    return new Promise((res, rej) => {
        if (!movieName) rej("Movie is not provided, cannot compress");
        else {
            console.log("Compression started");
            setTimeout(() => {
                let compressedMovie = movieName.split('.')[0] + '.zip';
                res(compressedMovie)
            }, 2000);
        }
    });
}

let p = downloadMovie('http://fakeurl.com/movie/jaanidushman.mp4');
// let p = downloadMovie(); // catch call kr dega

p.then((movieName) => {
    console.log("Download completed", movieName)

    compress(movieName)
        .then((compressedMovie) => {
            console.log("Compression completed", compressedMovie)
        })
        .catch(msg => {
            console.log(msg);
        })


}).catch(msg => {
    console.log(msg);
})

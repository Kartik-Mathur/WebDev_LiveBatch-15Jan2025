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

function upload(compressedMovie) {
    return new Promise((res, rej) => {
        if (!compressedMovie) rej("Movie is not provided, cannot upload");
        else {
            console.log("Upload started");
            setTimeout(() => {
                let newUrl = 'http://meranewurl/' + compressedMovie;
                res(newUrl)
            }, 2000);
        }
    });
}

// let p = downloadMovie('http://fakeurl.com/movie/jaanidushman.mp4');
// let p = downloadMovie(); // catch call kr dega

/*
p.then((movieName) => {
    console.log("Download completed", movieName)

    compress(movieName)
        .then((compressedMovie) => {
            console.log("Compression completed", compressedMovie)

            upload(compressedMovie)
                .then((newUrl) => {
                    console.log("Uploaded at", newUrl);
                })
        })
        .catch(msg => {
            console.log(msg);
        })


}).catch(msg => {
    console.log(msg);
})
*/

// downloadMovie ek promise hai, therefore iske poore hone par neeche wala
// .then chlega
downloadMovie('http://fakeurl.com/movie/jaanidushman.mp4')
    // download ka res is now compress, res(movieName) par compress chlega
    .then(compress)
    // compress ek promise return karta hai therefore chaining, compress ka resolve
    //  👇🏻 is .then ke andar likha hai, means res(compressedMovie) inside compress is upload(compressedMovie)
    .then(upload)
    // Upload bhi ek promise return krega therefore I can write its resolve using .then
    // 👇🏻 is .then ke andar ka function is res() of upload
    .then(newUrl => {
        console.log("Upload completed", newUrl);
        return "ALL DONE"
    })
    .then(msg => {
        console.log(msg)
    })
    .catch(msg => {
        console.log(msg)
    })
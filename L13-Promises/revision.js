function downloadMovie(url) {
    return new Promise((res, rej) => {
        if (!url) return rej("URL not provided");

        // 2 sec baad download hoga poora
        console.log("Download started");
        setTimeout(() => {
            let movieName = url.split('/').pop();
            res(movieName)
        }, 2000);
    })
}

function compress(movieName) {
    return new Promise((res, rej) => {
        if (!movieName) return rej("Movie is not provided, cannot compress");
        // 2 seconds baad compress hoga
        console.log("Compression started");
        setTimeout(() => {
            let compressedMovie = movieName.split('.')[0] + '.zip';
            res(compressedMovie)
        }, 2000);
    })
}


function upload(compressedMovie) {
    return new Promise((res, rej) => {
        if (!compressedMovie) return rej("Movie is not provided, cannot upload");

        // 2 seconds baad Upload hoga
        console.log("Upload started");
        setTimeout(() => {
            let newUrl = 'http://meranewurl/' + compressedMovie;
            res(newUrl)
        }, 2000);

    })
}


downloadMovie('http://fakeurl.com/movie/jaanidushman.mp4')
    .then(compress)
    .then(upload)
    .then(data => {
        console.log(data)
    }).catch(msg => {
        console.log(msg)
    })

/*
// Incorrect way of doing it
downloadMovie('http://fakeurl.com/movie/jaanidushman.mp4').then(data=>{
    console.log(data);
}).catch(msg=>{
    console.log(msg)
})


compress().then(data=>{
    console.log(data);
}).catch(msg=>{
    console.log(msg)
})


upload().then(data=>{
    console.log(data);
}).catch(msg=>{
    console.log(msg)
})
    */
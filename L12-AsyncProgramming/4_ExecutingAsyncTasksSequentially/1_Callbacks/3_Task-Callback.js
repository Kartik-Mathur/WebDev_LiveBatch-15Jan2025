function download(url, cb) {
    console.log("Download starts at url:", url);
    // Maan lena profileImg nikaalne mei 2 seconds lagte hai
    setTimeout(() => {
        let profileImg = url.split('/').pop();
        console.log("Download ends", profileImg);

        cb(profileImg, upload); // cb is actually compress
    }, 2000);
}

function compress(profileImg, cb) {
    console.log("compress starts of", profileImg);

    setTimeout(() => {
        let compressedImg = profileImg.split('.')[0] + '.webp';
        console.log("compression completed", compressedImg);
        cb(compressedImg); // upload function is callback of compress
    }, 2000);
    // jpg se hume webp format mei convert karna hai  
}

function upload(compressedImg) {
    console.log("Upload starts of:", compressedImg);

    setTimeout(() => {
        let newUrl = 'http://meraNayaWebsite.com/' + compressedImg
        // Maan lena compressedImg ko new url par upload krne mei 2 seconds lagte hai
        console.log("NEW URL:", newUrl);
    }, 2000);
}

download('http://devanshkisite.ug/image/devansh.jpg', compress);

// compress('devansh.jpg');
// upload('devansh.web');

// AB TASK IS TO ENSURE YEH TEENO FUNCTIONS AISE CHALEIN one after another
// download -> compress -> upload
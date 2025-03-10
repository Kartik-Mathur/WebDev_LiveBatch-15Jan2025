function download(url){
    let profileImg = url.split('/').pop();
    // Maan lena profileImg nikaalne mei 2 seconds lagte hai
    console.log(profileImg);
}

function compress(profileImg){
    // jpg se hume webp format mei convert karna hai
    compressedImg = profileImg.split('.')[0] + '.webp';
    // Maan lena profileImg ko compress krne mei 2 seconds lagte hai
    console.log(compressedImg)
}

function upload(compressedImg){
    let newUrl = 'http://meraNayaWebsite.com/'+compressedImg
    // Maan lena compressedImg ko new url par upload krne mei 2 seconds lagte hai
    console.log(newUrl);
}

// download('http://devanshkisite.ug/image/devansh.jpg')
// compress('devansh.jpg');
// upload('devansh.web');

// AB TASK IS TO ENSURE YEH TEENO FUNCTIONS AISE CHALEIN one after another
// download -> compress -> upload
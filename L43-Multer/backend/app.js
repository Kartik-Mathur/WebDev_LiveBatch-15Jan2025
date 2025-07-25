const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const multer = require('multer')
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5174',
    credentials: true
}))

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, '/uploads'));
//     },
//     filename: function (req, file, cb) {

//         console.log(file) // originalname: codingblocks.jpg
//         let x = file.originalname.split('.').pop();
//         if (['jpg', 'png', 'webp', 'jpeg'].indexOf(x) == -1) return cb(new Error('Only png, jpg, jpeg and webp are allowed'));

//         console.log(path.extname(file.originalname))


//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
//     }
// })

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'some-folder-name',
        allowed_formats: ['jpg', 'jpeg', 'png'],
        transformation: [{
            height: 1000,
            width: 1000,
            crop: "scale"
        }]
    }
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 }
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', upload.single('img'), (req, res) => {
    console.log("FILE DATA", req.file);
    res.json({
        message: 'Image recieved',
        data: req.file
    })
})


app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});
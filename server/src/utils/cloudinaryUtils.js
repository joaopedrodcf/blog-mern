const cloudinary = require('cloudinary');
const multer = require('multer');

function imageResize(url) {
    const split = url.split('/image/upload');

    return `${split[0]}/w_366,h_320,c_scale${split[1]}`;
}
const cloudName = process.env.CLOUD_NAME;
const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;

cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret
});

const storage = multer.diskStorage({
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}.png`);
    }
});

const upload = multer({ storage });

function cloudinarySaveImage(req) {
    return cloudinary.uploader.upload(req.file.path, async ({ secure_url }) =>
        Promise.resolve(imageResize(secure_url))
    );
}

module.exports = {
    upload,
    cloudinarySaveImage
};

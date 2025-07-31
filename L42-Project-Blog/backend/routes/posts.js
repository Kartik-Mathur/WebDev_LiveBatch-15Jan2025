const auth = require('../middleware/auth');
const router = require('express').Router();
const postCtrl = require('../controllers/postsController');
const { upload } = require('../middleware/imageUpload');

router.get('/', postCtrl.getAllPosts);
router.get('/:id', postCtrl.getPostById);
router.post('/', auth, upload.single('file'), postCtrl.createPost);
router.put('/:id', auth, upload.single('file'), postCtrl.updatePost);
router.delete('/:id', auth, postCtrl.deletePost);

module.exports = router;
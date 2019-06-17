var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({
  dest: '/tmp',
  limits: {
    fileSize: 3 * 1024 * 1024,
  },
});

const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/monupload', upload.single('monfichier', 12), function (req, res, next) {
  fs.rename(req.file.path, 'public/images/' + req.file.originalname, function(err){
    if (err) {
        res.send('problème durant le déplacement');
    } else {
        res.send('Fichier uploadé avec succès');
    }
  });
})

module.exports = router;

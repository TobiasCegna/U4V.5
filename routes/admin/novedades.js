var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('admin/novedades' , {
        layout:'admin/layout',
        usuarios: req.session.nombre
    });
});

module.exports = router;

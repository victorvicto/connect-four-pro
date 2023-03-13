var express = require('express');

var router = express.Router();

router.use(checkConnection);

router.get('/:username', (req, res, next) => {
  res.render('dashboard.ejs', {username: req.params.username});
});

function checkConnection(req, res, next){
    if(req.isAuthenticated()){
        if(req.session.user.username==req.params.username){ // Is this useful?
            return next();
        }
        return res.redirect("/"+req.session.user.username);
    }
    res.redirect("/auth/login");
}

module.exports = router;
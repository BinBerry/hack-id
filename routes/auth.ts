import {Router, Request, Response} from 'express';
import passport from 'passport';

const router = Router();

router.get('/login', function(req: Request, res: Response) {
    res.render('login', { title: 'Express' });
});

router.get('/mymlh', passport.authenticate('oauth2'), (req, res) => {
})

router.get('/mymlh/redirect', passport.authenticate('oauth2'), (req, res) => {
    res.send("this is the redirect url");
})
  
export = router;
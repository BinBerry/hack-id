import {Router, Request, Response} from 'express';
import passport from 'passport';
import { User } from '../models/User';

const router = Router();

router.get('/login', function(req: Request, res: Response) {
    console.log("test login");
    res.render('login', { title: 'Express' });
});

router.get('/mymlh', passport.authenticate('oauth2', {scope: ['email', 'phone_number', 'demographics', 'birthday', 'education']}));

router.get('/mymlh/callback', passport.authenticate('oauth2'), (req, res) => {
    console.log("test mlh callback")
    console.log(req.user)
    res.redirect('/users/loggedin')
})

router.get('/login', function(req: Request, res: Response) {
    console.log("test login");
    res.render('login', { title: 'Express' });
});
  
export = router;
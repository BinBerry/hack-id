import {Router, Request, Response} from 'express';
import { User } from '../models/User';

const router = Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response) {
  res.send('respond with a resource');
});

router.get('/loggedin',  function(req: Request, res: Response) {
  const user = req.user as User;
  console.log(req.user)
  console.log(req.session)
  res.send(`Hello you are logged in as ${user.firstName} ${user.lastName}`)
});


export = router;

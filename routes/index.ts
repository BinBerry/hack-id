import {Router, Request, Response} from 'express';

const router = Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response) {
  console.log("test logging index")
  res.render('index', { title: 'Express' });
});

export = router;

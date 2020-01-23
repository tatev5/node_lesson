const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/contact', (req, res, next) => {
  res.render('contact');
});

router.get('/about', (req, res, next) => {
  res.render('about');
});

router.get('/login', (req, res, next) => {
  res.render('login');
});



 
router.post('/login',[
  check('name').isAlpha(),
	check('name').isLength({min:4, max:20}),
  check('email', 'Սխալ մուտքագրված էլ-հասցե').isEmail(),
	check('password', 'Գաղտնաբեռը պետք է լինի ոչ պակաս քան 4 տառ').isLength({min:4})
	],
	(req,res)=>{
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	let e_mail = req.body.email;
	
		
    res.render('sign')
  

});




module.exports = router;

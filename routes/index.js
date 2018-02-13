const router = require('express').Router();

router.use((req,res,next)=>{
  res.locals.path = req.url
  next();
});

router.get('/', (req,res,next)=>{
  res.render('index', {title: 'Olympic Medal Tracker'})
})

//this is where we import the routes from each model's routes
router.use('/events', require('./events'))
router.use('/countries', require('./countries'))


module.exports = router;
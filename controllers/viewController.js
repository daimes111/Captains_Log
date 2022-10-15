const RESOURCE_PATH = '/logs'
const viewController = {
    index(req, res, next){
        res.render('logs/Index', res.locals.data)
    }, 
    show(req, res, next){
        res.render('logs/Show', res.locals.data)
    }, 
    edit(req, res, next){
        res.render('logs/Edit', res.locals.data)
    }, 
    newView(req, res, next){
        res.render('logs/New', res.locals.data)
    }, 
    redirectHome(req, res, next){
        res.redirect(RESOURCE_PATH)
    }, 
    redirectShow(req, res, next){
        const fruitId = req.params.id || res.locals.data.fruit._id
        res.redirect(`${RESOURCE_PATH}/${fruitId}`)
    }
}

module.exports= viewController
const express = require('express')
const router = express.Router()



router.get('/',(req,res)=>{

    const data={
        greetings:"Hello welcome to my site "
    }

    res.render('landing',data);
})
module.exports = router;

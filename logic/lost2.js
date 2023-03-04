const LOST2 = require('../model/lost2');

module.exports = {
    getlost2 : async (req, res) => {
        const lost2 = await LOST2.find();
        res.json(lost2)
    },
    insertlost2 :async (req,res)=>{
        const lost2 =await new LOST2({
            name: req.body.name,
            country: req.body.country,
            typeLost: req.body.typeLost,
            lssuer: req.body.lssuer,
            YersLost: req.body.YersLost,
            PhoneNumber: req.body.PhoneNumber,
            note: req.body.note
        }).save()
        if (lost2){
         res.status(200).json({"product" : lost2});
        }else{
            res.status(404).json({message : "post is erorr"});
        } 
        
    },
    deleteone : async (req,res) => {
        const Id = req.params.id;
        const del = await LOST2.findByIdAndDelete(Id);
        res.json({"delete" : del})
    },
    getOne : async (req,res) => {
        const Id = req.params.id;
        const Get = await LOST2.findById(Id);
        res.json({"Get" : Get})
    },
}
const groupdata = require("../Modal/group")

const createGroup = async (req, res) => {
    try {
        const { name, color } = req.body;
        console.log(name,color)
        const group = new groupdata({ name, color });
        await group.save();
        res.json(group);
    } catch (error) {
        res.status(500).json({ error: error.message });
       
    }
};

const getGroups = async (req, res) => {
    try {
        const groups = await groupdata.find();
        res.json(groups);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getSinglegroup= async(req,res)=>{
    try{
       
        const group = await groupdata.findById(req.params.id);
    
        res.status(200).json(group);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports={
    createGroup,getGroups,getSinglegroup
}
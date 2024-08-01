const PoketData= require("../Modal/poketdata")

const createNote = async (req, res) => {
    try {
        const { groupId, content } = req.body;
        const note = new PoketData({ groupId, content });
        await note.save();
        res.json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getNotesByGroupId = async (req, res) => {
    try {
        const groupId = req.params.groupId;
        const notes = await PoketData.find({ groupId: groupId });
        res.json(notes);
       
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports={
    createNote,
    getNotesByGroupId
}
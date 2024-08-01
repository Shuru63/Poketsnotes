const express = require('express');
const router = express.Router();

const {createGroup,getGroups,getSinglegroup}=require("../Controller/groupControler");
const {createNote,getNotesByGroupId}=require("../Controller/PoketDatacontroler");

router.post('/creategroups', createGroup);
router.get('/getgroups', getGroups);
router.get('/singlegroups/:id', getSinglegroup);
router.post('/createnotes', createNote);
router.get('/getnotes/:groupId',getNotesByGroupId);

module.exports = router;
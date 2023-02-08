
const express = require('express');
const router = express.Router();

// const SaveTeamMemberController = require('../controllers/TeamMembers/SaveTeamMemberController');
const UpdateTeamMemberController = require('../controllers/TeamMembers/UpdateTeamMemberController');
const DeleteTeamMemberController = require('../controllers/TeamMembers/DeleteTeamMemberController');
const getAllTeamMemberController = require('../controllers/TeamMembers/GetAllTeamMemberController');
const saveIconsController = require('../controllers/Icons/saveIconsController');
const UpdateIconsController = require('../controllers/Icons/UpdateIconsController');
const DeleteIconsController = require('../controllers/Icons/DeleteIconsController');
const getAllIconsController = require('../controllers/Icons/getAllIconsController');
const saveDescriptionController = require('../controllers/Description/saveDescriptionController');
const UpdateDescriptionController = require('../controllers/Description/UpdateDescriptionController');
const DeleteDescriptionController = require('../controllers/Description/DeleteDescriptionController');
const getAllDescriptionController = require('../controllers/Description/getAllDescriptionController');
const saveLogoController = require('../controllers/Logo/saveLogoController');
const UpdateLogoController = require('../controllers/Logo/UpdateLogoController');
const getAllLogoController = require('../controllers/Logo/getAllLogoController');
const DeleteLogoController = require('../controllers/Logo/DeleteLogoController');
const getPageHeadingController = require('../controllers/PageHeading/getPageHeadingController');
const updatePageHeadingController = require('../controllers/PageHeading/updatePageHeadingController');
const deletePageHeadingController = require('../controllers/PageHeading/deletePageHeadingController');
const registerController = require('../controllers/user/registerController');
const loginController = require('../controllers/user/loginController');

// ************************* User *****************************************
router.post('/register', registerController.registerUser)
router.post('/login', loginController.loginUser)





// *************************TEAM MEMBERS *****************************************
// router.post('/saveTeamMember', SaveTeamMemberController.teamMemberController)
router.post('/updateTeamMember', UpdateTeamMemberController.UpdateTeamMemberController)
router.post('/deleteTeamMember', DeleteTeamMemberController.DeleteTeamMemberController)
router.get('/getAllTeamMember', getAllTeamMemberController.getAllTeamMemberController)


// *************************ICONS *****************************************
router.post('/saveIcons', saveIconsController.saveIconsController)
router.post('/updateIcons', UpdateIconsController.UpdateIconsController)
router.post('/deleteIcons', DeleteIconsController.DeleteIconsController)
router.get('/getAllIcons', getAllIconsController.getAllIconsController)


//*********************DESCRIPTION*************************************

router.post('/saveDescription', saveDescriptionController.saveDescriptionController)
router.post('/updateDescription', UpdateDescriptionController.UpdateDescriptionController)
router.post('/deleteDescription', DeleteDescriptionController.DeleteDescriptionController)
router.get('/getAllDescription', getAllDescriptionController.getAllDescriptionController)


//*********************LOGO*************************************
router.post('/saveLogo', saveLogoController.saveLogoController)
router.post('/updateLogo', UpdateLogoController.UpdateLogoController)
router.get('/getAllLogo', getAllLogoController.getAllLogoController)
router.post('/deleteLogo', DeleteLogoController.DeleteLogoController)

//********************HRADINGS*********************************
router.get('/getPageHeading', getPageHeadingController.getPageHeadingController)
router.post('/updatePageHeading', updatePageHeadingController.updatePageHeadingController)
router.post('/deletePageHeading', deletePageHeadingController.deletePageHeadingController)

//**************IMAGE ****************************************



module.exports = router
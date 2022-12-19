const express = require("express");
const { createService, getService } = require("../Controller/Service");
const { createSubService, getSubService } = require("../Controller/SubService");
const { createUser, getUser } = require("../Controller/User");
const router = express.Router();

// router.route("/users").post(createUser).get(getUser)
router.route("/service").post(createService).get(getService);
router.route("/subservice").post(createSubService).get(getSubService);
// router.route("/singleuser").post(getSingleUser)
// router.route("/singleproduct/:id").get(singleProduct)

module.exports = router;

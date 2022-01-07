import express from "express";

const router = express.Router();



// all routes in here are starting with /users

router.get('/', ( _req, rez) => {
  rez.send('Hello');
});

export default router;
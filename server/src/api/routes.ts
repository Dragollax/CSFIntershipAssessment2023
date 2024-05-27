import express, { Router } from 'express';

export const router: Router = express.Router();

router.get('/test', async (req, res) => {
  return res.status(200).json({message: "hello world test! This is from the server."})
});

















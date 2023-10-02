import { Router } from "express";
import { getAllMods } from '../middlewares/middleware';

const router = Router();

router.get('/mods', getAllMods)

export {router}
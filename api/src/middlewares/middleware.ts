import { getAllModsService } from "../services";
import { Request, Response } from "express";

export function getAllMods(req: Request, res: Response) {
  try {
    const mods = getAllModsService();
    res.json(mods).status(200);
  } catch (err) {
    res.json(err).status(500);
  }
}

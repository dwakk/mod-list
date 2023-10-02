import data from "../data/list.json";
import { ModData } from "../types";

const ModsData = data as ModData[];

export function getAllModsService(): ModData[] {
  return ModsData;
}

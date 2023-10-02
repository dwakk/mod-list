import axios from "axios";
import type { ModData } from "./types";

export async function getAllMods(): Promise<ModData[]> {
    const response = await axios.get("http://localhost:3200/api/mods")
    const mods = response.data as ModData[];
    return mods
}
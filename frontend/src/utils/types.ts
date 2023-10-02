export interface ModData {
  _id: string;
  name: string;
  author: string;
  mod_link: string;
  category:
    | "Plugins"
    | "Callouts"
    | "Sirens"
    | "Lighting"
    | "Graphics"
    | "Weapons"
    | "Other Audio"
    | "Wardrobe"
    | "Essentials"
    | "Vehicles";
}

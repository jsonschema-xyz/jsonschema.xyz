import fs from "fs";

const schemas = fs.readdirSync("..").filter(file => file.endsWith(".schema"));
fs.writeFileSync("schemas.json", JSON.stringify(schemas));

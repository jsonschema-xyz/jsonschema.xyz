import fs from "fs";

var schemas = fs.readdirSync("..").filter(file => file.endsWith(".schema"));
fs.writeFileSync("schemas.json", JSON.stringify(schemas));

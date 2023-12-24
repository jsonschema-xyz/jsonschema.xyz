import fs from "fs";

const schemas = fs.readdirSync("../../schemas/");
fs.writeFileSync("schemas.json", JSON.stringify(schemas));

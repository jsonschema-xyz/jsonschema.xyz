import fs from "fs";

const schemas = fs.readdirSync("../../schemas/");
fs.writeFileSync("schemas.json", JSON.stringify(schemas));

const readmeFrontmatter = fs.readFileSync("../../docs/README-TEMPLATE.md", "utf8");

const readme = readmeFrontmatter.replace("{schemas}",
    schemas.map(schema => `- [${schema}](https://jsonschema.xyz/schemas/${schema})`).join("\n"))
    .replace("{lastmod}", new Date().toISOString())
    .replace("{version}", require("../package.json").version);

fs.writeFileSync("../../docs/README.md", readme);

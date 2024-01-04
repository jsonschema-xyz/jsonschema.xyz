import jquery from "jquery";
import fetch from "node-fetch";

const url = new URL(window.location.href);
const schemasUrl = `${url.protocol}://${url.host}:${url.port}/schemas/list-all`;

const fetchSchemas: () => Promise<{ [key: string]: string }> = (async () => (await fetch(schemasUrl)).json() as Promise<{ [key: string]: string }>);

jquery(document).ready(() => {
    const schemasPlaceholder = jquery("#schemas");
    if (schemasPlaceholder) {
        (async () => await fetchSchemas())().then((schemas) => {
            for (let schema in schemas) {
                if (schema.indexOf(',') < 0) {
                    const schemaLi = jquery(document.createElement("li"));
                    const schemaLink = jquery(document.createElement("a"));
                    schemaLink.attr("href", "schemas/" + schemas[schema]);
                    schemaLink.text(schemas[schema]);
                    schemaLi.append(schemaLink);
                    schemasPlaceholder.append(schemaLi);
                }
            }
        })
    }
});

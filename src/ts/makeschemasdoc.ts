import jquery from "jquery";
const fetch = require("node-fetch").default;

declare type Dictionary = { [key: string]: string };

const url = new URL(window.location.href);
const schemasUrl = `${url.protocol}://${url.host}:${url.port}/schemas/list-all`;

const fetchSchemas: () => Promise<Dictionary> = (async () =>{ const _fetch = await fetch; return (await (await _fetch(schemasUrl)).json()) as Dictionary; });

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

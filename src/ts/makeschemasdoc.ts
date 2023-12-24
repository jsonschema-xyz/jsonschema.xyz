import * as schemas from "./schemas.json";
import jquery from "jquery";

var _schemas = new Array<string>();
schemas.forEach(s => { if(s.indexOf(',') < 0) _schemas.push(s); })

jquery(document).ready(() => {
    const schemasPlaceholder = jquery("#schemas");
    if (schemasPlaceholder) {
        for (let schema in _schemas) {
            const schemaLi = jquery(document.createElement("li"));
            const schemaLink = jquery(document.createElement("a"));
            schemaLink.attr("href", "schemas/" + schemas[schema]);
            schemaLink.text(schemas[schema]);
            schemaLi.append(schemaLink);
            schemasPlaceholder.append(schemaLi);
        }
    }
});

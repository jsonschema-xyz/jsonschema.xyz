import * as schemas from "./schemas.json";
import jquery from "jquery";


jquery(document).ready(() => {
    const schemasPlaceholder = jquery("#schemas");
    if (schemasPlaceholder) {
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
    }
});

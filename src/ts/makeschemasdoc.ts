import * as schemas from "./schemas.json";
import jquery from "jquery";

jquery(document).ready(() => {
    alert(`Schemas: ${JSON.stringify(schemas)}`);
    const schemasPlaceholder = jquery("#schemas");
    if (schemasPlaceholder) {
        for (let schema in schemas) {
            const schemaLi = jquery(document.createElement("li"));
            const schemaLink = jquery(document.createElement("a"));
            schemaLink.attr("href", schemas[schema]);
            schemaLi.add(schemaLink);
            schemasPlaceholder.add(schemaLi);
        }
    }
});

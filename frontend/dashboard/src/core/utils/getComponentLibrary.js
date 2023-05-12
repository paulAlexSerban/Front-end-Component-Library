import path from "path";
import fs from "fs";

export default function getComponentLibrary() {
    const componentLibrary = {};
    const componentsDistPath = path.resolve("..", "component-library", "dist");
    const componentsSrcCategoriesPath = path.resolve("..", "component-library", "src");
    const componentsDistList = fs.readdirSync(componentsDistPath);
    const componentsSrcCategoriesList = fs
        .readdirSync(componentsSrcCategoriesPath)
        .filter((item) => !item.includes("_commons"));
        componentsSrcCategoriesList.forEach((category) => {
          componentLibrary[category] = [];
        })

    componentsDistList.forEach((item) => {
        const meta = fs.readFileSync(path.resolve(componentsDistPath, item, "meta.json"), "utf8");
        const metaObj = JSON.parse(meta);
        const { category, variations, componentName } = metaObj;
        componentLibrary[category].push({category, componentName, variations})
    })

    return componentLibrary;
}

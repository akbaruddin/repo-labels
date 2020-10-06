const fs = require("fs");
const path = require("path");

const first_labels = fs.readFileSync(path.join(__dirname, "labels.json"));

const first_JSON = JSON.parse(first_labels.toString());

const mapJSON = first_JSON.map((item) => {
  return {
    name: item.name,
    color: item.color,
    description: item.description,
  };
});
console.log(mapJSON.sort());

fs.writeFileSync(
  path.join(__dirname, "labels.json"),
  JSON.stringify(mapJSON.sort())
);

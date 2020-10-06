var request = require("request");
require("dotenv").config();

function deleteLabels(code) {
  var options = {
    method: "DELETE",
    url: `https://api.github.com/repos/${process.env.REPO}/labels/${code}`,
    headers: {
      "content-type": "application/json",
      authorization: process.env.AUTH,
      "User-Agent": "Mozilla/5.0",
    },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

const labels = [
  "bug",
  "duplicate",
  "enhancement",
  "good first issue",
  "help wanted",
  "invalid",
  "question",
  "wontfix",
];

labels.forEach((label) => {
  console.log(label);
  deleteLabels(label);
});

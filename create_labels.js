var request = require("request");
require("dotenv").config();

function update(code) {
  var options = {
    method: "POST",
    url: `https://api.github.com/repos/${process.env.REPO}/labels`,
    headers: {
      "content-type": "application/json",
      authorization: process.env.AUTH,
      "User-Agent": "Mozilla/5.0",
    },
    body: code,
    json: true,
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

const labels = [
  {
    name: "Ads 🏄‍♂️",
    color: "b54ae0",
    description: "",
  },
  {
    name: "Documentation 📝",
    color: "4cd1e0",
    description:
      "Communicable material that is used to describe, explain or instruct",
  },
  {
    name: "Environment: Development",
    color: "ee6f57",
    description: "",
  },
  {
    name: "Environment: Pre Prod",
    color: "81b214",
    description: "",
  },
  {
    name: "Environment: Production 🍱",
    color: "206a5d",
    description: "",
  },
  {
    name: "Environment: Staging",
    color: "bfdcae",
    description: "",
  },
  {
    name: "New Design 🏗",
    color: "667aff",
    description: "",
  },
  {
    name: "Type: Add Feature 🛠",
    color: "00bcd4",
    description: "",
  },
  {
    name: "Type: Bug 🐛",
    color: "ee0701",
    description: "Something isn't working",
  },
  {
    name: "Type: Duplicate ♻️",
    color: "cfd3d7",
    description: "This issue or pull request already exists",
  },
  {
    name: "Type: Enhancement 🎉 ✨",
    color: "84b6eb",
    description: "New feature or request",
  },
  {
    name: "Type: Important 🚑",
    color: "d31525",
    description: "",
  },
  {
    name: "Type: Invalid 🧲",
    color: "e4e669",
    description: "This doesn't seem right",
  },
  {
    name: "Type: Question ❔",
    color: "cc317c",
    description: "Further information is requested",
  },
  {
    name: "Type: hold 🚦",
    color: "c5def5",
    description: "",
  },
  {
    name: "Type: wontfix 🙈",
    color: "ffffff",
    description: "This will not be worked on",
  },
  {
    name: "help wanted! ✨",
    color: "008672",
    description: "Extra attention is needed",
  },
  {
    name: "Build: Pre Prod",
    color: "4e0eb5",
    description: "",
  },
  {
    name: "Build: Production",
    color: "54d889",
    description: "",
  },
  {
    name: "Build: Staging",
    color: "bfdadc",
    description: "",
  },
];

labels.forEach((label) => {
  update(label);
});

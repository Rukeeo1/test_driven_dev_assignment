const axios = require("axios");

//function that takes users name
async function callGit(user) {
  let globalArr = [];
  const result = await axios.get(`https://api.github.com/users/${user}/repos`);
  for (var i = 0; i < result.data.length; i++) {
    globalArr.push(result.data[i].name);
  }
  //console.log(globalArr);
  return globalArr;
}

callGit("Rukeeo1");

module.exports = callGit;

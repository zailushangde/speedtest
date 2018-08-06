const inquirer  = require('./lib/inquirer');

const run = async () => {
  const credentials = await inquirer.askGithubGredentials();
  console.log(credentials);
}

run();
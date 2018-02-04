// The environment is picked up from this file. The contents of the file might change based on the environment (mockapi switch, apiurl etc)
// Right now the changes has to be done manually.

const defaults = {
  ENV: 'dev',
  MOCKAPI: false,
  URL: 'http://192.168.1.190:63047',
  fixtures: require('./fixture.config')
};

const setEnv = (envKey, value) => {
  defaults[envKey] = value;
  return defaults;
};

module.exports = {
  setEnv,
  get ENV () {
    return defaults.ENV;
  },
  get MOCKAPI () {
    return defaults.MOCKAPI;
  },
  URL: defaults.URL,
  fixtures: defaults.fixtures,
};

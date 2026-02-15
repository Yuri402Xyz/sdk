const preprocess = require("./steps/preprocess");
const compute = require("./steps/compute");
const postprocess = require("./steps/postprocess");
const rewards = require("./rewards");
const registry = require("./registry");

async function runWorkflow(input) {
  const clean = await preprocess(input);
  const result = await compute(clean);
  const output = await postprocess(result);

  registry.logExecution();
  rewards.distribute();

  return output;
}

module.exports = { runWorkflow };

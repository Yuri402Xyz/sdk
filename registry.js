let executions = 0;

function logExecution() {
  executions++;
  console.log("Execution logged. Total:", executions);
}

module.exports = { logExecution };

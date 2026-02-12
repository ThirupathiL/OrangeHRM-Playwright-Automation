module.exports = {
    default: {
      require: ["tests/world.ts", "step_definitions/*.ts"],
      requireModule: ["ts-node/register"],
      format: ["progress"]
    }
  };
  
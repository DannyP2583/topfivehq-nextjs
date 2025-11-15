import next from "eslint-config-next";

export default [
  ...next(),
  {
    ignores: ["**/*.config.*", "node_modules/"],
  },
];

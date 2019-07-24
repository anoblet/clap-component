import typescript from "rollup-plugin-typescript";

export default {
  input: "./src/Component.ts",
  output: {
    file: "dist/clap-component.js",
    format: "esm"
  },
  plugins: [typescript()],
  preserveSymlinks: true
};

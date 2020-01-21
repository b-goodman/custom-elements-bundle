import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";

export default [
    {
        input: 'src/index.ts',
        output: {
            dir: "dist",
            format: "esm",
        },
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript(),
            terser(),
        ]
    },
    {
        input: "./src/index.ts",
        output: [{ file: "dist/index.d.ts", format: "es" }],
        plugins: [dts()],
    },
]
import path from 'path'
import fs from 'fs'

const wasmFile = fs.readFileSync('./build/optimized.wasm')
const wasm = new WebAssembly.Module(wasmFile)

export const nodemodule = new WebAssembly.Instance(wasm, {
// export default () => new WebAssembly.Instance(wasm, {
  env: {
    memoryBase: 0,
    tableBase: 0,
    memory: new WebAssembly.Memory({
      initial: 256,
      maximum: 512,
    }),
    table: new WebAssembly.Table({
      initial: 0,
      maximum: 0,
      element: 'anyfunc',
    }),
    abort: console.log,
  },
}).exports;

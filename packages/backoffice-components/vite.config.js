import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// What that file does is it uses react plugin, and instructs Vite to use lib/main.js as an entry point,
// name the file, and library just library, and externalize react and react-dom dependencies.
// Meaning these dependencies won’t be bundled into your library, rather, they will be required to be installed by the project that uses that library.
//So the library build will be smaller.

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve("lib/main.js"),
      name: "backoffice-components",
      fileName: "backoffice-components",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "React-dom",
        },
      },
    },
  },
})

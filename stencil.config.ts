import { Config } from '@stencil/core';
import {postcss} from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
export const config: Config = {
  namespace: 'web-comp',
  plugins : [
    postcss({
      plugins: [
        require("postcss-import"),
        require("tailwindcss")("./tailwind.config.js"),
        autoprefixer()
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      generateTypeDeclarations: true
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};

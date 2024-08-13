import { RespHeading, RespP } from "fhf-react";
import React from "react";
import Code from "../component/Code";

export default function Purge() {
	return (
		<>
			<RespHeading level={2}>I - Vite Configuration : </RespHeading>
			<RespHeading level={3}>1 - Install PurgeCSS plugin:</RespHeading>
			<Code>npm install vite-plugin-purgecss --save-dev</Code>
			<RespP>or</RespP>
			<Code>yarn add vite-plugin-purgecss --dev</Code>
			<RespHeading level={3}>
				2 - Then add it to your vite.config.js file:
			</RespHeading>
			<RespP>
				Open your vite.config.js file and configure the vite-plugin-purgecss:
			</RespP>
			<Code>
				{`// vite.config.js
import VitePurgeCss from 'vite-plugin-purgecss';

export default {
    plugins: [
      //...other plugins
      VitePurgeCss({
        content: ['./src/**/*.vue', './src/**/*.jsx', './src/**/*.tsx'],
        // Adjust the paths based on your project structure
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
    ],
};`}
			</Code>
			<RespHeading level={3}>3 - Run your build command:</RespHeading>
			<RespP>
				Open your terminal and run the following command to Build your Vite
				project:
			</RespP>
			<Code>{`npm run build`}</Code>
			<RespHeading level={2}>II - when using Angular:</RespHeading>
			<RespHeading level={3}>1 - Install PurgeCSS plugin:</RespHeading>
			<Code>{`npm install @fullhuman/postcss-purgecss --save-dev`}</Code>
			<RespP>or</RespP>
			<Code>{`yarn add @fullhuman/postcss-purgecss --dev`}</Code>
			<RespHeading level={3}>2 - Configure Angular with PostCSS:</RespHeading>
			<RespP>Install postcss and postcss-loader:</RespP>
			<Code>{`npm install postcss postcss-loader --save-dev`}</Code>
			<RespP>Update your angular.json:</RespP>
			<Code>{`{
  "projects": {
    "your-angular-project": {
      "architect": {
        "build": {
          "options": {
            "stylePreprocessorOptions": {
              "includePaths": [
                "src/styles"
              ]
            },
            "postcssOptions": {
              "config": "./postcss.config.js"
            }
          }
        }
      }
    }
  }
}`}</Code>
			<RespHeading level={3}>3 - Configure PostCSS:</RespHeading>
			<RespP>Create a postcss.config.js file:</RespP>
			<Code>
				{`// postcss.config.js
module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.html', './src/**/*.ts'],
      // Adjust the paths based on your project structure
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
    // Add other PostCSS plugins as needed
  },
};
`}
			</Code>
			<RespHeading level={3}>4 - Run your build command:</RespHeading>
			<RespP>
				Open your terminal and run the following command to Build your Angular
				project:
			</RespP>
			<Code>{`ng build`}</Code>
			<RespHeading level={2}>III - when using SvelteKit:</RespHeading>
			<RespHeading level={3}>1 - Install PurgeCSS plugin:</RespHeading>
			<Code>{`npm install svelte-preprocess --save-dev`}</Code>
			<RespP>or</RespP>
			<Code>{`yarn add svelte-preprocess --dev`}</Code>
			<RespHeading level={3}>2 - Configure svelte-preprocess:</RespHeading>
			<RespP>
				Update your svelte.config.js to include the svelte-preprocess plugin:
			</RespP>
			<Code>{`// svelte.config.js
import sveltePreprocess from 'svelte-preprocess';

export default {
  // other SvelteKit configuration options
  preprocess: sveltePreprocess({
    postcss: {
      plugins: {
        '@fullhuman/postcss-purgecss': {
          content: ['./src/**/*.svelte', './routes/**/*.svelte'],
          // Adjust the paths based on your project structure
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        },
        // Add other PostCSS plugins as needed
      },
    },
  }),
};
`}</Code>
			<RespHeading level={3}>3 - Run your build command:</RespHeading>
			<RespP>
				Open your terminal and run the following command to Build your SvelteKit
				project:
			</RespP>
			<Code>{`npx svelte-kit build`}</Code>
			<RespHeading level={2}>III - when using Next.js:</RespHeading>
			<RespHeading level={3}>1 - Install PurgeCSS plugin:</RespHeading>
			<Code>{`npm install @fullhuman/postcss-purgecss --save-dev`}</Code>
			<RespP>or</RespP>
			<Code>{`yarn add @fullhuman/postcss-purgecss --dev`}</Code>
			<RespHeading level={3}>2 - Configure PostCSS:</RespHeading>
			<RespP>Create a postcss.config.js file in your project root:</RespP>
			<Code>
				{`// postcss.config.js
module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.js', './pages/**/*.js', './components/**/*.js'],
      // Adjust the paths based on your project structure
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
    // Add other PostCSS plugins as needed
  },
};`}
			</Code>
			<RespHeading level={3}>3 - Integrate with Next.js:</RespHeading>
			<RespP>
				Ensure that your next.config.js file includes the postcss-loader:
			</RespP>
			<Code>
				{`// next.config.js
module.exports = {
  // other Next.js configuration options
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['css-loader', 'postcss-loader'],
    });
    return config;
  },
};`}
			</Code>
			<RespHeading level={3}>4 - Run your build command:</RespHeading>
			<RespP>
				Open your terminal and run the following command to Build your Next.js
				project:
			</RespP>
			<Code>{`npx next build`}</Code>
		</>
	);
}

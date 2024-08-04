import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePurgeCss from "vite-plugin-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePurgeCss({
			content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
			safelist: {
				deep: [/^hljs/, /^sweetAlertStyle/], // Add classes that should not be purged
				greedy: [/^language-/], // Add prefixes of classes that should not be purged
			},
			defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
		}),
	],
});

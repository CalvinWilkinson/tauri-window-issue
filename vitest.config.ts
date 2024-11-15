import { defineConfig, configDefaults } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	test: {
		include: [
			"unit/*.test.ts",
			"components/*.test.tsx",
		],
		exclude: [...configDefaults.exclude],
		dir: "app/_tests_",
		environment: "happy-dom",
		globals: true,
		setupFiles: "app/_tests_/setup.ts" // This let's us not require the '#testing-library/jest-dom/vitest' import in each test file
	},
	plugins: [tsconfigPaths()],
});

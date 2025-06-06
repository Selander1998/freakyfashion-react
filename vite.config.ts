import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		watch: {
			usePolling: true,
		},
	},
});

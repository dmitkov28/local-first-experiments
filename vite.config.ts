import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      srcDir: "src",
      filename: "sw.ts",
      strategies: "injectManifest",
      injectManifest: { globPatterns: ["**/*.{js,css,html,png,jpg,svg}"] },

      includeAssets: [
        "favicon.ico",
        "apple-touch-icon-180x180.png",
        "maskable-icon-512x512.png",
      ],
      manifest: {
        name: "Star Wars PWA",
        short_name: "SW PWA",
        description: "A simple demo app to explore the wonders of PWAs",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      registerType: "autoUpdate",
      devOptions: { enabled: true },
      // workbox: {
      //   globPatterns: ["**/*.{js,css,html,png,jpg,svg}"],
      //   runtimeCaching: [
      //     {
      //       urlPattern: /^https:\/\/swapi\.dev\/api\/people\/\d+\/?$/,
      //       handler: "StaleWhileRevalidate",
      //       options: {
      //         cacheName: "people-cache",
      //         expiration: {
      //           maxEntries: 10,
      //           maxAgeSeconds: 60 * 60 * 24 * 30,
      //         },
      //       },
      //     },
      //     {
      //       urlPattern: /^https:\/\/swapi\.dev\/api\/starships\/\d+\/?$/,
      //       handler: "StaleWhileRevalidate",
      //       options: {
      //         cacheName: "spaceships-cache",
      //         expiration: {
      //           maxEntries: 10,
      //           maxAgeSeconds: 60 * 60 * 24 * 30,
      //         },
      //       },
      //     },
      //     {
      //       urlPattern: /^https:\/\/swapi\.dev\/api\/planets\/\d+\/?$/,
      //       handler: "StaleWhileRevalidate",
      //       options: {
      //         cacheName: "planets-cache",
      //         expiration: {
      //           maxEntries: 10,
      //           maxAgeSeconds: 60 * 60 * 24 * 30,
      //         },
      //       },
      //     },
      //   ],
      // },
    }),
  ],
});

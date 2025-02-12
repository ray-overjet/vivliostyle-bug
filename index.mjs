import { build } from "@vivliostyle/cli";

async function main() {
  console.log("Building two PDFs at the same time...");
  build({
    configPath: "vivliostyle.config.js",
    targets: [
      {
        path: "output1.pdf",
        format: "pdf",
      },
    ],
    logLevel: "silent",
  });
  build({
    configPath: "vivliostyle.config.js",
    targets: [
      {
        path: "output2.pdf",
        format: "pdf",
      },
    ],
    logLevel: "silent",
  });
}

main();

const fs = require('fs');
const path = require('path');

const TARGET_DIRS = ['app', 'components', 'pages', 'src'];

const ALLOWED_FILES = [
  'page-translations.ts',
  'translations.ts',
  'ko.ts',
  'ko.json'
];

const EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];

const koreanRegex = /[가-힣]/;

let errors = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (
        entry.name === 'node_modules' ||
        entry.name === '.next' ||
        entry.name === 'dist' ||
        entry.name === 'out'
      ) {
        continue;
      }
      walk(fullPath);
      continue;
    }

    const ext = path.extname(entry.name);
    if (!EXTENSIONS.includes(ext)) continue;

    const fileName = path.basename(fullPath);

    if (ALLOWED_FILES.some((allowed) => fileName.includes(allowed))) {
      continue;
    }

    if (
      fullPath.includes('/translations/') ||
      fullPath.includes('\\translations\\') ||
      fullPath.includes('/messages/') ||
      fullPath.includes('\\messages\\')
    ) {
      continue;
    }

    const content = fs.readFileSync(fullPath, 'utf8');

    const lines = content.split('\n');

    lines.forEach((line, index) => {
      if (koreanRegex.test(line)) {
        errors.push({
          file: fullPath,
          line: index + 1,
          text: line.trim()
        });
      }
    });
  }
}

TARGET_DIRS.forEach(walk);

if (errors.length > 0) {
  console.error('\n❌ Hardcoded Korean text detected outside translation files.\n');
  errors.forEach((err) => {
    console.error(`${err.file}:${err.line}`);
    console.error(`  ${err.text}`);
  });
  console.error('\nMove Korean text into translation files and use t("key") instead.\n');
  process.exit(1);
}

console.log('✅ No hardcoded Korean text found outside translation files.');

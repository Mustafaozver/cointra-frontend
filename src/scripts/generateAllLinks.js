const fs = require('fs');

const fileToExcludes = [
  './pages/en/favorites/index.jsx',
  './pages/en/properties/[slug].jsx',
];

const getFilePathRecursively = (basePath) => {
  const files = fs.readdirSync(basePath);
  return files.reduce((acc, file) => {
    const currentFilePath = `${basePath}/${file}`;
    const stats = fs.statSync(currentFilePath);
    if (!stats.isDirectory()) {
      acc.push(currentFilePath);
      return acc;
    }
    const recursiveResult = getFilePathRecursively(currentFilePath);
    acc = [...acc, ...recursiveResult];

    return acc;
  }, []);
};

const run = async () => {
  const res = getFilePathRecursively('./pages/en')
    .filter((f) => {
      return !fileToExcludes.find((e) => e === f);
    })
    .map((f) => {
      return f.replace('./pages/', '').replace('.jsx', '');
    });
};

run();

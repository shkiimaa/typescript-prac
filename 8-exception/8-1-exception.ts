// JAVA : Exception
// JavaScript : Error

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file is not exist : ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {}

function run() {
  const fileName = 'not exist!';

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log('catched!!');
    return;
  } finally {
    closeFile(fileName);
    console.log('finally!');
  }
}

run();

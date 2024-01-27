const fs = require('fs').promises;

const filePath : string = 'C:\\Windows\\System32\\drivers\\etc\\hosts';

 async function readFile(filePath : string ) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    console.log(filePath);
  } catch (error : any) {
    console.log('Error:', error.message);
  }
}

// Example usage:

readFile('C:\\Windows\\System32\\drivers\\etc\\services');
readFile('C:\\Windows\\System32\\drivers\\etc\\hosts');
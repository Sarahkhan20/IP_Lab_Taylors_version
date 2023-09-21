const fs = require('fs');

// Create a file
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('File created successfully.');
    
    // Read data from the file
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('File contents:', data);
        
        // Write data to a file
        fs.writeFile('example.txt', 'Updated content', (err) => {
          if (err) {
            console.error('Error writing to file:', err);
          } else {
            console.log('File updated successfully.');
            
            // Rename a file
            fs.rename('example.txt', 'new_example.txt', (err) => {
              if (err) {
                console.error('Error renaming file:', err);
              } else {
                console.log('File renamed successfully.');
                
                // Append data to a file
                fs.appendFile('new_example.txt', '\nAppended data', (err) => {
                  if (err) {
                    console.error('Error appending to file:', err);
                  } else {
                    console.log('Data appended successfully.');
                    
                    // Delete a file
                    fs.unlink('new_example.txt', (err) => {
                      if (err) {
                        console.error('Error deleting file:', err);
                      } else {
                        console.log('File deleted successfully.');
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});


      createTable(15, 15);
      function createTable(numOfRows, numOfColumns) {
         
        if (document.getElementById("table") != null) {
          document.getElementById("table").remove();
        }
        
        
        const table = document.createElement('table');
        
        
        table.setAttribute("id", "table");
        
        
        
        for (let i = 0; i < numOfRows; i++) {
          
          
          const row = table.insertRow();
          
          
          for (let j = 0; j < numOfColumns; j++) {
            
            
            const tableData = row.insertCell();
            
            
            tableData.appendChild(document.createTextNode(`${i + 1},${j + 1}`));
            
            
            
          }
          
          document.body.appendChild(table);
        }
      }
    


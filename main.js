function getParagraph1() {
     var inputs = [];
      for(var i = 1 ; i <=6 ; i++) {
           inputs.push(document.getElementById("rows" + i).value);
         }
          document.getElementById("showParagraph1").innerHTML = inputs.join(". "); 
        }
         function getParagraph2() {
              var inputs = [];
               for(var i = 1 ; i <=6 ; i++) {
                    inputs.push(document.getElementById("rows2" + i).value);
                 }
                  document.getElementById("showParagraph2").innerHTML = inputs.join(". ");
                 } 
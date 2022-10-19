
var lastId = 9; // номер последнего inputa
var res = document.getElementById('result');
    

function calc(){
      
       var price = 0;
        var price2 = 0;
      
        price += parseInt(input.value) * parseInt(input2.value);
        price += parseInt(input3.value) * parseInt(input4.value);
     

        price = parseInt(num5.value) + price;
        price = parseInt(num7.value) + price;
        price = parseInt(num6.value) + price;
        price += (is_html.checked === true) ? parseInt(is_html.value) : 0;

        price += parseInt(type.options[type.selectedIndex].value);
        price2 += parseInt(type2.options[type2.selectedIndex].value);
       
        res.innerHTML = price + price2;
        result.innerHTML = price2;
    
} 

    function calc2() {
            var price = 0;
            
            inputs = calculator.querySelectorAll('input, select');
            
        
        // посчитаем сумму всех инпутов
            for (var i = 0; i < inputs.length; i+=2) {
                price += inputs[i].value * inputs[i+1].value;
                inputs[i].addEventListener('change', calc2);
            }
            res.innerHTML = price;
            
    }


    function addQuestion() {
    
        var d = document;

        var inputs = calculator.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('change', calc2);
        }
        
        var newdiv = d.createElement("div"); 
        newdiv.innerHTML = `<div class="line1">
                <div class="label-cal">
                    <label class="ttll" for>Следующая панель</label>
                </div>
                <span class="nn">
                    <input class="num"  id="num${lastId++}" type="number" value="0" name=""> 
                    x
                    <input class="num" id="num${lastId++}" type="number" value="0" name="">
                    см
                </span>
                </div> `;
        
        document.getElementById("parentId").appendChild(newdiv);

        inputs = document.querySelectorAll('input');
        
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', calc2);
      }
            
    }
    

      var input = document.getElementById('num');
      var input2 = document.getElementById('num2');
      var input3 = document.getElementById('num3');
      var input4 = document.getElementById('num4');  
      var input5 = document.getElementById('num5');
      var input6 = document.getElementById('num6');
      var input7 = document.getElementById('num7');
     
    var inputs = calculator.querySelectorAll('input');
     

      var input8 = document.getElementById('is_html');
      var result = document.getElementById('res');
     
    
         
          for (var i = 0; i < inputs.length; i++) {
           inputs[i].addEventListener('change', calc);
          }

    function calc(){
      
       var price = 0;
        var price2 = 0;
      
        price += parseInt(input.value) * parseInt(input2.value);
        price += parseInt(input3.value) * parseInt(input4.value);
     

        price = parseInt(num5.value) + price;
        price = parseInt(num7.value) + price;
        price = parseInt(num6.value) + price;
        price += (is_html.checked === true) ? parseInt(is_html.value) : 0;

        price += parseInt(type.options[type.selectedIndex].value);
        price2 += parseInt(type2.options[type2.selectedIndex].value);
       
        res.innerHTML = price + price2;
        result.innerHTML = price2;
    
      } 

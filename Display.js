class Display {
        constructor(displayPreviousValue, displayCurrentValue) {
            this.displayCurrentValue = displayCurrentValue;
            this.displayPreviousValue= displayPreviousValue;
            this.calculator = new Calculator();
            this.operator = undefined;
            this.currentValue = '';
            this.previousValue = '';
            this.operators= {
                add:'+',
                subtract:'-',
                multiply:'*',
                dividir:'÷',
                dividir:'÷',
                percentage:'%',
               
               
                
            }

        }

        addNumber(number) {
            if(number ===',' && this.currentValue.includes(',')){
                return
            }
            this.currentValue = this.currentValue.toString() + number.toString();
          
            this.printValues();
        }
        compute(tipusOperator){
            if(tipusOperator === 'changesign'){
                 this.currentValue = -this.currentValue;
                this.printValues();
                return;
            }
           
            this.operator !== 'equal' && this.calculate();
            this.operator = tipusOperator;
            this.previousValue = this.currentValue || this.previousValue;
            this.currentValue = '';
            this.printValues();

        }
        printValues() {
            this.displayCurrentValue.textContent = this.currentValue;
            this.displayPreviousValue.textContent = `${this.previousValue} ${this.operators[this.operator]  || ''} `;
        }

        deleteAll(){
            this.currentValue = '';
            this.previousValue = '';
            this.operator = undefined
            this.printValues();
        }

        calculate(){
            const previousValue = parseFloat(this.previousValue)
            const currentValue = parseFloat(this.currentValue)

            if(isNaN(currentValue) || isNaN(previousValue)) {
                return
            }
            
            this.currentValue = this.calculator[this.operator](previousValue,currentValue);
            if(this.currentValue % 1 !== 0){
                this.currentValue = parseFloat(this.currentValue.toFixed(3));
            }
        }
      
}
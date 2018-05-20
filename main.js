
var _calcuGlobalObj = {
    totalNumber: '',
    numbers: [],
    number: '',
    Operators: [],
}

class Calculator
{
    static clear() {
        _calcuGlobalObj.totalNumber =''
        _calcuGlobalObj.numbers = []
        _calcuGlobalObj.number = ''
        _calcuGlobalObj.Operators = []

        Calculator.setInputedNumber(0)
    }

    static setInputedNumber(number) {
        number = String(number)
        if (number.length >= 10) {
            Calculator.clear()
            number = 'error'
        }

        document.getElementById('calculator__value').innerText = number
    }

    static setTotalNumber() {
        _calcuGlobalObj.totalNumber = _calcuGlobalObj.number
    }

    static setNumber(number) {
        _calcuGlobalObj.number = number
    }

    pushNumber(inputedNumber) {
        if (_calcuGlobalObj.totalNumber) {
            Calculator.clear()
        }
        if (_calcuGlobalObj.number.length < 9) {
            if (inputedNumber == 0 && !_calcuGlobalObj.number) {

            }else {
                _calcuGlobalObj.number += inputedNumber
                Calculator.setInputedNumber(_calcuGlobalObj.number)
            }
        }
    }

    percentNumber() {
        if (_calcuGlobalObj.number) {
            _calcuGlobalObj.number *= 0.01
            _calcuGlobalObj.number = _calcuGlobalObj.number.toFixed(5)
            Calculator.setInputedNumber(_calcuGlobalObj.number)
            Calculator.setTotalNumber()
        }        
    }

    changeSign() {
        if (_calcuGlobalObj.number) {
            if (_calcuGlobalObj.number.indexOf('-') == 0) {
                _calcuGlobalObj.number = _calcuGlobalObj.number.replace('-', '')    
            }else {
                _calcuGlobalObj.number = `-${_calcuGlobalObj.number}`
            }

            Calculator.setInputedNumber(_calcuGlobalObj.number)
            Calculator.setNumber(_calcuGlobalObj.number)
        }
    }

    addDecimalPoint() {
        if (!_calcuGlobalObj.number) {
            Calculator.setNumber('0')
        }

        if (_calcuGlobalObj.number.indexOf('.') >= 0) {
            
        }else {
            _calcuGlobalObj.number = `${_calcuGlobalObj.number}.`
        }
        Calculator.setInputedNumber(_calcuGlobalObj.number)
        Calculator.setNumber(_calcuGlobalObj.number)
    }

}

const clearInputed = () => {
    Calculator.clear()
}

const pushNumberInputed = () => {
    const calcu = new Calculator()
    calcu.pushNumber(event.target.innerText)
}

const percentNumberInputed = () => {
    const calcu = new Calculator()
    calcu.percentNumber()
}

const changeSignInputed = () => {
    const calcu = new Calculator()
    calcu.changeSign()
}

const addDecimalPointInputed = () => {
    const calcu = new Calculator()
    calcu.addDecimalPoint()
}











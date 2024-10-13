import { useState } from "react";

import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row, Column } from './styles';

function App() {

  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState();
  const [parentheses, setParentheses] = useState(false);

  // ------------------------------------------------------------------------------------------------------------------

  const handleAddNumber = (number) => {
    
    setCurrentNumber(prev => `${prev}${number}`);    
  }
  // ------------------------------------------------------------------------------------------------------------------

  const handleOnClear = () => {

    setCurrentNumber('');
    setFirstNumber('');
    setOperation('');
  }
  // ------------------------------------------------------------------------------------------------------------------

  const handleSum = () => {
      
    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('+');
    } else {
      const result = Number.parseFloat(firstNumber) + Number.parseFloat(currentNumber);
      setCurrentNumber(String(result));
      setOperation(''); 
    }
  }
  // ------------------------------------------------------------------------------------------------------------------

  const handleMinus = () => {
      
    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('-');
    } else {
      const result = Number.parseFloat(firstNumber) - Number.parseFloat(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');  
    }
  }
  // ------------------------------------------------------------------------------------------------------------------

  const handleMultiply = () => {
      
    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('x');
    } else {
      const result = Number.parseFloat(firstNumber) * Number.parseFloat(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');     
    }
  }
  // ------------------------------------------------------------------------------------------------------------------

  const handleDivide = () => {
      
    if(firstNumber === '') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('/');
    } else {
      const result = Number.parseFloat(firstNumber) / Number.parseFloat(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');   
    }
  }
  // ------------------------------------------------------------------------------------------------------------------

  const handleToggleValue = () => {
    
    const num = Number.parseFloat(currentNumber)

    if( num > 0 ) {
      setCurrentNumber(currentNumber * (-1))
    } else {
      setCurrentNumber(currentNumber / (-1))
    }
  }
  // ------------------------------------------------------------------------------------------------------------------

  const handleParentheses = () => {

      if (!parentheses) {
        setCurrentNumber(`${currentNumber}(`)
        setParentheses(true)
      } else {
        setCurrentNumber(`${currentNumber})`)
        setParentheses(false)
      }
  }

  // ------------------------------------------------------------------------------------------------------------------

  const handlePercentage = () => {

    const result = ((Number.parseFloat(firstNumber) / 100) * Number.parseFloat(currentNumber))

    switch(operation) {
    case '+':
        const sum = Number.parseFloat(firstNumber) + result;
        setCurrentNumber(sum);
        break;
    case '-':
      const subtract = Number.parseFloat(firstNumber) - result;
      setCurrentNumber(subtract);
      break;
    }
  }
  // ------------------------------------------------------------------------------------------------------------------

  const handleEquals = () => {

    if(firstNumber !== '' && operation !== '' && currentNumber !== '0') {
      
      switch(operation) {
        case '+':
          handleSum();
          break;
        case '-':
          handleMinus();
          break;
        case 'x':
          handleMultiply();
          break;
        case '/':
          handleDivide();
          break;
        default:
        break;
      }
    }
  }

  // ------------------------------------------------------------------------------------------------------------------

  return (
    <Container className="App">
      <Content>
        <Input value={currentNumber} /> 
        <Row>
          <Button label="AC" onClick={() => {handleOnClear()}}/>
          <Button label="( )" onClick={handleParentheses} />
          <Button label="%" onClick={handlePercentage} />
          <Button label="/" onClick={handleDivide}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => {handleAddNumber('7')}}/>
          <Button label="8" onClick={() => {handleAddNumber('8')}}/>
          <Button label="9" onClick={() => {handleAddNumber('9')}}/>
          <Button label="x" onClick={handleMultiply}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => {handleAddNumber('4')}}/>
          <Button label="5" onClick={() => {handleAddNumber('5')}}/>
          <Button label="6" onClick={() => {handleAddNumber('6')}}/>
          <Button label="-" onClick={handleMinus}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => {handleAddNumber('1')}}/>
          <Button label="2" onClick={() => {handleAddNumber('2')}}/>
          <Button label="3" onClick={() => {handleAddNumber('3')}}/>
          <Button label="+" onClick={handleSum} />
        </Row>
        <Row>
          <Button label="+/-" onClick={handleToggleValue}/>
          <Button label="0" onClick={() => {handleAddNumber('0')}}/>
          <Button label="," onClick={() => {handleAddNumber('.')}}/>
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;

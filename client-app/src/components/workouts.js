import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

function WorkOuts() {
  const [ name, setName ] = useState( 'Karthik' );
  const [ message, setMessage ] = useState( 'Hey, How are you?' );
  const [ agree, setAgree ] = useState(true);
  const [ moral, setMoral ] = useState('Good');
  const [ status, setStatus ] = useState('Happy')
  const [ mood, setMood ] = useState(7)

  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Form Inputs</th>
            <th>Elements</th>
            <th>Outputs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Input Box</td>
            <td><input type="text" value={name} onChange={ (e) => setName(e.target.value) } /></td>
            <td>{ name }</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Text area</td>
            <td>
              <textarea  value={message} onChange={ (e) => setMessage(e.target.value) }></textarea>
            </td>
            <td>{message}</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Checkbox</td>
            <td>
              <input type='checkbox' checked={agree} onChange={ () => setAgree(!agree) } /> Hello
            </td>
            <td>{ agree ? 'I am active' : 'I am not' }</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Radio</td>
            <td>
              <input type="radio" name="moral" checked={moral === 'Good'}  onChange={ (e) => setMoral(e.target.value) }  value="Good" /> Good
              <input type="radio" name="moral" checked={moral === 'Bad'} onChange={ (e) => setMoral(e.target.value) } value="Bad" /> Bad
            </td>
            <td>{moral}</td>
          </tr>

          <tr>
            <td>5</td>
            <td>Select</td>
            <td>
              <select onChange={ (e) => setStatus(e.target.value) } value={status}>
                <option option="Happy">Happy</option>
                <option option="Most Happy">Most Happy</option>
                <option option="Being Happy">Being Happy</option>
              </select>
            </td>
            <td>{status}</td>
          </tr>

          <tr>
            <td>6</td>
            <td>Range</td>
            <td>
              <input type="range" value={mood} onChange={ (e) => setMood(e.target.value) } name="points" min="5" step="0.1" max="10"></input>
            </td>
            <td>{mood}</td>
          </tr>

        </tbody>
      </Table>  
    </div>
  );
}

export default WorkOuts;
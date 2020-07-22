import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import BarChart from './components/BarChart';

function FactorRange({ index, min, max, step, value, onChange }) {
  return(
    <div>
      <input type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={ e => onChange(e.target.value, index) }
      />

      <p>{value}</p>
    </div>
  )
}

function App() {
  const [ factors, setFactors ] = useState([])
  const [ chart, setChart ] = useState({})

  useEffect(() => {
    let gotFactors = [
      {"factor_name": "Sex", "range": ["male", "female"], "interval": null, "type": "categorical"},
      {"factor_name": "Housing", "range": ["own", "free", "rent"], "interval": null, "type": "categorical"},
      {"factor_name": "Savings accounts", "range": ["no_inf", "little", "quite rich", "rich", "moderate"], "interval": null, "type": "categorical"},
      {"factor_name": "Checking account", "range": ["little", "moderate", "no_inf", "rich"], "interval": null, "type": "categorical"},
      {"factor_name": "Purpose", "range": ["radio/TV", "education", "furniture/equipment", "car", "business", "domestic appliances", "repairs", "vacation/others"], "interval": null, "type": "categorical"},
      {"factor_name": "Job", "range": ["unskilled and non-resident", "unskilled and resident", "skilled", "highly skilled"], "interval": null, "type": "categorical"},
      {"factor_name": "Credit amount", "range": [250, 18424], "interval": 0.5, "type": "continous"},
      {"factor_name": "Age", "range": [19, 75], "interval": 1, "type": "categorical"},
      {"factor_name": "Duration in Months", "range": [4, 72], "interval": 1, "type": "categorical"}
    ]

    // The response data doesn't have "value"
    // key so using map function to create a key and 
    // setting the initial value from range first index
    gotFactors = gotFactors.map((factor) => {
      factor['value'] = factor.range[0]
      return factor
    })  

    setFactors(gotFactors)

  }, [])

  const updateFactor = (newValue, index) => {
    const newfactors = factors.map((factor, i) => {
      if(i  === index) {
        factor.value = newValue
      }
      return factor
    })

    setFactors(newfactors)
  }

  const convertToQueryParams = (factors) => {
    var queryObj = {}
    for(var i = 0; i < factors.length; i++) {
      for(var key in factors[i]) {
        queryObj[factors[i].factor_name] = factors[i].value
      }
    }

    return Object.keys(queryObj).map(key => `${key}=${queryObj[key]}`).join('&')
  }

  const handleSubmit = () => {
      fetch("/predict?"+convertToQueryParams(factors))
        .then(res => res.json()).then(result => {
          
          setChart(result)
        })
  }

  // const data = [
  //   {xAxis: 'Good', yAxis: 0.3},
  //   {xAxis: 'Bad', yAxis: 0.9}
  // ];
  
  return (
    <div>
      <Container>
      <Row>
        <Col>
          <Button onClick={ () => handleSubmit() } >Check</Button>

          {
            factors.map((factor, index) => {
              return (
                <div key={index}>
                  <h5>{factor.factor_name}</h5>
                  {
                    factor.interval != null ? (
                      <FactorRange
                        index={index}
                        min={factor.range[0]}
                        max={factor.range[1]}
                        step={factor.interval}
                        value={parseInt(factor.value)}
                        onChange={ updateFactor }
                      >
                      </FactorRange>
                    ) : (
                      <select value={factor.value} onChange={ (e) => updateFactor(e.target.value, index) }>
                        {
                          factor.range.map((range, idx) => {
                            return (
                            <option key={idx} option={range} >{range}</option>
                            )
                          })
                        }
                      </select>
                    )
                  }
                </div>
              )
            })
          }
          <Button onClick={ () => handleSubmit() } >Check</Button>
        </Col>
        <Col>
          <BarChart data={chart} />
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default App;

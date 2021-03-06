import React from 'react';
import colors from '../../styles/colors';
import '../../styles/style.scss';
import { Datepicker } from './Datepicker';

export default {
  title: 'Datepicker',
  component: Datepicker
};

// Dropdown Base
export const DatepickerBase = () => {

  const [monthOpen, setOpen] = React.useState(false);
  const [selectedMoth, setMonth] = React.useState('Months');
  
  return (
        <Datepicker cls="datepicker-container">  
          <label className="dropdown-label">Date picker label</label>
          <div className="fields-container">
              <div className="day">
                  <input type="number" placeholder="00" className="day-input" />
              </div>
              <div className="month">
                <div className="selector" onClick={() => monthOpen ? setOpen(false) : setOpen(true)}>
                  <span>{selectedMoth}</span>
                  <svg className="icon-d" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="months-container" style={{ display: monthOpen ? 'flex' : 'none'}}>
                  <div className="month" onClick={() => {
                    setMonth('January')
                    setOpen(false)
                    }}>January</div>
                  <div className="month" onClick={() => {
                    setMonth('February')
                    setOpen(false)
                    }}>February</div>
                  <div className="month" onClick={() => {
                    setMonth('March')
                    setOpen(false)
                    }}>March</div>
                  <div className="month" onClick={() => {
                    setMonth('April')
                    setOpen(false)
                    }}>April</div>
                  <div className="month" onClick={() => {
                    setMonth('May')
                    setOpen(false)
                    }}>May</div>
                  <div className="month" onClick={() => {
                    setMonth('June')
                    setOpen(false)
                    }}>June</div>
                  <div className="month" onClick={() => {
                    setMonth('July')
                    setOpen(false)
                    }}>July</div>
                  <div className="month" onClick={() => {
                    setMonth('August')
                    setOpen(false)
                    }}>August</div>
                  <div className="month" onClick={() => {
                    setMonth('September')
                    setOpen(false)
                    }}>September</div>
                  <div className="month" onClick={() => {
                    setMonth('October')
                    setOpen(false)
                    }}>October</div>
                  <div className="month" onClick={() => {
                    setMonth('November')
                    setOpen(false)
                    }}>November</div>
                  <div className="month" onClick={() => {
                    setMonth('December')
                    setOpen(false)
                    }}>December</div>
                </div>
              </div>
              <div className="year">
                <span>20</span>
                <input type="text" placeholder="00" />
              </div>
          </div>
        </Datepicker>
)};

// Dropdown Error
export const DatepickerError = () => (
  <Datepicker cls="datepicker-container">  
    <label className="dropdown-label">Date picker label</label>
    <div className="fields-container">
        <div className="day error">
            <input type="number" placeholder="00" className="day-input" />
        </div>
        <div className="month error">
          <div className="selector">
            <span>Months</span>
            <svg className="icon-d" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke={colors.$gray40} stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
        </div>
        <div className="year error">
          <span>20</span>
          <input type="text" placeholder="00" />
          <small className="error-text" style={{ top: '110%'}}>Invalid date</small>
        </div>
    </div>
  </Datepicker>
);

// Dropdown Disabled
export const DatepickerDisabled = () => (
  <Datepicker cls="datepicker-container">  
    <label className="dropdown-label disabled-txt">Date picker label</label>
    <div className="fields-container">
        <div className="day">
            <input type="number" placeholder="00" className="day-input" readOnly/>
        </div>
        <div className="month">
          <div className="selector">
            <span className="disabled-txt">Months</span>
            <svg className="icon-d" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke={colors.$gray70} stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
        </div>
        <div className="year">
          <span className="disabled-txt">20</span>
          <input type="text" placeholder="00" readOnly={true}/>
        </div>
    </div>
  </Datepicker>
);
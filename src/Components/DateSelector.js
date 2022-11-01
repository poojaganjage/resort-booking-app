import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateSelector({checkinDate, checkoutDate, totalDays, invalidRange, onCheckInChange, onCheckOutChange}) {
    console.log(totalDays);
    console.log(invalidRange);
    return (
    <div>
        <h2>Date Range</h2>
        <DatePicker 
            selected={checkinDate}
            onChange={onCheckInChange}
        />
        <br />
        <br />
        <DatePicker 
            selected={checkoutDate}
            onChange={onCheckOutChange}
        />
        <span>
            {totalDays} Nights
        </span>
        {
            invalidRange && (<p>Invalid Date Range!!!</p>)
        }
    </div>
  );
}
DateSelector.PropsTypes = {
    checkinDate: PropTypes.instanceOf(Date).isRequired,
    checkoutDate: PropTypes.instanceOf(Date).isRequired,
    onCheckInChange: PropTypes.func.isRequired,
    onCheckOutChange: PropTypes.func.isRequired,
    totalDays: PropTypes.number.isRequired
}
export default DateSelector;

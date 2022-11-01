import React from 'react';

export const Select = ({selectedValue, options, onDataChange}) => {
    return (
        // <select onChange={(e) => onDataChange(e.target.value)} value={selectedValue}></select>
        <select onChange={({target: {value}}) => onDataChange(value)} value={selectedValue}>
            {options.map((option) => {
                console.log(option);
                return  (<option key={option.name} value={option.value}>
                            {option.name}
                        </option>)
            })}
        </select>
    );
}

const occupantsOptions = [
    {name: '1', value: '1'},
    {name: '2', value: '2'},
    {name: '3', value: '3'},
    {name: '4', value: '4'}
];

const roomTypeOptions = [
    {name: 'Standard', value: 'Standard'},
    {name: 'Delux', value: 'Delux'}
];

function RoomDetails({occupants, roomType, onOccupantsChange, onRoomTypeChange}) {
  return (
    <div>
        <h2>Room Details</h2>
        <label>Room Type: </label>
        <Select 
            selectedValue={roomType} 
            options={roomTypeOptions} 
            onDataChange={onRoomTypeChange} 
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label>Occupants: </label>
        <Select 
            selectedValue={occupants} 
            options={occupantsOptions}
            onDataChange={onOccupantsChange} 
        />
    </div>
  );
}
export default RoomDetails;

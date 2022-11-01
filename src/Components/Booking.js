import React, {useState, useEffect} from 'react';
import Billing from './Billing';
import DateSelector from './DateSelector';
import RoomDetails from './RoomDetails';

const _MS_PER_DAY = 24 * 60 * 60 * 1000; // Convert single day to milli seconds.
function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function Booking() {
  const today = new Date();
  const checkout = new Date();
  checkout.setDate(today.getDate() +1); // Minimum one night should be there.

  const [checkinDate, setCheckinDate] = useState(today);
  const [checkoutDate, setCheckoutDate] = useState(checkout);
  const [occupants, setOccupants] = useState(1);
  const [roomType, setRoomType] = useState('Standard');
  const [totalDays, setTotalDays] = useState(dateDiffInDays(checkinDate, checkoutDate));
  const [invalidRange, setInvalidRange] = useState(false);

  useEffect(() => {
    setTotalDays(dateDiffInDays(checkinDate, checkoutDate));
    setInvalidRange(totalDays <= 0 || totalDays >= 20);
  });

  const onCheckInChange = (checkinDate) => {
    setCheckinDate(checkinDate);
  }

  const onCheckOutChange = (checkoutDate) => {
    setCheckoutDate(checkoutDate);
  }

  const onOccupantsChange = (occupants) => {
    setOccupants(occupants);
  }

  const onRoomTypeChange = (roomType) => {
    setRoomType(roomType);
  }
  return (
    <div>
      <h2>Booking</h2>
      <DateSelector 
        checkinDate={checkinDate} 
        checkoutDate={checkoutDate}
        totalDays={totalDays}
        invalidRange={invalidRange}
        onCheckInChange={onCheckInChange}
        onCheckOutChange={onCheckOutChange}
      />
      <RoomDetails 
        occupants={occupants}
        roomType={roomType}
        onOccupantsChange={onOccupantsChange}
        onRoomTypeChange={onRoomTypeChange}
      />
      {
        !invalidRange && (<Billing 
          occupants={occupants}
          roomType={roomType}
          totalDays={totalDays}
        />)
      }
    </div>
  );
}
export default Booking;

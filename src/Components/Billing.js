import React, {useState, useEffect} from 'react';

function Billing({occupants, roomType, totalDays}) {
  const [roomCharge, setRoomCharge] = useState(0);
  const [occupantCharge, setOccupantCharge] = useState(0);
  const [totalRoomCharges, setTotalRoomCharges] = useState(0);
  const [totalRoomOccupantCharges, setTotalRoomOccupantCharges] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [afterTax, setAfterTax] = useState(0);

  useEffect(() => {
    setRoomCharge(roomType == 'Standard' ? 2000 : 4000);
    setOccupantCharge(occupants == 1 ? 0 : (occupants - 1) * 200);
    setTotalRoomCharges(totalDays * roomCharge);
    setTotalRoomOccupantCharges(totalDays * occupantCharge);
    setDiscount(totalDays >= 5 ? 15 : 0);
    setGrandTotal(Math.ceil(totalRoomCharges - (totalRoomCharges - discount) / 100.0));
    setAfterTax((totalRoomOccupantCharges + grandTotal) * 1.18);
  });
  return (
    <div>
        <h2>Billing</h2>
        <table>
            <tbody>
                <tr>
                    <td>Room Type</td>
                    <td>{roomType}</td>
                </tr>
                <tr>
                    <td>Room Charges</td>
                    <td>{roomCharge} Rs</td>
                </tr>
                <tr>
                    <td>No. of Nights</td>
                    <td>{totalDays}</td>
                </tr>
                <tr>
                    <td>Total Room Charges</td>
                    <td>{totalRoomCharges} Rs</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td>{discount}</td>
                </tr>
                <tr>
                    <td>Grand Total with Discount</td>
                    <td>{grandTotal} Rs</td>
                </tr>
                <tr>
                    <td>No. of Occupants</td>
                    <td>{occupants}</td>
                </tr>
                <tr>
                    <td>Occupant Charge</td>
                    <td>{occupantCharge} Rs per day</td>
                </tr>
                <tr>
                    <td>Total Room Occupant Charges</td>
                    <td>{totalRoomOccupantCharges} Rs</td>
                </tr>
                <tr>
                    <td>After Taxes</td>
                    <td>{afterTax} Rs</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}
export default Billing;

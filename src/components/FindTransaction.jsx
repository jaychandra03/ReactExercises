import React from "react";
import { useState } from "react";

const FindTransaction=()=>{
    
    const [orderId, setOrderId] = useState('');

  const handleSearch = () => {
    // Logic to fetch transaction details based on orderId
    console.log(`Searching for order ID: ${orderId}`);
  };
    
    return(
            <div className="find-transaction">
                console.log("clicked on find transaction")
                <h2>Find a Transaction</h2>
                <input 
                type="text"
                placeholder="Enter order ID"
                value={orderId}
                onChange={(e)=>setOrderId(e.target.value)}
                className="search-input"/>
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>

    )
}
export default FindTransaction;
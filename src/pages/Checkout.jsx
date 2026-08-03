import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import CartContext from "../context/CartContext.jsx"
import OrderSummary from "../components/OrderSummary";

function Checkout(){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("cod");

    const navigate = useNavigate();

    const { clearCart } = useContext(CartContext);

    function handlePlaceOrder(){
        clearCart();
        navigate("/order-success");
    }


    return(
        <div className="checkout-container">
            <h1>Checkout</h1>

            <div className="checkout-form">
                
                <h3>Contact Information</h3>

                <div className="form-block">
                    <label>Full Name: 
                        <input 
                            type="text" 
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </label>

                    <label>Email: 
                        <input 
                            type="email" 
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label>Phone Number: 
                        <input 
                            type="tel" 
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>
                </div>
                

                <h3>Shipping Address</h3>

                <div className="form-block">
                    <label>Address: 
                        <input 
                            type="text" 
                            placeholder="Enter your street addess"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>

                    <label>City: 
                        <input 
                            type="text" 
                            placeholder="Enter your city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </label>

                    <label>State: 
                        <input 
                            type="text" 
                            placeholder="Enter your state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </label>

                    <label>Pincode: 
                        <input 
                            type="text" 
                            placeholder="Enter your pincode"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                        />
                    </label>
                </div>
                

                <h3>Payment Method</h3>

                <div className="form-block-payment">
                    <label>
                        <input 
                            type="radio" 
                            name="payment" 
                            value="cod"
                            checked={paymentMethod === "cod"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />Cash on Delivery
                    </label>

                    <label>
                        <input 
                            type="radio" 
                            name="payment" 
                            value="card"
                            checked={paymentMethod === "card"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />Credit/Debit Card
                    </label>

                    <label>
                        <input 
                            type="radio" 
                            name="payment" 
                            value="upi"
                            checked={paymentMethod === "upi"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />UPI
                    </label>
                </div>
                
            </div>

            <OrderSummary />

            <div className="order-btn-container">

                    <button 
                        className="order-btn"
                        onClick={handlePlaceOrder}
                    >Place Order</button>

            </div>
        </div>
    )

}
export default Checkout
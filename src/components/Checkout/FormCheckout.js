// import { Grid, Item } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import { amber, green, grey, lightGreen } from 'material-ui-colors';
import bg from '../../assets/img/bg1.png'
import person from '../../assets/img/person1.png'
import MenuLateral from '../RegisterGuide/MenuLateral';

function FormCheckout() {
  return (
    <>
    <div class="row">
     <div class="column">
     <div class="container">
     <div class="frame">
       <MenuLateral></MenuLateral>
      
     </div>
   </div>
     </div>
     <div class="column">
     <div class="container">
     <div class="frame1">
     <article class="card">
	<div class="container">
		<div class="card-title">
			<h2>Formulario de Pagos</h2>
		</div>
		<div class="card-body">
    <div class="card-row">
          <span class="visa"></span>
          <span class="mastercard"></span>
          <span class="amex"></span>
          <span class="discover"></span>
      </div>
			<div class="payment-type">
				<h4>Escoger un metodo de Pago</h4>
				<div class="types flex justify-space-between">
					<div class="type selected">
						<div class="logo">
							<i class="far fa-credit-card"></i>
						</div>
						<div class="text">
							<p>Pagar con Credit Card</p>
						</div>
					</div>
					<div class="type">
						<div class="logo">
							<i class="fab fa-paypal"></i>
						</div>
						<div class="text">
							<p>Pagar con PayPal</p>
						</div>
					</div>
					<div class="type">
						<div class="logo">
							<i class="fab fa-amazon"></i>
						</div>
						<div class="text">
							<p>Pagar con Amazon</p>
						</div>
					</div>
				</div>
			</div>
			<div class="payment-info flex justify-space-between">
				<div class="column billing">
					<div class="title">
						<div class="num">1</div>
						<h4>Informacion de Usuario</h4>
					</div>
					<div class="field full">
						<label for="name">Full Name</label>
						<input id="name" type="text" placeholder="Full Name"></input>
					</div>
					<div class="field full">
						<label for="address">Billing Address</label>
						<input id="address" type="text" placeholder="Billing Address"></input>
					</div>
					<div class="flex justify-space-between">
						<div class="field half">
							<label for="city">City</label>
							<input id="city" type="text" placeholder="City"></input>
						</div>
						<div class="field half">
							<label for="state">State</label>
							<input id="state" type="text" placeholder="State"></input>
						</div>
					</div>
					<div class="field full">
						<label for="zip">Zip</label>
						<input id="zip" type="text" placeholder="Zip"></input>
					</div>
				</div>
				<div class="column shipping">
					<div class="title">
						<div class="num">2</div>
						<h4>Informacion Credit Card </h4>
					</div>
					<div class="field full">
						<label for="name">Cardholder Name</label>
						<input id="name" type="text" placeholder="Full Name"></input>
					</div>
					<div class="field full">
						<label for="address">Card Number</label>
						<input id="address" type="text" placeholder="1234-5678-9012-3456"></input>
					</div>
					<div class="flex justify-space-between">
						<div class="field half">
							<label for="city">Exp. Month</label>
							<input id="city" type="text" placeholder="12"></input>
						</div>
						<div class="field half">
							<label for="state">Exp. Year</label>
							<input id="state" type="text" placeholder="19"></input>
						</div>
					</div>
					<div class="field full">
						<label for="zip">CVC Number</label>
						<input id="zip" type="text" placeholder="468"></input>
					</div>
				</div>
			</div>
		</div>
		<div class="card-actions flex justify-space-between">
			<div class="flex-start">
				<button class="button button-secondary">Return to Store</button>
			</div>
			<div class="flex-end">
				<button class="button button-link">Back to Shipping</button>
				<button class="button button-primary">Proceed</button>
			</div>
		</div>
	</div>
</article>
     </div>
     </div>
     </div>
   </div>
       </>
  );
}

export default FormCheckout;


import { NavbarBottom } from "./NavbarBottom";
import { Link } from "react-router-dom";



export const Settings = () => {




	return (

		<div >

			<div className="casual-header-div">
				<h4 className="headline">Einstellungen</h4>
			</ div>






			<div className="casual-menu">
				<br />
				<h3><strong>Privatsphäre:</strong></h3><br />
				<p><strong>Abstimmung:</strong> </p>
				<div className="btn-group">
					<button type="button" className="btn btn-success left-menu"><strong>Öffentlich</strong></button>

					<button type="button" className="btn btn-success middle-menu">Anonym</button>
					<button type="button" className="btn btn-success right-menu">Individuell</button>
				</div>
				<br />

				<br />
				<p><strong>Spendenzusagen:</strong>
				</p>
				<div className="btn-group">
					<button type="button" className="btn btn-success left-menu"><strong>Öffentlich</strong></button>

					<button type="button" className="btn btn-success middle-menu">Anonym</button>
					<button type="button" className="btn btn-success right-menu">Individuell</button>
				</div>
				<br />
				<br />

				<p><strong>Spenden:</strong>
				</p>
				<div className="btn-group">
					<button type="button" className="btn btn-success left-menu"><strong>Öffentlich</strong></button>


					<button type="button" className="btn btn-success middle-menu">Anonym</button>
					<button type="button" className="btn btn-success right-menu">Individuell</button>
				</div> <br /><br />
				<div className="horzontal-rule-general">
					<hr />

				</div>

				<br />

				<h3><strong>Wohnort: </strong></h3> <img src={require('./img/edit.svg')} />
				<div className="horzontal-rule-general">
					<hr />

				</div>
				<br />
				<h3><strong>Bezahlmethoden: </strong></h3>

				<h5>PayPal</h5>
				<h5>Karte</h5>
				<h5>Sofort-Überweisung</h5>
				<h5>Krypto</h5>

				<br />
				<div className="horzontal-rule-general">
					<hr />

				</div>

				<Link to="/teilen"> <button
					className="btn btn-success btn-lg button border-black"  >Freunde
					einladen 👥</button> </Link> <br /> <br />
				<a href="https://lokalpetition.de/fragen/">  <button
					className="btn btn-success btn-lg button border-black" >Fragen❔</button> </a> <br /> <br />
				<a href="https://lokalpetition.de/kontakt/"> <button
					className="btn btn-success btn-lg button border-black"  >Kontaktiere uns 📩</button> </a>
				<br /> <br />
				<a href="https://github.com/LocalPetition-Developer/LocalPetition"> <button
					className="btn btn-success btn-lg button border-black"  >Code 💻</button> </a>
				<br /> <br />
				<a href="https://www.paypal.com/donate/?hosted_button_id=D6VXHJ7G7RCYU"> <button
					className="btn btn-success btn-lg button border-black"  >Unterstütze uns mit einer Spende! 💸</button> </a>
				<div className="horzontal-rule-general">
					<hr />
					
				</div>
				<br />



				<p > <Link className="black" to="/impressum"><strong> Impressum </strong> </Link></p>
				<p> <Link className="black" to="/datenschutz"><strong>Datenschutzerklärung</strong></Link></p>




			</div>

			<NavbarBottom classstart="under-navitem-unselected" classsearch="under-navitem-unselected" classactivity="under-navitem-unselected" classprofile="under-navitem-unselected" />

		</div>
	)

}

import { NavbarBottom } from "./NavbarBottom";
import { Link } from "react-router-dom";

import * as React from 'react';

import FormControl from '@mui/material/FormControl';


import InputLabel from '@mui/material/InputLabel';

import InputAdornment from '@mui/material/InputAdornment';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import TextField from '@mui/material/TextField';

import OutlinedInput from '@mui/material/OutlinedInput';

export const YourProfile = () => {


	const [name1, setName1] = React.useState('');

	const [name2, setName2] = React.useState('');

	const [name3, setName3] = React.useState('');

	const [name4, setName4] = React.useState('');

	const handleChange1 = (event) => {
		setName1(event.target.value);
	};
	const handleChange2 = (event) => {
		setName2(event.target.value);
	};
	const handleChange3 = (event) => {
		setName3(event.target.value);
	};
	const handleChange4 = (event) => {
		setName4(event.target.value);
	};
	const theme = createTheme({
		palette: {
			success: {

				main: "#28a745",
			},

		},
	});


	return (


		<div >

			<div className="casual-header-div">
				<Link to="/einstellungen"   >  <img className="settings-image" src={require('./img/settings.svg')} />  </Link>
				<h4 className="headline headline-profilesettings"> Dein Profil </h4>
			</div>




			<div className="casual-menu">
				<br />
				<ThemeProvider theme={theme}>

					<FormControl>
						<InputLabel color="success" htmlFor="component-outlined">Name</InputLabel>
						<OutlinedInput
							color="success"
							id="component-outlined"
							value={name1}
							onChange={handleChange1}
							label="Name"
							sx={{ minWidth: "200px" }}
						/>
					</FormControl>
					<br />
					<br />

					<img src={require('./img/profile.png')} className="profile-picture-fullscreen" />


					<br />
					<Link to=""><img className="margin-bottom" src={require('./img/edit.svg')} /></Link>
					<br />
					<br />
					<div>
						<TextField

							id="outlined-multiline-static"
							label="Beschreibung"
							multiline
							rows={4}
							sx={{ minWidth: "250px" }}
							color="success"
							

						/>
						<br />
						<br />
						<TextField
							label="Link"
							size="small"
							id="outlined-start-adornment"
							sx={{ m: 1, width: '18ch' }}
							color="success"
							InputProps={{
								startAdornment: <InputAdornment position="start"><img className="link-your-profile" src={require('./img/link.svg')} /></InputAdornment>,
							}}
						/>

						<br />
						<TextField
							label="Standort"
							size="small"
							id="outlined-start-adornment"
							sx={{ m: 1, width: '18ch' }}
							color="success"
							InputProps={{
								startAdornment: <InputAdornment position="start"><img className="location-marker-your-profile" src={require('./img/location-marker-profile.svg')} /></InputAdornment>,
							}}
						/>
					</div>
				</ThemeProvider>
			</div>
			<NavbarBottom classstart="under-navitem-unselected" classsearch="under-navitem-unselected" classactivity="under-navitem-unselected" classprofile="under-navitem-selected" />

		</div>
	)

}
<script>
	let email = '';
	let name = '';
	let lastName = '';
	let gender = '';
	let username = '';
	let password = '';

	function register() {
		// Lógica para procesar el envío del formulario
		// console.log('Name: ' + name);
		// console.log('Last Name: ' + lastName);
		// console.log('Gender: ' + gender);
		// console.log('Username: ' + username)
		// console.log('Email: ' + email);
		// console.log('Password: ' + password);
		const data = {
			name: name,
			lastName: lastName,
			gender: gender,
			username: username,
			email: email,
			password: password
		}
		fetch('http://localhost:5000/users/', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(function (response) {
				console.log(response);
            })

	}
</script>

<div class="container">
	<h2>Registration</h2>

	<form on:submit|preventDefault={register}>
		<div class="form-group">
			<label class="form-label" for="name">Namse:</label>
			<input class="form-input" type="text" id="name" bind:value={name} required />
		</div>

		<div class="form-group">
			<label class="form-label" for="lastName">Last Name:</label>
			<input class="form-input" type="text" id="lastName" bind:value={lastName} required />
		</div>

		<div class="form-group">
			<label class="form-label" for="gender">Gender:</label>
			<select id="gender" class="form-select" bind:value={gender} required>
				<option hidden disabled selected>Select a Gender</option>
				<option>Femenino</option>
				<option>Masculino</option>
			</select> 
		</div>

		<div class="form-group">
			<label class="form-label" for="username">Username:</label>
			<input class="form-input" type="text" id="username" bind:value={username} required />
		</div>

		<div class="form-group">
			<label class="form-label" for="email">Email:</label>
			<input class="form-input" type="email" id="email" bind:value={email} required />
		</div>

		<div class="form-group">
			<label class="form-label" for="password">Password:</label>
			<input class="form-input" type="password" id="password" bind:value={password} required />
		</div>
		<button class="form-button" type="submit">Submit</button>
	</form>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

	.container {
		font-family: 'Roboto', sans-serif;
		max-width: 400px;
		margin: 0 auto;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 4px;
		background-color: #f9f9f9;
	}

	.form-group {
		margin-bottom: 20px;
	}

	.form-label {
		display: block;
		font-weight: bold;
		margin-bottom: 5px;
	}

	.form-input, .form-select {
		width: 90%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		transition: border-color 0.3s ease;
	}
	.form-select {
		width:95%
	}

	.form-input:focus {
		outline: none;
		border-color: #4B97A5;
	}

	.form-button {
		width: 96%;
		padding: 10px;
		background-color: #BFFBFF;
		border: solid 1px #000000;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.form-button:hover {
		background-color: #4B97A5;
	}
</style>
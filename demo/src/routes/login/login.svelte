<script>
	let username = '';
	let password = '';

	function handleSubmit() {
		// Lógica para procesar el envío del formulario
		console.log('Username:', username);
		console.log('Password:', password);
	}
</script>

<div class="container">
	<h2>Login</h2>

	<form on:submit|preventDefault={handleSubmit}>
		<div class="form-group">
			<label class="form-label" for="username">Username:</label>
			<input class="form-input" type="text" id="username" bind:value={username} required />
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

	.form-input {
		width: 90%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		transition: border-color 0.3s ease;
	}

	.form-input:focus {
		outline: none;
		border-color: #007bff;
	}

	.form-button {
		width: 100%;
		padding: 10px;
		background-color: #007bff;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.form-button:hover {
		background-color: #0056b3;
	}
</style>

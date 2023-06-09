<script>
</script>

<body>
	<div class="container">
		<form>
			<h2>Registration</h2>
			<div class="form-pregunta">
				<label for="email">Email:</label>
				<input type="email" name="email" /> <br /> <br />
			</div>

			<div class="form-pregunta">
				<label for="name">Name:</label>
				<input type="text" name="name" /> <br /> <br />
			</div>

			<div class="form-pregunta">
				<label for="lastName">Last Name:</label>
				<input type="text" name="lastName" /> <br /> <br />
			</div>

			<div class="form-pregunta">
				<label for="password">Password:</label>
				<input type="password" name="passwordConfirmation" /> <br /> <br />
			</div>

			<div class="form-pregunta">
				<label for="Gender">Gender:</label>
				<select id="gender" class="gender-form">
					<option hidden disabled selected>Select a Gender</option>
					<option>Femenino</option>
					<option>Masculino</option>
				</select> <br /> <br />
			</div>
			<button class="crear-cuenta">Submit</button>
		</form>
	</div>
</body>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
	body {
		display: flex;
		justify-content: center;
        width: 100%;
		font-family: 'Roboto', sans-serif;
		font-size: 20px;
	}
	.container {
		box-sizing: border-box;
        padding-left: 2%;
		padding-bottom: 1%;
		display: flex;
		width: 30%;
        background-color: #f9f9f9;
        border-radius: 4px;
        border: solid 1px black;
	}
	label {
		padding-bottom: 3%;
        display: block;
	}
    input, select {
        border-radius: 6px;
        padding: 4%;
    }
    input {
        padding-right: 160%;
    }
	.crear-cuenta {
		background-color: #fe8e3c;
		border: solid 2px #000000;
		margin-top: 4%;
		padding-top: 3%;
		padding-bottom: 3%;
		padding-left: 118%;
		padding-right: 118%;
		border-radius: 5px;
		cursor: pointer;
	}
	.gender-form {
		padding-right: 190%;
	}
</style>

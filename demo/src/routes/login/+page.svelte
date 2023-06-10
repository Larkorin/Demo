<script>
	let username = '';
	let password = '';

	function handleSubmit() {
		// Lógica para procesar el envío del formulario
		console.log('Username:', username);
		console.log('Password:', password);
	}
</script>

<div class="box">
	<div class="container">
		<h2>Login</h2>
		<form on:submit|preventDefault={handleSubmit}>
			<div class="form-group">
				<label class="form-label" for="username">Username</label>
				<input class="form-input" type="text" id="username" placeholder="Username" bind:value={username} required />
			</div>
			<div class="form-group">
				<label class="form-label" for="password">Password</label>
				<input class="form-input" type="password" id="password" placeholder="Password" bind:value={password} required />
			</div>
			<button class="form-button" type="submit">Submit</button>
		</form>
	</div>
</div>

<style lang=scss>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&display=swap');

	$primary: #006471;
  $secondary: #4B97A5;
  $complementary: #FE8E3C;

	* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
		font-family: 'Roboto Mono', monospace;
  }

	h2 {
		margin-bottom: 30px;
	}

	.container {
		width: 400px;
		margin: 0 auto;
		padding: 20px;
		border: 3px solid black;
		border-radius: 4px;
		background-color: #f9f9f9;
	}

	.box {
    height: 650px;
    display: flex;
    align-items: center;
    justify-content: center;

    & {
      align-self: center;
    }
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
		padding: 20px;
		border: 3px solid black;
		border-radius: 7px;
		transition: border-color 0.3s ease;

		&:focus {
			outline: none;
			background: linear-gradient(white, white) padding-box,
              		linear-gradient(to right, $primary, $secondary,$complementary) border-box;
  		border-radius: 7px;
  		border: 3px solid transparent;
		}
	}

	input:-webkit-autofill:focus {
		border: 3px solid black;
		background: white;
	}

	.form-button {
    padding: 16px 32px;
		margin-top: 10px;
		border: 3px solid black;
		border-radius: 8px;
		background-color: white;
		cursor: pointer;
		transition: background-color 0.3s ease;

		&:hover {
			box-shadow: 3px 3px black;
		}
	}
</style>

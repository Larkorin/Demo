<script>
	let colors = [
		"#006471",
		"#4B97A5",
		"#FE8E3C"
	]
	let deg = 45
	
	$: degString = `${deg}deg`
</script>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
	</head>
	<body
	style="
		--deg: {degString};
		--gradient-1:{colors[0]};
		--gradient-2:{colors[1]};
		--gradient-2:{colors[2]};
	">
  <h1>
    Welcome
  </h1>
  <div>
    <button class="button-style">Log in</button>
    <button class="button-style">Sign in</button>
  </div>
	</body>
</html>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&display=swap');
  
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	body {
		background: linear-gradient(var(--deg),var(--gradient-1), var(--gradient-2));
    background-repeat: no-repeat;
    z-index: 1;
    width: 100%;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    max-width: 400px;
    color: aliceblue;
	}

  h1 {
    padding: auto;
    letter-spacing: 0.05em;
    font-size: 7.5rem;
    font-family: 'Roboto Mono', monospace;  
  }

  .button-style {
    border-radius: 20px;
    color: white;
    transition-duration: 0.5s;
    border: 2px solid white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.4s;
    background-color: transparent;
    padding: 26px 42px;
    margin: 5px 3px;
    font-size: 1.5rem;
    cursor: pointer;

    &:active {
      box-shadow: 5px 5px white;
      transform: translateY(4px);
    }
  }
  

</style>

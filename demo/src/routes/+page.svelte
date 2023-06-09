<script>
	let colors = [
		"#006471",
		"#4B97A5",
		"#FE8E3C"
	]
	let deg = 45
	
	$: degString = `${deg}deg`
</script>

	<section
	style="
		--deg: {degString};
		--gradient-1:{colors[0]};
		--gradient-2:{colors[1]};
		--gradient-2:{colors[2]};
	">
  <div class="center">
    <h1>
      Welcome
    </h1>
    <div>
      <a href="/login" class="button-style">Log in</a>
      <a href="/registration" class="button-style">Sign up</a>
    </div>
  </div>
</section>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&display=swap');
  
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

	section {
		background: linear-gradient(var(--deg),var(--gradient-1), var(--gradient-2));
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    color: white;
    font-family: 'Roboto Mono', monospace;
    justify-content: center;
    display: flex;
	}

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    padding: auto;
    letter-spacing: 0.05em;
    font-size: 10rem;
    margin-bottom: 10px;
  }

  .button-style {
    border-radius: 20px;
    color: white;
    transition-duration: 0.5s;
    border: 3px solid white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.4s;
    background-color: transparent;
    padding: 26px 42px;
    margin: 20px 75px;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      box-shadow: 5px 5px white;
    }

    &:active {
      transform: translateY(4px);
    }
  }
  

</style>

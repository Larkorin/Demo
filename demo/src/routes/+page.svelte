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
    <div class="box water-wave">
      <h1>
        Welcome
      </h1>
      <h1>
        Welcome
      </h1>
    </div>
    <div class="box">
      <a href="/login" class="button-style">Login</a>
      <a href="/registration" class="button-style">Register</a>
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
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    color: white;
    font-family: 'Roboto Mono', monospace;
	}

  .water-wave {

    h1 {
      letter-spacing: 0.05em;
      font-size: 10rem;
      position: absolute;
    }

    h1:nth-child(1) {
      color: transparent;
      -webkit-text-stroke: 2px white;
    }

    h1:nth-child(2) {
      color: white;
      animation: animate 4s ease-in-out infinite;
    } 
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

  .box {
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;

    & {
      align-self: center;
    }
  }

  @keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}

@media (max-width: 800px) {
  .water-wave {
    h1 {
      font-size: 8.5rem;
    }
  }

  .button-style {
    font-size: 1.3rem;
    margin: 10px 65px;
  }
}

@media (max-width: 700px) {
  .water-wave {
    h1 {
      font-size: 6.5rem;
    }
  }

  .button-style {
    font-size: 1rem;
    margin: 0 55px;
  }
}

@media (max-width: 500px) {
  .water-wave {
    h1 {
      font-size: 6rem;
    }
  }

  .button-style {
    font-size: 0.7rem;
    margin: 0 35px;
  }
}
</style>

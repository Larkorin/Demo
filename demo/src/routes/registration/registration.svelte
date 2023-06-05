<body>
    <div>
        <form>
            <h1>Registration</h1>
            <label for="email">Email</label><br />
            <input type="email" name="email" /> <br/> <br> 

            <label for="name">Name</label> <br />
            <input type="text" name="name" /> <br /> <br>

            <label for="password">Last Name</label> <br />
            <input type="lastName" name="password" /> <br /> <br>

            <label for="passwordConfirmation">Password</label>
            <br />
            <input type="password" name="passwordConfirmation" /> <br /> <br>

            <label for="Gender">Gender</label><br>
            <select id="gender" class="gender-form">
                <option hidden disabled selected>Select a Gender</option>
                <option>Femenino</option>
                <option>Masculino</option>
            </select> <br> <br>
            <button class="crear-cuenta">Submit</button>
        </form>
    </div>
</body>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    body {
        display: flex;
        justify-content: center;
        font-family: "Roboto", sans-serif;
        font-size: 20px111;
    }
    div {
        box-sizing: border-box;
        padding-bottom: 1%;
        justify-content: center;
        display: flex;
        width: 100%;
    }
    label {
        margin-bottom: 10%;
    }
    .crear-cuenta {
        background-color: #FE8E3C;
        border: solid  2px #000000;
        margin-top: 4%;
        padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 67px;
        padding-right: 67px;
        border-radius: 5px;
        cursor: pointer;
    }
    .gender-form {
        padding-left: 15%;
        padding-right: 15%;
    }
</style>
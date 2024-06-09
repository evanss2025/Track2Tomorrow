import "../App.css";

export default function Login() {
  const nameoutput = document.getElementById("user");
  function setName() {
    let input = document.getElementById("user").value;
    localStorage.setItem("name", input);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-1/2 flex justify-center items-center bg-blue-500 p-6 rounded-lg mt-20">
          <div className="flex flex-col items-center justify-center w-full max-w-sm bg-blue-500 p-6 rounded-lg">
            <h1 className="font-bold text-4xl m-2 text-white-600">Login</h1>
            <label for="user">Name:</label>
            <input type="text" id="user" name="user"></input>
            <label for="pass">Password:</label>
            <input type="text" id="pass" name="pass"></input>
            <a
              id="continue"
              className="flex font-bold p-2 bg-blue-400 rounded-lg mt-4 w-full justify-center items-center"
              href="/"
              onClick={() => {
                setName();
              }}
            >Continue</a>
          </div>
        </div>
      </div>
    </div>
  );
}

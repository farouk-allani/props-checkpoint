import Profile from "./profile/component/Profile";
function App() {
  //Start Styling variables
  const cardContainer = {
    backgroundColor: "#231e39",
    borderRadius: "5px",
    boxShadow: "0px 10px 20px -10px rgba(0, 0, 0, 0.75)",
    color: "#b3b8cd",
    paddingTop: "30px",
    position: "relative",
    width: "350px",
    maxWidth: "100%",
    textAlign: "center",
  };

  const round = {
    border: "1px solid #03bfcb",
    borderRadius: "50%",
    padding: "7px",
    height:"120px",
    width:"120px"
  };

  const App = {
    backgroundColor: "#28223f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "100vh",
    margin: "0",
  };

  // End styling variables

  // start function used 
     let handleName=()=>{
       alert('Farouk Allani');
     };
  //End function used
  return (
    <div style={App}>
      <div style={cardContainer}>
        <Profile name="Farouk Allani" data={handleName} pro="Fullstack Developer"  bio="Full Stack Developer with over 10 years of 
        experience in JavaScript,  React, Css, Html. Led development of 500K DT research project which was deemed a gold standard 
        by the client." >
          <img
            src="./Farouk.jpg"
            alt="profile pic"
            style={round}
          /></Profile>
      </div>
    </div>
  );
}

export default App;

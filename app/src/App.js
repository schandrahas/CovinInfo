import { useState, useEffect } from "react";
import UserForm from "./components/UserForm.js";
import DataAlert from "./components/Alert.js";
import axios from "axios";
import Home from "./components/Home.js";
import { Alert, Container } from "react-bootstrap";
import Layout from "./components/Layouts/Layout.js";

function App(props) {
  const [Pin, SetPin] = useState(null);
  const [ChoosedDate, setDate] = useState(null);
  const [counter, Setcounter] = useState(0);
  const [Age, SetAge] = useState("");
  const [Data, Setdata] = useState(null);
  function loader(pincode, date, age) {
    SetPin(pincode);

    if (age === 1) {
      SetAge("18-44");
    } else if (age === 2) {
      SetAge("45+");
    } else {
      SetAge("All");
    }

    var newdate =
      date.substring(8, 10) +
      date[7] +
      date.substring(5, 7) +
      date[4] +
      date.substring(0, 4);
    console.log(newdate);
    setDate(newdate);
    Setdata(null);
    findByPin(pincode, newdate);
    console.log(Data);
    Setcounter(counter + 1);
  }
  function findByPin(pincode, date) {
    /* https://apisetu.gov.in/public/marketplace/api/cowin/cowin-public-v2#/Appointment%20Availability%20APIs/findByPin */
    return axios({
      method: "get",
      url: `https://aqueous-ravine-73981.herokuapp.com/https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`,
      headers: {
        accept: "application/json",
        "Accept-Language": "en_US",
      },
    })
      .then(function (response) {
        console.log(response.data);
        if (response.data.sessions !== undefined) {
          Setdata(response.data.sessions);

        } else {
          return (
            <Alert variant={"primary"}>
             wrong
            </Alert>
          );
        }
      })
      .catch(function (error) {
        alert("Please enter valid details")
      });
  }

  useEffect(() => {}, [counter]);
  return (
    <>
    <Layout>
      <UserForm OnSubmit={loader}/>
      {Data?<DataAlert pincode={Pin} ChoosedDate={ChoosedDate} age={Age} />:<></>}
      {Data ? <Home data={Data}></Home> : <></>}
    </Layout>
    </>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";

export const Form = () => {
  const [variance, setVariance] = useState("");
  const [skewness, setSkewness] = useState("");
  const [curtosis, setCurtosis] = useState("");
  const [entropy, setEntropy] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("")

  //   https://fastmodel.herokuapp.com/predict
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(name, email, password, secret);
      const { data } = await axios.post("http://localhost:8000/predict", {
        variance,
        skewness,
        curtosis,
        entropy,
      });
      console.log(data.ok);
      console.log('data is =>', data); //useState component
      setMessage("Model trained successfully");
      setResult(data)
    } catch (error) {
      console.log(error.response.data);
    }
    // try {
    //   let res = await fetch("http://127.0.0.1:8000/predict", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       variance: variance,
    //       skewness: skewness,
    //       curtosis: curtosis,
    //       entropy: entropy,
    //     }),
    //   }).then(data => {
    //     console.log(data)
    //     console.log(data.body)
    //     console.log('body =>', data.body)
    //     console.log('Status =>', data.headers)

    //   });
    //   if (res.status === 200) {
    //     setVariance("");
    //     setSkewness("");
    //     setCurtosis("");
    //     setEntropy("");
    //     setMessage("Model trained successfully");
    //   } else {
    //     setMessage("Some error occured");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
    // console.log("Features =>", variance, skewness, curtosis, entropy);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={variance}
          placeholder="variance"
          onChange={(e) => setVariance(e.target.value)}
        />
        <input
          type="text"
          value={skewness}
          placeholder="skewness"
          onChange={(e) => setSkewness(e.target.value)}
        />
        <input
          type="text"
          value={curtosis}
          placeholder="curtosis"
          onChange={(e) => setCurtosis(e.target.value)}
        />
        <input
          type="text"
          value={entropy}
          placeholder="entropy"
          onChange={(e) => setEntropy(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
        <div>
            <p>This is a {result}</p>
        </div>
      </form>
    </div>
  );
};

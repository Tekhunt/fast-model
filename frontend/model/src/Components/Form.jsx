import React, { useState } from "react";
import axios from "axios";

export const Form = () => {
  const [variance, setVariance] = useState("");
  const [skewness, setSkewness] = useState("");
  const [curtosis, setCurtosis] = useState("");
  const [entropy, setEntropy] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  //   https://fastmodel.herokuapp.com/predict
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/predict", {
        variance,
        skewness,
        curtosis,
        entropy,
      });
      console.log("Okay", data.ok);
      console.log("data is =>", data); //useState component
      // setMessage("Model trained successfully");
      setResult(data);
      console.log("status =>", data.status);
      setVariance("");
      setSkewness("");
      setCurtosis("");
      setEntropy("");
      setMessage("Model trained successfully");
    } catch (error) {
      console.log(error.response.data);
    }
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

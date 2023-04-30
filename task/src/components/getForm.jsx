import React, { useState, useEffect } from "react";
import axios from "axios";
const GetForm = () => {
  const [form, setForm] = useState();
  const callData = async () => {
    const { data } = await axios.get("http://localhost:3000/form");
    console.log(data);
    setForm(data);
  };
  useEffect(() => {
    callData();
  }, []);
  return (
    <div>
      <table style={{ overFlow: "auto" }} className="table table-bordered">
        <thead>
          <tr>
            <th>index</th>
            <th scope="col">name</th>
            <th scope="col">dob</th>
            <th scope="col"> sex</th>
            <th scope="col"> mobile</th>
            <th scope="col"> Government ID</th>

            <th scope="col"> gardianDetail</th>

            <th scope="col">email</th>
            <th scope="col">emergencyContact</th>
            <th scope="col">address</th>
            <th scope="col">state</th>
            <th scope="col"> city</th>
            <th scope="col"> country</th>
            <th scope="col">pincode</th>
            <th scope="col"> occupation</th>
            <th scope="col">religion</th>
            <th scope="col"> maritalStatus</th>
            <th scope="col">bloodGroup</th>
            <th scope="col"> nationality</th>
          </tr>
        </thead>
        <tbody>
          {form
            ? form.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.dob}</td>
                  <td> {item.sex}</td>
                  <td> {item.mobile}</td>
                  <td> {`${item.giid} ${item.panAdhar}`}</td>
                  {/* <td> {item.panAdhar}</td> */}
                  <td> {`${item.gardianDetail} ${item.gardianDetail2}`}</td>
                  {/* <td>{item.gardianDetail2}</td> */}
                  <td>{item.email}</td>
                  <td>{item.emergencyContact}</td>
                  <td>{item.address}</td>
                  <td>{item.state}</td>
                  <td> {item.city}</td>
                  <td> {item.country}</td>
                  <td>{item.pincode}</td>
                  <td> {item.occupation}</td>
                  <td>{item.religion}</td>
                  <td> {item.maritalStatus}</td>
                  <td>{item.bloodGroup}</td>
                  <td> {item.nationality}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default GetForm;

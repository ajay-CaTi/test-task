import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function Some() {
  const [formValues, setFormValues] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        pancard: Yup.string().when("govtIdType", {
          is: "pancard",
          then: Yup.string()
            .matches(
              /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/,
              "Enter a valid PAN Card Number"
            )
            .required("Please enter PAN Card Number"),
          otherwise: Yup.string(),
        }),
        aadharcard: Yup.string().when("govtIdType", {
          is: "aadharcard",
          then: Yup.string()
            .matches(/^[0-9]{12}$/, "Enter a valid Aadhar Card Number")
            .required("Please enter Aadhar Card Number"),
          otherwise: Yup.string(),
        }),
      })
    ),
  });

  const onSubmit = (data) => {
    setFormValues(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="govtIdType">Government ID Type</label>
          <select {...register("govtIdType")}>
            <option value="pancard">Pan Card</option>
            <option value="aadharcard">Aadhar Card</option>
          </select>
        </div>
        <div>
          <label htmlFor="pancard">PAN Card</label>
          <input type="text" {...register("pancard")} />
          {errors.pancard && <p>{errors.pancard.message}</p>}
        </div>
        <div>
          <label htmlFor="aadharcard">Aadhar Card</label>
          <input type="text" {...register("aadharcard")} />
          {errors.aadharcard && <p>{errors.aadharcard.message}</p>}
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setFormValues({})}>
          Cancel
        </button>
      </form>
      <div>
        <h3>Form Values:</h3>
        <pre>{JSON.stringify(formValues, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Some;

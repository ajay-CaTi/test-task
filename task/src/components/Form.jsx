import React, { useState } from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function UserRegistrationForm() {
  const [user, setUser] = useState({
    name: "",
    dob: "",
    sex: "",
    mobile: "",
    giid: "",
    panAdhar: "",
    gardianDetail: "",
    gardianDetail2: "",
    email: "",
    emergencyContact: "",
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
    occupation: "",
    religion: "",
    maritalStatus: "",
    bloodGroup: "",
    nationality: "",
  });
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    dob: Yup.date().required("Date of birth is required"),
    sex: Yup.string().required("Sex is required"),
    // mobile: Yup.string()
    //   .matches(/^[0-9]{10}$/, "Invalid mobile number")
    //   .required("Mobile number is required"),
    // govIssueId: Yup.string().required("Government issued ID is required"),
    // guardianDetails: Yup.string(),
    // email: Yup.string().email("Invalid email").required("Email is required"),
    // emergencyContact: Yup.string().required("Emergency contact is required"),
    // address: Yup.string().required("Address is required"),
    // state: Yup.string().required("State is required"),
    // city: Yup.string().required("City is required"),
    // country: Yup.string().required("Country is required"),
    // pincode: Yup.string().required("Pincode is required"),
    occupation: Yup.string(),
    religion: Yup.string(),
    // maritalStatus: Yup.string().required("Marital status is required"),
    // bloodGroup: Yup.string().required("Blood group is required"),
    // nationality: Yup.string().required("Nationality is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (data) => {
    const {
      name,
      dob,
      sex,
      mobile,
      giid,
      panAdhar,
      gardianDetail,
      gardianDetail2,
      email,
      emergencyContact,
      address,
      state,
      city,
      country,
      pincode,
      occupation,
      religion,
      maritalStatus,
      bloodGroup,
      nationality,
    } = user;
    const res = await fetch("/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        dob,
        sex,
        mobile,
        giid,
        panAdhar,
        gardianDetail,
        gardianDetail2,
        email,
        emergencyContact,
        address,
        state,
        city,
        country,
        pincode,
        occupation,
        religion,
        maritalStatus,
        bloodGroup,
        nationality,
      }),
    });
    if (!res) {
      alert("some error");
    } else {
      alert("success");
    }
  };

  return (
    <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="row">
          <u>
            <strong>Personal Details:</strong>
          </u>
          <div className="col-4">
            <label>Name:</label>
            <input
              className="border-sty ms-2"
              placeholder="Enter Name"
              type="text"
              {...register("name")}
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>

          <div className="col-4">
            <label>Date of Birth:</label>
            <input
              type="date"
              {...register("dob")}
              name="dob"
              value={user.dob}
              onChange={handleChange}
            />
            {errors.dob && <span>{errors.dob.message}</span>}
          </div>

          <div className="col-4">
            <label>Sex:</label>
            <select
              {...register("sex")}
              name="sex"
              value={user.sex}
              onChange={handleChange}
            >
              <option value="">Enter Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.sex && <span>{errors.sex.message}</span>}
          </div>

          <div className="col-4 mt-3 mb-3">
            <label>Mobile:</label>
            <input
              placeholder="Enter Mobile no."
              type="text"
              name="mobile"
              {...register("mobile")}
              value={user.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <span>{errors.mobile.message}</span>}
          </div>

          <div className="col-8 mt-3 mb-3">
            <label>Government Issued ID:</label>
            <select name="giid" value={user.giid} onChange={handleChange}>
              <option value="">ID Type</option>
              <option value="PAN Card">PAN Card</option>
              <option value="AADHAR Card">AADHAR Card</option>
            </select>
            <input
              placeholder="Enter Gov Id"
              name="panAdhar"
              value={user.panAdhar}
              onChange={handleChange}
              type="text"
            />
            {errors.govIssueId && <span>{errors.govIssueId.message}</span>}
          </div>

          <u>
            <strong>Contact Details:</strong>
          </u>
          <div className="col-4 mt-3 mb-3">
            <label>Guardian Details:</label>
            <select
              id="city"
              name="gardianDetail"
              value={user.gardianDetail}
              onChange={handleChange}
            >
              <option value="">Enter Details</option>
              <option value="Mr">Mr.</option>
              <option value="Mrs">Mrs.</option>
            </select>

            <input
              placeholder="Enter Guardian Name"
              type="text"
              name="gardianDetail2"
              value={user.gardianDetail2}
              onChange={handleChange}
            />
            {errors.guardianDetails && (
              <span>{errors.guardianDetails.message}</span>
            )}
          </div>

          <div className="col-4">
            <label>Email:</label>
            <input
              placeholder="Enter Email"
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="col-4">
            <label>Emergency Contact:</label>
            <input
              placeholder="Enter Emergency no."
              type="text"
              name="emergencyContact"
              value={user.emergencyContact}
              onChange={handleChange}
            />
            {errors.emergencyContact && (
              <span>{errors.emergencyContact.message}</span>
            )}
          </div>

          <u>
            <strong>Address Details:</strong>
          </u>
          <div className="col-4">
            <label>Address:</label>
            <input
              placeholder="Enter Address"
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
            />
            {errors.address && <span>{errors.address.message}</span>}
          </div>

          <div className="col-4 mt-3 mb-3">
            <label>State:</label>
            <select
              name="state"
              id="state"
              value={user.state}
              onChange={handleChange}
            >
              <option value="">Enter State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            {/* <input type="text" {...register("state")} /> */}
            {errors.state && <span>{errors.state.message}</span>}
          </div>

          <div className="col-4 mt-3 mb-3">
            <label>City:</label>
            {/* <!-- Uttar Pradesh--> */}
            <select
              id="city"
              name="city"
              value={user.city}
              onChange={handleChange}
            >
              <option value="">Enter City/Town/Village</option>
              <option value="Achhnera">Achhnera</option>
              <option value="Afzalgarh">Afzalgarh</option>
              <option value="Agra">Agra</option>
              <option value="Ahraura">Ahraura</option>
              <option value="Ajodhya">Ajodhya</option>
              <option value="Akbarpur">Akbarpur</option>
              <option value="Aliganj">Aliganj</option>
              <option value="Aligarh">Aligarh</option>
              <option value="Allahabad">Allahabad</option>
              <option value="Allahganj">Allahganj</option>
              <option value="Amanpur">Amanpur</option>
              <option value="Ambahta">Ambahta</option>
              <option value="Ambedkar Nagar">Ambedkar Nagar</option>
              <option value="Amethi">Amethi</option>
              <option value="Amroha">Amroha</option>
              <option value="Anandnagar">Anandnagar</option>
              <option value="Antu">Antu</option>
              <option value="Anupshahr">Anupshahr</option>
              <option value="Aonla">Aonla</option>
              <option value="Atarra">Atarra</option>
              <option value="Atrauli">Atrauli</option>
              <option value="Atraulia">Atraulia</option>
              <option value="Auraiya">Auraiya</option>
              <option value="Auras">Auras</option>
              <option value="Azamgarh">Azamgarh</option>
              <option value="Baberu">Baberu</option>
              <option value="Babina">Babina</option>
              <option value="Babrala">Babrala</option>
              <option value="Babugarh">Babugarh</option>
              <option value="Bachhraon">Bachhraon</option>
              <option value="Bachhrawan">Bachhrawan</option>
              <option value="Baghpat">Baghpat</option>
              <option value="Bah">Bah</option>
              <option value="Baheri">Baheri</option>
              <option value="Bahjoi">Bahjoi</option>
              <option value="Bahraich">Bahraich</option>
              <option value="Bahraigh">Bahraigh</option>
              <option value="Bahsuma">Bahsuma</option>
              <option value="Bahua">Bahua</option>
              <option value="Bajna">Bajna</option>
              <option value="Bakewar">Bakewar</option>
              <option value="Baldev">Baldev</option>
              <option value="Ballia">Ballia</option>
              <option value="Balrampur">Balrampur</option>
              <option value="Banat">Banat</option>
              <option value="Banbasa">Banbasa</option>
              <option value="Banda">Banda</option>
              <option value="Bangarmau">Bangarmau</option>
              <option value="Bansdih">Bansdih</option>
              <option value="Bansgaon">Bansgaon</option>
              <option value="Bansi">Bansi</option>
              <option value="Bara Banki">Bara Banki</option>
              <option value="Baragaon">Baragaon</option>
              <option value="Baraut">Baraut</option>
              <option value="Bareilly">Bareilly</option>
              <option value="Barkhera Kalan">Barkhera Kalan</option>
              <option value="Barsana">Barsana</option>
              <option value="Basti">Basti</option>
              <option value="Behat">Behat</option>
              <option value="Bela">Bela</option>
              <option value="Beniganj">Beniganj</option>
              <option value="Beswan">Beswan</option>
              <option value="Bewar">Bewar</option>
              <option value="Bhadohi">Bhadohi</option>
              <option value="Bhagwantnagar">Bhagwantnagar</option>
              <option value="Bharthana">Bharthana</option>
              <option value="Bharwari">Bharwari</option>
              <option value="Bhinga">Bhinga</option>
              <option value="Bhongaon">Bhongaon</option>
              <option value="Bidhuna">Bidhuna</option>
              <option value="Bighapur Khurd">Bighapur Khurd</option>
              <option value="Bijnor">Bijnor</option>
              <option value="Bikapur">Bikapur</option>
              <option value="Bilari">Bilari</option>
              <option value="Bilariaganj">Bilariaganj</option>
              <option value="Bilaspur">Bilaspur</option>
              <option value="Bilgram">Bilgram</option>
              <option value="Bilhaur">Bilhaur</option>
              <option value="Bilsanda">Bilsanda</option>
              <option value="Bilsi">Bilsi</option>
              <option value="Bilthra">Bilthra</option>
              <option value="Bindki">Bindki</option>
              <option value="Bisalpur">Bisalpur</option>
              <option value="Bisauli">Bisauli</option>
              <option value="Bisenda Buzurg">Bisenda Buzurg</option>
              <option value="Bishunpur Urf Maharajganj">
                Bishunpur Urf Maharajganj
              </option>
              <option value="Biswan">Biswan</option>
              <option value="Bithur">Bithur</option>
              <option value="Budaun">Budaun</option>
              <option value="Budhana">Budhana</option>
              <option value="Bulandshahr">Bulandshahr</option>
              <option value="Captainganj">Captainganj</option>
              <option value="Chail">Chail</option>
              <option value="Chakia">Chakia</option>
              <option value="Chandauli">Chandauli</option>
              <option value="Chandauli District">Chandauli District</option>
              <option value="Chandpur">Chandpur</option>
              <option value="Chanduasi">Chanduasi</option>
              <option value="Charkhari">Charkhari</option>
              <option value="Charthawal">Charthawal</option>
              <option value="Chhaprauli">Chhaprauli</option>
              <option value="Chharra">Chharra</option>
              <option value="Chhata">Chhata</option>
              <option value="Chhibramau">Chhibramau</option>
              <option value="Chhutmalpur">Chhutmalpur</option>
              <option value="Chillupar">Chillupar</option>
              <option value="Chirgaon">Chirgaon</option>
              <option value="Chitrakoot">Chitrakoot</option>
              <option value="Chopan">Chopan</option>
              <option value="Chunar">Chunar</option>
              <option value="Colonelganj">Colonelganj</option>
              <option value="Dadri">Dadri</option>
              <option value="Dalmau">Dalmau</option>
              <option value="Dankaur">Dankaur</option>
              <option value="Dasna">Dasna</option>
              <option value="Dataganj">Dataganj</option>
              <option value="Daurala">Daurala</option>
              <option value="Dayal Bagh">Dayal Bagh</option>
              <option value="Deoband">Deoband</option>
              <option value="Deoranian">Deoranian</option>
              <option value="Deoria">Deoria</option>
              <option value="Dewa">Dewa</option>
              <option value="Dhampur">Dhampur</option>
              <option value="Dhanaura">Dhanaura</option>
              <option value="Dhaurahra">Dhaurahra</option>
              <option value="Dibai">Dibai</option>
              <option value="Dohrighat">Dohrighat</option>
              <option value="Dostpur">Dostpur</option>
              <option value="Dudhi">Dudhi</option>
              <option value="Etah">Etah</option>
              <option value="Etawah">Etawah</option>
              <option value="Faizabad">Faizabad</option>
              <option value="Farah">Farah</option>
              <option value="Faridnagar">Faridnagar</option>
              <option value="Faridpur">Faridpur</option>
              <option value="Farrukhabad">Farrukhabad</option>
              <option value="Fatehabad">Fatehabad</option>
              <option value="Fatehganj West">Fatehganj West</option>
              <option value="Fatehgarh">Fatehgarh</option>
              <option value="Fatehpur">Fatehpur</option>
              <option value="Fatehpur Chaurasi">Fatehpur Chaurasi</option>
              <option value="Fatehpur Sikri">Fatehpur Sikri</option>
              <option value="Firozabad">Firozabad</option>
              <option value="Fyzabad">Fyzabad</option>
              <option value="Gajraula">Gajraula</option>
              <option value="Gangoh">Gangoh</option>
              <option value="Ganj Dundwara">Ganj Dundwara</option>
              <option value="Ganj Muradabad">Ganj Muradabad</option>
              <option value="Garautha">Garautha</option>
              <option value="Garhi Pukhta">Garhi Pukhta</option>
              <option value="Garhmuktesar">Garhmuktesar</option>
              <option value="Gautam Buddha Nagar">Gautam Buddha Nagar</option>
              <option value="Gawan">Gawan</option>
              <option value="Ghatampur">Ghatampur</option>
              <option value="Ghaziabad">Ghaziabad</option>
              <option value="Ghazipur">Ghazipur</option>
              <option value="Ghiror">Ghiror</option>
              <option value="Ghorawal">Ghorawal</option>
              <option value="Ghosi">Ghosi</option>
              <option value="Gohand">Gohand</option>
              <option value="Gokul">Gokul</option>
              <option value="Gola Bazar">Gola Bazar</option>
              <option value="Gola Gokarannath">Gola Gokarannath</option>
              <option value="Gonda">Gonda</option>
              <option value="Gonda City">Gonda City</option>
              <option value="Gopamau">Gopamau</option>
              <option value="Gorakhpur">Gorakhpur</option>
              <option value="Goshainganj">Goshainganj</option>
              <option value="Govardhan">Govardhan</option>
              <option value="Greater Noida">Greater Noida</option>
              <option value="Gulaothi">Gulaothi</option>
              <option value="Gunnaur">Gunnaur</option>
              <option value="Gursahaiganj">Gursahaiganj</option>
              <option value="Gursarai">Gursarai</option>
              <option value="Gyanpur">Gyanpur</option>
              <option value="Haldaur">Haldaur</option>
              <option value="Hamirpur">Hamirpur</option>
              <option value="Handia">Handia</option>
              <option value="Hapur">Hapur</option>
              <option value="Haraiya">Haraiya</option>
              <option value="Hardoi">Hardoi</option>
              <option value="Harduaganj">Harduaganj</option>
              <option value="Hasanpur">Hasanpur</option>
              <option value="Hastinapur">Hastinapur</option>
              <option value="Hata">Hata</option>
              <option value="Hathras">Hathras</option>
              <option value="Iglas">Iglas</option>
              <option value="Ikauna">Ikauna</option>
              <option value="Indergarh">Indergarh</option>
              <option value="Islamnagar">Islamnagar</option>
              <option value="Itaunja">Itaunja</option>
              <option value="Itimadpur">Itimadpur</option>
              <option value="Jagdishpur">Jagdishpur</option>
              <option value="Jagnair">Jagnair</option>
              <option value="Jahanabad">Jahanabad</option>
              <option value="Jahangirabad">Jahangirabad</option>
              <option value="Jahangirpur">Jahangirpur</option>
              <option value="Jainpur">Jainpur</option>
              <option value="Jais">Jais</option>
              <option value="Jalalabad">Jalalabad</option>
              <option value="Jalali">Jalali</option>
              <option value="Jalalpur">Jalalpur</option>
              <option value="Jalaun">Jalaun</option>
              <option value="Jalesar">Jalesar</option>
              <option value="Jansath">Jansath</option>
              <option value="Jarwal">Jarwal</option>
              <option value="Jasrana">Jasrana</option>
              <option value="Jaswantnagar">Jaswantnagar</option>
              <option value="Jaunpur">Jaunpur</option>
              <option value="Jewar">Jewar</option>
              <option value="Jhalu">Jhalu</option>
              <option value="Jhansi">Jhansi</option>
              <option value="Jhinjhak">Jhinjhak</option>
              <option value="Jhinjhana">Jhinjhana</option>
              <option value="Jhusi">Jhusi</option>
              <option value="Jyotiba Phule Nagar">Jyotiba Phule Nagar</option>
              <option value="Kabrai">Kabrai</option>
              <option value="Kachhwa">Kachhwa</option>
              <option value="Kadaura">Kadaura</option>
              <option value="Kadipur">Kadipur</option>
              <option value="Kaimganj">Kaimganj</option>
              <option value="Kairana">Kairana</option>
              <option value="Kakori">Kakori</option>
              <option value="Kakrala">Kakrala</option>
              <option value="Kalinagar">Kalinagar</option>
              <option value="Kalpi">Kalpi</option>
              <option value="Kamalganj">Kamalganj</option>
              <option value="Kampil">Kampil</option>
              <option value="Kandhla">Kandhla</option>
              <option value="Kannauj">Kannauj</option>
              <option value="Kanpur">Kanpur</option>
              <option value="Kanpur Dehat">Kanpur Dehat</option>
              <option value="Kant">Kant</option>
              <option value="Kanth">Kanth</option>
              <option value="Karari">Karari</option>
              <option value="Karhal">Karhal</option>
              <option value="Kasganj">Kasganj</option>
              <option value="Katra">Katra</option>
              <option value="Kaushambi District">Kaushambi District</option>
              <option value="Kemri">Kemri</option>
              <option value="Khada">Khada</option>
              <option value="Khaga">Khaga</option>
              <option value="Khair">Khair</option>
              <option value="Khairabad">Khairabad</option>
              <option value="Khalilabad">Khalilabad</option>
              <option value="Khanpur">Khanpur</option>
              <option value="Kharela">Kharela</option>
              <option value="Khargupur">Khargupur</option>
              <option value="Kharkhauda">Kharkhauda</option>
              <option value="Khatauli">Khatauli</option>
              <option value="Khekra">Khekra</option>
              <option value="Kheri">Kheri</option>
              <option value="Khudaganj">Khudaganj</option>
              <option value="Khurja">Khurja</option>
              <option value="Khutar">Khutar</option>
              <option value="Kirakat">Kirakat</option>
              <option value="Kiraoli">Kiraoli</option>
              <option value="Kiratpur">Kiratpur</option>
              <option value="Kishanpur">Kishanpur</option>
              <option value="Kishni">Kishni</option>
              <option value="Kithor">Kithor</option>
              <option value="Konch">Konch</option>
              <option value="Kopaganj">Kopaganj</option>
              <option value="Kosi">Kosi</option>
              <option value="Kota">Kota</option>
              <option value="Kotra">Kotra</option>
              <option value="Kulpahar">Kulpahar</option>
              <option value="Kunda">Kunda</option>
              <option value="Kundarkhi">Kundarkhi</option>
              <option value="Kurara">Kurara</option>
              <option value="Kushinagar">Kushinagar</option>
              <option value="Laharpur">Laharpur</option>
              <option value="Lakhimpur">Lakhimpur</option>
              <option value="Lakhna">Lakhna</option>
              <option value="Lalganj">Lalganj</option>
              <option value="Lalitpur">Lalitpur</option>
              <option value="Lar">Lar</option>
              <option value="Lawar Khas">Lawar Khas</option>
              <option value="Loni">Loni</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Lucknow District">Lucknow District</option>
              <option value="Machhlishahr">Machhlishahr</option>
              <option value="Madhoganj">Madhoganj</option>
              <option value="Madhogarh">Madhogarh</option>
              <option value="Maghar">Maghar</option>
              <option value="Mahaban">Mahaban</option>
              <option value="Maharajganj">Maharajganj</option>
              <option value="Mahmudabad">Mahmudabad</option>
              <option value="Mahoba">Mahoba</option>
              <option value="Maholi">Maholi</option>
              <option value="Mahroni">Mahroni</option>
              <option value="Mailani">Mailani</option>
              <option value="Mainpuri">Mainpuri</option>
              <option value="Malihabad">Malihabad</option>
              <option value="Mandawar">Mandawar</option>
              <option value="Maniar">Maniar</option>
              <option value="Manikpur">Manikpur</option>
              <option value="Manjhanpur">Manjhanpur</option>
              <option value="Mankapur">Mankapur</option>
              <option value="Marahra">Marahra</option>
              <option value="Mariahu">Mariahu</option>
              <option value="Mataundh">Mataundh</option>
              <option value="Mathura">Mathura</option>
              <option value="Mau">Mau</option>
              <option value="Mau Aimma">Mau Aimma</option>
              <option value="Maudaha">Maudaha</option>
              <option value="Mauranwan">Mauranwan</option>
              <option value="Mawana">Mawana</option>
              <option value="Meerut">Meerut</option>
              <option value="Mehnagar">Mehnagar</option>
              <option value="Mehndawal">Mehndawal</option>
              <option value="Milak">Milak</option>
              <option value="Miranpur">Miranpur</option>
              <option value="Miranpur Katra">Miranpur Katra</option>
              <option value="Mirganj">Mirganj</option>
              <option value="Mirzapur">Mirzapur</option>
              <option value="Misrikh">Misrikh</option>
              <option value="Mohan">Mohan</option>
              <option value="Mohanpur">Mohanpur</option>
              <option value="Moradabad">Moradabad</option>
              <option value="Moth">Moth</option>
              <option value="Mubarakpur">Mubarakpur</option>
              <option value="Mughal Sarai">Mughal Sarai</option>
              <option value="Muhammadabad">Muhammadabad</option>
              <option value="Muradnagar">Muradnagar</option>
              <option value="Mursan">Mursan</option>
              <option value="Musafir-Khana">Musafir-Khana</option>
              <option value="Muzaffarnagar">Muzaffarnagar</option>
              <option value="Nadigaon">Nadigaon</option>
              <option value="Nagina">Nagina</option>
              <option value="Nagram">Nagram</option>
              <option value="Najibabad">Najibabad</option>
              <option value="Nakur">Nakur</option>
              <option value="Nanauta">Nanauta</option>
              <option value="Nandgaon">Nandgaon</option>
              <option value="Nanpara">Nanpara</option>
              <option value="Narauli">Narauli</option>
              <option value="Naraura">Naraura</option>
              <option value="Nautanwa">Nautanwa</option>
              <option value="Nawabganj">Nawabganj</option>
              <option value="Nichlaul">Nichlaul</option>
              <option value="Nihtaur">Nihtaur</option>
              <option value="Niwari">Niwari</option>
              <option value="Nizamabad">Nizamabad</option>
              <option value="Noida">Noida</option>
              <option value="Nurpur">Nurpur</option>
              <option value="Obra">Obra</option>
              <option value="Orai">Orai</option>
              <option value="Oran">Oran</option>
              <option value="Pachperwa">Pachperwa</option>
              <option value="Padrauna">Padrauna</option>
              <option value="Pahasu">Pahasu</option>
              <option value="Pali">Pali</option>
              <option value="Palia Kalan">Palia Kalan</option>
              <option value="Parichha">Parichha</option>
              <option value="Parichhatgarh">Parichhatgarh</option>
              <option value="Parshadepur">Parshadepur</option>
              <option value="Patiali">Patiali</option>
              <option value="Patti">Patti</option>
              <option value="Pawayan">Pawayan</option>
              <option value="Phalauda">Phalauda</option>
              <option value="Phaphund">Phaphund</option>
              <option value="Phariha">Phariha</option>
              <option value="Phulpur">Phulpur</option>
              <option value="Pihani">Pihani</option>
              <option value="Pilibhit">Pilibhit</option>
              <option value="Pilkhua">Pilkhua</option>
              <option value="Pinahat">Pinahat</option>
              <option value="Pipraich">Pipraich</option>
              <option value="Pratapgarh">Pratapgarh</option>
              <option value="Pukhrayan">Pukhrayan</option>
              <option value="Puranpur">Puranpur</option>
              <option value="Purwa">Purwa</option>
              <option value="Rabupura">Rabupura</option>
              <option value="Radhakund">Radhakund</option>
              <option value="Raebareli">Raebareli</option>
              <option value="Rajapur">Rajapur</option>
              <option value="Ramkola">Ramkola</option>
              <option value="Ramnagar">Ramnagar</option>
              <option value="Rampur">Rampur</option>
              <option value="Rampura">Rampura</option>
              <option value="Ranipur">Ranipur</option>
              <option value="Rasra">Rasra</option>
              <option value="Rasulabad">Rasulabad</option>
              <option value="Rath">Rath</option>
              <option value="Raya">Raya</option>
              <option value="Renukut">Renukut</option>
              <option value="Reoti">Reoti</option>
              <option value="Richha">Richha</option>
              <option value="Robertsganj">Robertsganj</option>
              <option value="Rudarpur">Rudarpur</option>
              <option value="Rura">Rura</option>
              <option value="Sadabad">Sadabad</option>
              <option value="Sadat">Sadat</option>
              <option value="Safipur">Safipur</option>
              <option value="Saharanpur">Saharanpur</option>
              <option value="Sahaspur">Sahaspur</option>
              <option value="Sahaswan">Sahaswan</option>
              <option value="Sahawar">Sahawar</option>
              <option value="Saidpur">Saidpur</option>
              <option value="Sakit">Sakit</option>
              <option value="Salon">Salon</option>
              <option value="Sambhal">Sambhal</option>
              <option value="Samthar">Samthar</option>
              <option value="Sandi">Sandi</option>
              <option value="Sandila">Sandila</option>
              <option value="Sant Kabir Nagar">Sant Kabir Nagar</option>
              <option value="Sant Ravi Das Nagar">Sant Ravi Das Nagar</option>
              <option value="Sarai Akil">Sarai Akil</option>
              <option value="Sarai Ekdil">Sarai Ekdil</option>
              <option value="Sarai Mir">Sarai Mir</option>
              <option value="Sarauli">Sarauli</option>
              <option value="Sardhana">Sardhana</option>
              <option value="Sarila">Sarila</option>
              <option value="Sasni">Sasni</option>
              <option value="Satrikh">Satrikh</option>
              <option value="Saurikh">Saurikh</option>
              <option value="Sector">Sector</option>
              <option value="Seohara">Seohara</option>
              <option value="Shahabad">Shahabad</option>
              <option value="Shahganj">Shahganj</option>
              <option value="Shahi">Shahi</option>
              <option value="Shahjahanpur">Shahjahanpur</option>
              <option value="Shahpur">Shahpur</option>
              <option value="Shamli">Shamli</option>
              <option value="Shamsabad">Shamsabad</option>
              <option value="Shankargarh">Shankargarh</option>
              <option value="Shergarh">Shergarh</option>
              <option value="Sherkot">Sherkot</option>
              <option value="Shikarpur">Shikarpur</option>
              <option value="Shikohabad">Shikohabad</option>
              <option value="Shishgarh">Shishgarh</option>
              <option value="Shrawasti">Shrawasti</option>
              <option value="Siddharthnagar">Siddharthnagar</option>
              <option value="Sidhauli">Sidhauli</option>
              <option value="Sidhpura">Sidhpura</option>
              <option value="Sikandarabad">Sikandarabad</option>
              <option value="Sikandarpur">Sikandarpur</option>
              <option value="Sikandra">Sikandra</option>
              <option value="Sikandra Rao">Sikandra Rao</option>
              <option value="Sirathu">Sirathu</option>
              <option value="Sirsa">Sirsa</option>
              <option value="Sirsaganj">Sirsaganj</option>
              <option value="Sirsi">Sirsi</option>
              <option value="Sisauli">Sisauli</option>
              <option value="Siswa Bazar">Siswa Bazar</option>
              <option value="Sitapur">Sitapur</option>
              <option value="Sonbhadra">Sonbhadra</option>
              <option value="Soron">Soron</option>
              <option value="Suar">Suar</option>
              <option value="Sultanpur">Sultanpur</option>
              <option value="Surianwan">Surianwan</option>
              <option value="Tajpur">Tajpur</option>
              <option value="Talbahat">Talbahat</option>
              <option value="Talgram">Talgram</option>
              <option value="Tanda">Tanda</option>
              <option value="Thakurdwara">Thakurdwara</option>
              <option value="Thana Bhawan">Thana Bhawan</option>
              <option value="Tikaitnagar">Tikaitnagar</option>
              <option value="Tikri">Tikri</option>
              <option value="Tilhar">Tilhar</option>
              <option value="Tindwari">Tindwari</option>
              <option value="Titron">Titron</option>
              <option value="Tori-Fatehpur">Tori-Fatehpur</option>
              <option value="Tulsipur">Tulsipur</option>
              <option value="Tundla">Tundla</option>
              <option value="Ugu">Ugu</option>
              <option value="Ujhani">Ujhani</option>
              <option value="Ūn">Ūn</option>
              <option value="Unnao">Unnao</option>
              <option value="Usehat">Usehat</option>
              <option value="Utraula">Utraula</option>
              <option value="Varanasi">Varanasi</option>
              <option value="Vrindavan">Vrindavan</option>
              <option value="Wazirganj">Wazirganj</option>
              <option value="Zafarabad">Zafarabad</option>
              <option value="Zaidpur">Zaidpur</option>
              <option value="Zamania">Zamania</option>
            </select>
            {/* <input type="text" {...register("city")} /> */}
            {errors.city && <span>{errors.city.message}</span>}
          </div>

          <div className="col-6 mt-3 mb-3">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={user.country}
              onChange={handleChange}
            />
            {errors.country && <span>{errors.country.message}</span>}
          </div>

          <div className="col-6">
            <label>Pincode:</label>
            <input
              placeholder="Enter Pincode"
              type="text"
              name="pincode"
              value={user.pincode}
              onChange={handleChange}
            />
            {errors.pincode && <span>{errors.pincode.message}</span>}
          </div>
          <u>
            <strong>Country Details:</strong>
          </u>
          <div className="col-4">
            <label>Occupation:</label>
            <input
              placeholder="Enter Occupation"
              type="text"
              name="occupation"
              value={user.occupation}
              onChange={handleChange}
            />
            {errors.occupation && <span>{errors.occupation.message}</span>}
          </div>

          <div className="col-4">
            <label>Religion:</label>
            <select
              name="religion"
              value={user.religion}
              onChange={handleChange}
            >
              <option value="">Select Religion </option>
              <option value="Hinduism">Hinduism </option>
              <option value="Islam">Islam </option>
              <option value="Christianity">Christianity </option>
              <option value="Sikhism">Sikhism </option>
              <option value="Buddhis">Buddhism </option>
              <option value="Jainism">Jainism </option>
            </select>
            {/* <input type="text" {...register("religion")} /> */}
            {errors.religion && <span>{errors.religion.message}</span>}
          </div>

          <div className="col-4 mt-3 mb-3">
            <label>Marital Status:</label>
            <select
              name="maritalStatus"
              value={user.maritalStatus}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
            {errors.maritalStatus && (
              <span>{errors.maritalStatus.message}</span>
            )}
          </div>

          <div className="col-4 mt-3 mb-3">
            <label>Blood Group:</label>
            <select
              name="bloodGroup"
              value={user.bloodGroup}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            {/* <input type="text" {...register("bloodGroup")} /> */}
            {errors.bloodGroup && <span>{errors.bloodGroup.message}</span>}
          </div>

          <div className="col-4 mt-3 mb-3">
            <label>Nationality:</label>
            <input
              type="text"
              name="nationality"
              value={user.nationality}
              onChange={handleChange}
            />
            {errors.nationality && <span>{errors.nationality.message}</span>}
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary me-md-2" type="submit">
              Save
            </button>
            <button className="btn btn-primary" type="button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UserRegistrationForm;

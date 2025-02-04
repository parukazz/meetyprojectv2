import Header from "../../../components/Header";
import LabelInput from "../../../components/LabelInput";
import { maleIcon, femaleIcon } from "../../../assets/img/icons";
import Button from "../../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveBaseProfile } from "../../../api";

const BaseProfile = () => {
  const [form, setForm] = useState({
    firstName: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    gender: "",
  });

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine Birth Date Input
    const birthDate = `${form.birthYear}-${form.birthMonth.padStart(
      2,
      "0"
    )}-${form.birthDay.padStart(2, "0")}`;

    console.log("📤 Sending Data:", {
      userId: user.id,
      firstName: form.firstName,
      birthDate,
      gender: form.gender,
    });

    try {
      const res = await saveBaseProfile({
        userId: user.id,
        firstName: form.firstName,
        birthDate,
        gender: form.gender,
      });
      alert(res.data.message);

      // Save Profile ID to Local Storage
      localStorage.setItem("profileId", res.data.profileId);

      navigate("/activity");
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <main className="template-parent-box">
      <Header
        heading="Show off your best self!"
        desc="Complete your profile to make meaningful connections and let others get to know the real you"
      />

      {/* form */}
      <div>
        <form onSubmit={handleSubmit} className="form-base-profile">
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="firstname">What is your first name?</label>
            <input
              type="text"
              placeholder="First Name"
              className="input-class"
              name="firstName"
              onChange={handleChange}
            />
            <p className="input-badge">
              The name you enter will appear on your profile.
            </p>
          </div>
          {/* Birthday */}
          <div className="flex flex-col gap-2">
            <label htmlFor="birthday">When is your birthday?</label>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <LabelInput labelFor="day" label="Day" />
                <input
                  type="number"
                  placeholder="DD"
                  className="input-class w-full"
                  name="birthDay"
                  min="1"
                  max="31"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <LabelInput labelFor="month" label="Month" />
                <input
                  type="number"
                  placeholder="MM"
                  className="input-class w-full"
                  name="birthMonth"
                  min="1"
                  max="12"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <LabelInput labelFor="year" label="Year" />
                <input
                  type="number"
                  placeholder="YYYY"
                  className="input-class w-full"
                  name="birthYear"
                  min="1900"
                  max="2025"
                  onChange={handleChange}
                />
              </div>
            </div>
            <p className="input-badge">
              Your age will be shown on your profile base on your birth date.
            </p>
          </div>
          {/* gender */}
          <div className="flex flex-col gap-2">
            <label htmlFor="firstname">What is your gender?</label>
            <div className="checkbox-gender">
              <LabelInput
                label="Male"
                labelFor="male"
                addClasses="text-primary w-full h-full"
                icon={<img src={maleIcon} alt="male icon" />}
              />
              <input
                type="radio"
                name="gender"
                className=""
                id="male"
                value="male"
                onChange={handleChange}
              />
            </div>
            <div className="checkbox-gender">
              <LabelInput
                label="Female"
                labelFor="female"
                addClasses="text-primary w-full h-full"
                icon={<img src={femaleIcon} alt="female icon" />}
              />
              <input
                type="radio"
                name="gender"
                className=""
                id="female"
                value="female"
                onChange={handleChange}
              />
            </div>
            <label className="input-badge flex items-center gap-2">
              <input type="checkbox" />
              Do not show my gender on profile
            </label>
            <p className="input-badge"></p>
          </div>
          <div className="button-box-next">
            <Button
              label="Next"
              type="primary"
              isLink={false}
              href="/activity"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default BaseProfile;

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Button from "../button/button.component";
import LabelledInput from "../input/input.component";
import { NextButton, ProfileContainer } from "./profile.component.style";

const Profile = () => {
  const [usernameText, setUsername] = useState("");

  const navigate = useNavigate();

  const { updateUsername } = useContext(UserContext);

  const onUserNameChange = (event) => {
    const { value } = event.target;

    setUsername(value);
  };

  const onNextClicked = () => {
    if (usernameText.length > 0) {
      updateUsername(usernameText);
      //persist data across sessions
      sessionStorage.setItem("username", usernameText);
      navigate("/home");
    }
  };

  const onHandleKeyDown = (event) => {
    if (event.key === "Enter") {
      onNextClicked();
    }
  };

  return (
    <ProfileContainer>
      <LabelledInput
        value={usernameText}
        onChange={onUserNameChange}
        label="Enter a username"
        onKeyDown={onHandleKeyDown}
      />

      <NextButton
        height={"40"}
        usernameLength={usernameText.length}
        onClick={onNextClicked}
      >
        <span>Next</span>
      </NextButton>
    </ProfileContainer>
  );
};

export default Profile;

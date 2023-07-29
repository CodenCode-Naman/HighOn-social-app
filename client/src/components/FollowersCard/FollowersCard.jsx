import React, { useEffect, useState } from "react";
import FollowersModal from "../FollowersModal/FollowersModal";
import { getAllUser } from "../../api/UserRequests";
import { useSelector } from "react-redux";
import "./FollowersCard.css";
import User from "../User/User";

const FollowersCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);

  const [persons, setPersons] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);


  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };

    fetchPersons();

  }, []);

  return (

    <div className="FollowersCard">

      <h3>People you may know</h3>

      {persons.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}

      {!location ? (
        <span onClick={() => setModalOpened(true)}>Show more</span>
      ) : (
        ""
      )}

      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />

    </div>
    
  );
};

export default FollowersCard;

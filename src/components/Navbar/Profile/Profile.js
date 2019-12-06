import React from 'react';


const Profile = (props) => {
   console.log(props.profileData)
   const name = props.profileData.name;
   const birthDay = props.profileData.birthday;
   const signUpDate = props.profileData.createdAt;
   return (
     <>
      <h2>{name}</h2>
      <h4>{birthDay}</h4>
      <strong>{signUpDate}</strong>
     </>
   )
}

export default Profile; 
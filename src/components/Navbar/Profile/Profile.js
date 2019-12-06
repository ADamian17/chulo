import React from 'react';


const Profile = (props) => {
   console.log(props.profileData)
   const name = props.profileData.name;
   const birthDay = props.profileData.birthday;
   const signUpDate = props.profileData.createdAt;
   return (
     <>
      <h1>Profile</h1>
        <h2>{name}</h2>
        <p>{birthDay}</p>
        <p>{signUpDate}</p>
     </>
   )
}

export default Profile; 
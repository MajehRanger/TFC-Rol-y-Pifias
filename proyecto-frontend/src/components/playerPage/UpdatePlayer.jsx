import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PlayerService from '../../services/PlayerService';

function UpdateUser() {
  const navigate = useNavigate();
  const { playerId } = useParams();


  const [playerData, setplayerData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    fetchUserDataById(playerId); // Pass the userId to fetchUserDataById
  }, [playerId]); //wheen ever there is a chane in userId, run this

  const fetchUserDataById = async (playerId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await PlayerService.getUserById(playerId, token); // Pasa el player Id para buscar por usuario
      const { name, email } = response.ourUsers;
      setplayerData({ name, email});
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setplayerData((prevPlayerData) => ({
      ...prevPlayerData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this user?');
      if (confirmDelete) {
        const token = localStorage.getItem('token');
        const res = await PlayerService.updateUser(playerId, playerData, token);
        console.log(res)
        // Redirige al perfil
        navigate("/profile")
      }

    } catch (error) {
      console.error('Error updating user profile:', error);
      alert(error)
    }
  };

  return (
    <div className="auth-container">
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={playerData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={playerData.email} onChange={handleInputChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
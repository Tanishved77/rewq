// js/profile.js

document.getElementById('updateProfileBtn').addEventListener('click', () => {
    const userId = firebase.auth().currentUser.uid;
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
  
    db.collection('users').doc(userId).update({
      username: newUsername,
      password: newPassword
    }).then(() => {
      localStorage.setItem('username', newUsername);
      alert('Profile Updated!');
      window.location.href = "recipe.html";
    });
  });
  
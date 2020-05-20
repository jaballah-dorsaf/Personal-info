import React from 'react';
import Footer from "./components/Footer";
import './App.css';

/*active button class onclick
('nav a').click(function(e) {
  e.preventDefault();
  ('nav a').removeClass('active');
  
  (this).addClass('active');
  if(this.id === !'payment'){
    ('.payment').addClass('noshow');
  }
  else if(this.id === 'payment') {
    ('.payment').removeClass('noshow');
    ('.rightbox').children().not('.payment').addClass('noshow');
  }
  else if (this.id === 'profile') {
    ('.profile').removeClass('noshow');
     ('.rightbox').children().not('.profile').addClass('noshow');
  }
  else if(this.id === 'subscription') {
    ('.subscription').removeClass('noshow');
    ('.rightbox').children().not('.subscription').addClass('noshow');
  }
    else if(this.id === 'privacy') {
    ('.privacy').removeClass('noshow');
    ('.rightbox').children().not('.privacy').addClass('noshow');
  }
  else if(this.id === 'settings') {
    ('.settings').removeClass('noshow');
    ('.rightbox').children().not('.settings').addClass('noshow');
  }
});
*/
function App() {
  return (
    <div className="App">
      <div className ="container">
         <div id="logo"><h1 className ="logo">DJ</h1>
            <div className ="CTA">
              <h1>Get </h1>
           </div>
         </div>
  
  <div className ="rightbox">
    <div className ="profile">
      <h1 className="nom">Personal Info</h1>
      <h2>Full Name</h2>
      <p>Dorsaf Jaballah <button className ="btn">update</button></p>
      <h2>Birthday</h2>
      <p>Octobre 24</p>
      <h2>Gender</h2>
      <p>Female</p>
      <h2>Email</h2>
      <p>example@example.com <button className ="btn">update</button></p>
      <h2>Password </h2>
      <p>••••••• <button className ="btn">Change</button></p>
    </div>
    <button className ="btnn">Change</button>
  </div>
</div>
<Footer />
  </div>

  );
}

export default App;

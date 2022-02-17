import React  from 'react';

const TopNaavbar = () => {
 
  return <div className='navbar-container'>
    
     
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <a className="navbar-brand" href="/">React Speech app</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="gallery">Gallery</a>
      </li>
     
    </ul>
    
  </div>
</nav>
 

      
    

  </div>;
};

export default TopNaavbar;

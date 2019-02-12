import React, from 'react';

const Card = (props) => {
  return (
    <div className="card">
      {/* <img className="card-image" src="https://img.freepik.com/free-vector/gradient-blue-abstract-background_1159-3089.jpg?size=338&ext=jpg" /> */}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <div className="mt-5">&nbsp;</div>
        <div className="mt-1">&nbsp;</div>
        {/* <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  )
};

const TileSquare = (props) => {
  return (
    <div className="col-lg-4 col-md-4 col-6">
      <div className="c--tile-square c--tile-hero mt-4 text-light">
        <h4 className="lead">Content</h4>
      </div>
    </div>
  )
}

const TileNarrow = ({ buttonText, img, ...props }) => {
  return (
    <div className="col-lg-3 col-md-3 col-6">
      <div className="c--tile-narrow mt-4 text-light">
        {/* <h4 className="lead">Content</h4> */}
        <div className="c--tile-narrow-container-img">
          <img src={img} />
        </div>
      </div>
    </div>
  )
};

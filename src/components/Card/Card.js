import React from 'react';
import './Card.css';
import heartOutline from '../../assets/heart-outline.png'; // Tell webpack this JS file uses this image
import heartFill from '../../assets/heart-fill.png'; // Tell webpack this JS file uses this image

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.Author[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.Title}</h5>
          <div className="card-date">{props.Date}</div>
        </div>
      </div>
      <img className="card-image" src={props.Img} alt="Logo" />
      <div className="card-text">
        <ol>
          {props.Description &&
            props.Description.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </div>
      <div className="card-like-bar">
        {props.liked ? (
          <img className="card-like-icon" src={heartFill} alt="Logo" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="Logo" />
        )}
        <div className="like-text">
          <b>{props.Likecount}</b> kişi bu tarifi beğendi.
        </div>
      </div>
    </div>
  );
}

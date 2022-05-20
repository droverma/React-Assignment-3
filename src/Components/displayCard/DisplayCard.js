
import React from 'react';
import defaultImg from '../../assets/image/download.jpeg';
const Card = (props) => {
    return <div class="col-lg-4 d-flex align-items-stretch" key={props.index}>
        <div className="card mb-3" >
            {props.urlToImage ? <img className="card-img-top" src={props.urlToImage} style={{ width: '100%', height: '200px' }} alt="news" /> : <img className="card-img-top" src={defaultImg} alt="news" />
            }
            <div className="card-body">
                <h5 className="card-title">{props.name ? props.name : (props.title)}</h5>
                <p className="card-text">{props.author ? props.author : props.description}</p>
            </div>
        </div>
    </div>

}
export default Card;
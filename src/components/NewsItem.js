import React from 'react'

export default function NewsItem(props) {
  let { title, description, imgUrl, newsUrl, date, author, source } = props;
    return (
      <div>
        <div className="card" >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:1}}>
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={!imgUrl ? "https://static.toiimg.com/thumb/msid-89910547,width-1070,height-580,imgsize-94256,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text text-danger"><small className="">By {!author ? "Unknoen" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btm-sm btn-info">read more</a>
          </div>
        </div>
      </div>
    )
}



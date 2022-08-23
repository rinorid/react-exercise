import React from 'react'

const Card = ({imageSource, title, detailURL}) => {
  return (
                    <div className="column is-one-fifth">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                <img src={imageSource} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4">{title}</p>
                                    </div>
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a href={detailURL} className="card-footer-item">Detail</a>
                            </footer>
                        </div>
                    </div>
  )
}

export default Card
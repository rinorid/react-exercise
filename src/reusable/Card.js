import React from 'react'
import { Link } from "react-router-dom";

const Card = ({imageSource, title, detailURL}) => {
  return (
                    <div className="column is-one-fifth-desktop is-full-mobile is-half-tablet">
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
                                <Link className="card-footer-item" to={detailURL}>Detail</Link>
                            </footer>
                        </div>
                    </div>
  )
}

export default Card
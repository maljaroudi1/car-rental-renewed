import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";


import "rc-slider/assets/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { all_routes } from "../router/all_routes";


const carForListingGrid = (props: any) => {
  const carName = props.carName;
  const CarTypeFeatureText = props.CarTypeFeatureText;
  const carImgOne = props.carImgOne;
  const carImgTwo = props.carImgTwo;
  const carImgAlt = props.carImgAlt;
  const carImgIconNumber = props.carImgIconNumber;
  const carTransmission = props.carTransmission;
  const carMilage = props.carMilage;
  const carFuelType = props.carFuelType;
  const carYear = props.carYear;
  const carHP = props.carHP;
  const carPassangerCapacity = props.carPassangerCapacity;
  const carLocation = props.carLocation;
  const carPricePerDay = props.carPricePerDay;
  const carFeatureTextColor = props.carFeatureTextColor;
  const carFeatureText = props.carFeatureText;
  const customLink = props.customLink;

  const routes = all_routes;

  const [activeHearts, setActiveHearts] = useState({
    heart1: false,
    heart2: false,
    heart3: false,
    heart4: false,
    heart5: false,
    heart6: false,
    heart7: false,
    heart8: false,
    heart9: false,
  });

  const toggleLike = (key: string) => {
    setActiveHearts((prevState) => ({...prevState,[key]: !prevState[key]}));
  };




  const settings1 = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



    return(
    
          <div className="col-xxl-4 col-lg-6 col-md-6 col-12">
          <div className="listing-item">
            <div className="listing-img">
              <div className="img-slider listing-page-slider">
                <Slider {...settings1}>
                  <div className="slide-images">
                    <Link to={routes.listingDetails}>
                      <ImageWithBasePath
                        //{/* Dynamic display carImgOne */}
                        src={`${carImgOne}`}
                        className="img-fluid"
                        alt="Toyota"
                      />
                    </Link>
                  </div>
                  <div className="slide-images">
                    <Link to={routes.listingDetails}>
                      <ImageWithBasePath
                        // {/* Dynamic display carImgTwo */}
                        src={`${carImgTwo}`}
                        className="img-fluid"
                        // Dynamic display carImgAlt
                        alt={`${carImgAlt}`}
                      />
                    </Link>
                  </div>
                </Slider>
              </div>
              <div className="fav-item justify-content-end">
                <span className="img-count">
                  <i className="feather icon-image" />
                  {/* Dynamic display carImgIconNumber */}
                  {`${carImgIconNumber}`}
                </span>
                <Link
                  to="#"
                  className={`fav-icon ${activeHearts.heart1 ? "selected" : ""}`}
                  onClick={() => toggleLike("heart1")}
                >
                  <i className="feather icon-heart" />
                </Link>
              </div>      {/*  CarTypeFeatureText */}
              <span className="featured-text" style={{backgroundColor: 'lightgrey'}}>{`${CarTypeFeatureText}`}</span>
            </div>
            <div className="listing-content">
              <div className="listing-features d-flex align-items-end justify-content-between">
                <div className="list-rating">
                  <h3 className="listing-title">
                    <Link to={routes.listingDetails}>
                    {/* Dynamic display carName */}
                    {`${carName}`}
                    </Link>
                  </h3>

                </div>
              </div>
              <div className="listing-details-group">
                <ul>
                  <li>
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/car-parts-01.svg"
                        alt="Auto"
                      />
                    </span>
                    {/* Dynamic display carTransmission */}
                    <p>{`${carTransmission}`}</p>
                  </li>
                  <li>
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/car-parts-02.svg"
                        alt="Milage"
                      />
                    </span>
                    {/* Dynamic display carMilage*/}
                    <p>{`${carMilage}`}</p>
                  </li>
                  <li>
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/car-parts-03.svg"
                        alt="Petrol"
                      />
                    </span>
                    {/* Dynamic display carFuelType*/}
                    <p>{`${carFuelType}`}</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/car-parts-04.svg"
                        alt="Year"
                      />
                    </span>
                        {/* Dynamic display carYear*/}
                    <p>{`${carYear}`}</p>
                  </li>
                  <li>
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/car-parts-05.svg"
                        alt='Power'
                      />
                    </span>
                        {/* Dynamic display carHP*/}
                    <p>{`${carHP}`}</p>
                  </li>
                  <li>
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/car-parts-06.svg"
                        alt="Persons"
                      />
                    </span>
                          {/* Dynamic display carPassangerCapacity*/}
                    <p>{`${carPassangerCapacity}`}</p>
                  </li>
                </ul>
              </div>
              <div className="listing-location-details">
                <div className="listing-price">
                  <span>
                    <i className="feather icon-map-pin" />
                  </span>
                        {/* Dynamic display carLocation*/}
                        {`${carLocation}`}
                </div>
                <div className="listing-price">
                  <h6>
                  {/* Dynamic display carPricePerDay*/}
                  ${`${carPricePerDay}`} <span>/ Day</span>
                  </h6>
                </div>
              </div>
              <div className="listing-button">
                <Link
                  // customLink
                  to={customLink}
                  className="btn btn-order"
                >
                  <span>
                    <i className="feather icon-calendar me-2" />
                  </span>
                  Rent Now
                </Link>
              </div>
            </div>
            <div className="feature-text">
                            {/* Dynamic display carFeatureText*/}
                            {/* Dynamic display carFeatureTextColor*/}
              <span className={`${carFeatureTextColor}`}>{`${carFeatureText}`}</span>
            </div>
          </div>
         </div>
    )
};


export default carForListingGrid;
import React, { useState } from "react";
import Breadcrumbs from "../common/breadcrumbs";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { TimePicker } from "antd";

import Cars from "./carForListingGrids";
import carData from './carData';


import "rc-slider/assets/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { all_routes } from "../router/all_routes";

const ListingGrid = () => {




  const routes = all_routes;
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();

  const number = [
    { name: "5" },
    { name: "10" },
    { name: "15" },
    { name: "20" },
    { name: "25" },
    { name: "30" },
  ];
  const sort = [
    { name: "Newest" },
    { name: "Relevance" },
    { name: "Low to High" },
    { name: "High to Low" },
    { name: "Best Rated" },
    { name: "Distance" },
    { name: "Popularity" },
  ];



    const [search, setSearch] = useState('');

    const handleSearch = (e: any) => {
        setSearch(e.target);

    }
    const handleCheckboxChange = (e: any) => {
        const { name, checked } = e.target;
        setFilters({
            ...filters,
            [name]: checked,
        });
    };
    const [filters, setFilters] = useState({
      porche:false,
      honda: false,
      toyota: false,
      bmw: false,
      nissan: false,
      ferrari: false,

      //car catagory section
      sport: false,
      sedan:false,
      suv:false,
      supersport:false,
      luxury:false,


      //car year section
      year2024: false,
      year2023: false,
      year2022: false,
      year2021: false,
      year2020: false,
      year2019: false,
      year2018: false,
      year2017: false,
      year2016: false,
      year2015: false,
      year2014: false,
      year2013: false,
      year2012: false,


      // car fuel type
      petrol: false,
      diesel: false,
      electric: false,
      hybrid: false,


       //car capacity section
       twoSeats: false,
       fourSeats: false,
       fiveSeats: false,
       sevenSeats: false,


    })

        const filteredCars = carData.filter((car) => {
          //car search section
          if (car.carName.toLowerCase().includes(search) && car.CarTypeFeatureText.toLocaleLowerCase().includes(search)){
            return true;
          }



          if (filters.porche && car.CarTypeFeatureText.toLowerCase() === 'porche') {
              return true;
          }
          if (filters.honda && car.CarTypeFeatureText.toLowerCase() === 'honda') {
              return true;
          }
          if (filters.toyota && car.CarTypeFeatureText.toLowerCase() === 'toyota') {
              return true;
          }
          if (filters.bmw && car.CarTypeFeatureText.toLowerCase() === 'bmw') {
            return true;
          }
          if (filters.nissan && car.CarTypeFeatureText.toLowerCase() === 'nissan') {
            return true;
          }
          if (filters.ferrari && car.CarTypeFeatureText.toLowerCase() === 'ferrari') {
            return true;
          }



          //car catagory section
          if (filters.sport && car.carType.toLowerCase() === 'sport') {
            return true;
          }
          if (filters.sedan && car.carType.toLowerCase() === 'sedan') {
            return true;
          }
          if (filters.suv && car.carType.toLowerCase() === 'suv') {
            return true;
          }
          if (filters.supersport && car.carType.toLowerCase() === 'supersport') {
            return true;
          }
          if (filters.luxury && car.carType.toLowerCase() === 'luxury') {
            return true;
          }


          //car year section
          if (filters.year2024 && car.carYear === '2024') {
            return true;
          }
          if (filters.year2023 && car.carYear === '2023') {
            return true;
          }
          if (filters.year2022 && car.carYear === '2022') {
            return true;
          }
          if (filters.year2021 && car.carYear === '2021') {
            return true;
          }
          if (filters.year2020 && car.carYear === '2020') {
            return true;
          }
          if (filters.year2019 && car.carYear === '2019') {
            return true;
          }
          if (filters.year2018 && car.carYear === '2018') {
            return true;
          }
          if (filters.year2017 && car.carYear === '2017') {
            return true;
          }
          if (filters.year2016 && car.carYear === '2016') {
            return true;
          }
          if (filters.year2015 && car.carYear === '2015') {
            return true;
          }
          if (filters.year2014 && car.carYear === '2014') {
            return true;
          }
          if (filters.year2013 && car.carYear === '2013') {
            return true;
          }
          if (filters.year2012 && car.carYear === '2012') {
            return true;
          }


          // car fuel section
          if (filters.petrol && car.carFuelType.toLowerCase() === 'petrol') {
            return true;
          }
          if (filters.diesel && car.carFuelType.toLowerCase() === 'diesel') {
            return true;
          }
          if (filters.electric && car.carFuelType.toLowerCase() === 'electric') {
            return true;
          }
          if (filters.hybrid && car.carFuelType.toLowerCase() === 'hybrid') {
            return true;
          }



          // car seats sectino
          if (filters.twoSeats && car.carPassangerCapacitySorting.toLowerCase() === 'two') {
            return true;
          }
          if (filters.fourSeats && car.carPassangerCapacitySorting.toLowerCase() === 'four') {
            return true;
          }
          if (filters.fiveSeats && car.carPassangerCapacitySorting.toLowerCase() === 'five') {
            return true;
          }
          if (filters.sevenSeats && car.carPassangerCapacitySorting.toLowerCase() === 'seven') {
            return true;
          }




          if (
              //car brand section
              !filters.porche &&
              !filters.honda &&
              !filters.toyota &&
              !filters.bmw &&
              !filters.nissan &&
              !filters.ferrari &&

              //car catagory section
              !filters.sport &&
              !filters.sedan &&
              !filters.suv &&
              !filters.supersport &&
              !filters.luxury &&



              //car year section
              !filters.year2024 &&
              !filters.year2023 &&
              !filters.year2022 &&
              !filters.year2021 &&
              !filters.year2020 &&
              !filters.year2019 &&
              !filters.year2018 &&
              !filters.year2017 &&
              !filters.year2016 &&
              !filters.year2015 &&
              !filters.year2014 &&
              !filters.year2013 &&
              !filters.year2012 &&

              //car fuel type section
              !filters.petrol &&
              !filters.diesel &&
              !filters.electric &&
              !filters.hybrid &&


              //car capacity section
              !filters.twoSeats &&
              !filters.fourSeats &&
              !filters.fiveSeats &&
              !filters.sevenSeats

            )
            {
              return true;
            }

          return false;
      });

  const onChange = (time: Dayjs, timeString: string) => {
    console.log(time, timeString);
  };


  return (
    <div className="listing-page">
      <Breadcrumbs title="Car Listings" subtitle="Listings" />
      {/* Search */}
      <div className="section-search page-search">
        <div className="container">
          <div className="search-box-banner">
            {/* pickup location form */}
            <form >
              <ul className="align-items-center">
                <li className="column-group-main">
                  <div className="input-block">
                    <label>Pickup Location</label>
                    <div className="group-img">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter City, Airport, or Address"
                      />
                      <span>
                        <i className="feather icon-map-pin" />
                      </span>
                    </div>
                  </div>
                </li>
                <li className="column-group-main">
                  <div className="input-block">
                    <label>Pickup Date</label>
                  </div>
                  <div className="input-block-wrapp">
                    <div className="input-block date-widget">
                      <div className="group-img">
                        <Calendar
                          className="datetimepicker bg-custom"
                          value={date1}
                          onChange={(e) => setDate1(e.value)}
                          placeholder="Choose Date"
                        />
                        <span>
                          <i className="feather icon-calendar" />
                        </span>
                      </div>
                    </div>
                    <div className="input-block time-widge">
                      <div className="group-img">
                        <TimePicker
                          placeholder="Choose Time"
                          className="form-control timepicker"
                          onChange={onChange}
                        />
                        <span>
                          <i className="feather icon-clock" />
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="column-group-main">
                  <div className="input-block">
                    <label>Return Date</label>
                  </div>
                  <div className="input-block-wrapp">
                    <div className="input-block date-widge">
                      <div className="group-img">
                        <Calendar
                          className="datetimepicker bg-custom"
                          value={date2}
                          onChange={(e) => setDate2(e.value)}
                          placeholder="Choose Date"
                        />
                        <span>
                          <i className="feather icon-calendar" />
                        </span>
                      </div>
                    </div>
                    <div className="input-block time-widge">
                      <div className="group-img">
                        <TimePicker
                          placeholder="Choose Time"
                          className="form-control timepicker"
                          onChange={onChange}
                        />
                        <span>
                          <i className="feather icon-clock" />
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="column-group-last">
                  <div className="input-block">
                    <div className="search-btn">
                      <button className="btn search-button" type="submit">
                        {" "}
                        <i className="fa fa-search" aria-hidden="true" />
                        Search
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      {/* /Search */}
      {/* Sort By */}


      {/* Sort section */}
      <div className="sort-section">
        <div className="container">
          <div className="sortby-sec">
            <div className="sorting-div">
              <div className="row d-flex align-items-center">
                <div className="col-xl-4 col-lg-3 col-sm-12 col-12">
                  <div className="count-search">
                    <p>Showing 1-9 of 154 Cars</p>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-9 col-sm-12 col-12">
                  <div className="product-filter-group">
                    <div className="sortbyset">
                      <ul className="d-flex">
                        <li>
                          <span className="sortbytitle">Show : </span>
                          <div className="sorting-select select-one">
                            <Dropdown
                              value={selectedNumber}
                              onChange={(e) => setSelectedNumber(e.value)}
                              options={number}
                              optionLabel="name"
                              placeholder="5"
                            />
                          </div>
                        </li>
                        <li>
                          <span className="sortbytitle">Sort By </span>
                          <div className="sorting-select select-two">
                            <Dropdown
                              value={selectedSort}
                              onChange={(e) => setSelectedSort(e.value)}
                              options={sort}
                              optionLabel="name"
                              placeholder="Newest"
                              className="w-100"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="grid-listview">
                      <ul>
                        <li>
                          <Link to={routes.listingGrid} className="active">
                            <i className="feather icon-grid" />
                          </Link>
                        </li>
                        <li>
                          <Link to={routes.listingMap}>
                            <i className="feather icon-map-pin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Sort By */}
      {/* Car Grid View */}
      <section className="section car-listing pt-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-12 col-12 theiaStickySidebar">
              {/* Accordian filter list */}
              <div className="stickybar">
                <form action="#" autoComplete="off" className="sidebar-form">
                  <div className="sidebar-heading">
                    <h3>What Are You Looking For</h3>
                  </div>
                  {/* Search input form */}
                  <div className="product-search">
                    <div className="form-custom">
                      {/* Search input */}
                      <input
                        type="text"
                        className="form-control"
                        id="member_search1"
                        placeholder='Search'
                        value={search}
                        onChange={handleSearch}
                      />
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/search.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>

                  <div className="accord-list">
                    {/* Car brand checkbox */}
                    <div className="accordion" id="accordionMain1">
                      <div className="card-header-new" id="headingOne">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Car Brand
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                       {/* Car brand checkbox */}
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample1"
                      >
                        {/* Car brand checkbox start*/}
                        <div className="card-body-chat">
                          <div className="row">
                            <div className="col-md-12">
                              <div id="checkBoxes1">
                                <div className="selectBox-cont">
                                  {/* View All */}
                                  <div className="view-content">
                                    <div className="viewall-One">
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="toyota"
                                          checked={filters.toyota}
                                          onChange={handleCheckboxChange}
                                        />
                                        <span className="checkmark" /> Toytoa
                                      </label>
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="honda"
                                          checked={filters.honda}
                                          onChange={handleCheckboxChange}
                                        />
                                        <span className="checkmark" /> Honda
                                      </label>
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="bmw"
                                          checked={filters.bmw}
                                          onChange={handleCheckboxChange}
                                        />
                                        <span className="checkmark" /> BMW
                                      </label>
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="porche"
                                          checked={filters.porche}
                                          onChange={handleCheckboxChange}
                                        />
                                        <span className="checkmark" /> Porche
                                      </label>
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="ferrari"
                                          checked={filters.ferrari}
                                          onChange={handleCheckboxChange}
                                        />
                                        <span className="checkmark" /> Ferrari
                                      </label>

                                    </div>
                                  </div>
                                  {/* /View All */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Car category checkmark */}
                    <div className="accordion" id="accordionMain2">
                      <div className="card-header-new" id="headingTwo">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            Car Category
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes2">
                            <div className="selectBox-cont">
                              {/* View All */}
                              <div className="view-content">
                                <div className="viewall-One">
                                  <label className="custom_check w-100">
                                    <input type="checkbox"
                                      name="sport"
                                      checked={filters.sport}
                                      onChange={handleCheckboxChange}
                                    />
                                    <span className="checkmark" /> Sport
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox"
                                      name="supersport"
                                      checked={filters.supersport}
                                      onChange={handleCheckboxChange}
                                    />
                                    <span className="checkmark" /> Super Sport
                                  </label>
                                  <label className="custom_check w-100">
                                  <input type="checkbox"
                                      name="sedan"
                                      checked={filters.sedan}
                                      onChange={handleCheckboxChange}
                                    />
                                    <span className="checkmark" /> Sedan
                                  </label>
                                  <label className="custom_check w-100">
                                  <input type="checkbox"
                                      name="suv"
                                      checked={filters.suv}
                                      onChange={handleCheckboxChange}
                                    />
                                    <span className="checkmark" /> SUV
                                  </label>
                                  <label className="custom_check w-100">
                                  <input type="checkbox"
                                      name="luxury"
                                      checked={filters.luxury}
                                      onChange={handleCheckboxChange}
                                    />
                                    <span className="checkmark" /> Luxury
                                  </label>
                                </div>
                              </div>
                              {/* /View All */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Car year checkmark */}
                    <div className="accordion" id="accordionMain3">
                      <div className="card-header-new" id="headingYear">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseYear"
                            aria-expanded="true"
                            aria-controls="collapseYear"
                          >
                            Year
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapseYear"
                        className="collapse"
                        aria-labelledby="headingYear"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes02">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox"
                                name="year2024"
                                checked={filters.year2024}
                                onChange={handleCheckboxChange}
                                />
                                <span className="checkmark" /> 2024
                              </label>
                              <label className="custom_check w-100">
                              <input type="checkbox"
                                name="year2023"
                                checked={filters.year2023}
                                onChange={handleCheckboxChange}
                                />
                                <span className="checkmark" /> 2023
                              </label>


                              <div className="view-content">
                                <div className="viewall-One">


                                  <label className="custom_check w-100">
                                  <input type="checkbox"
                                      name="year2013"
                                      checked={filters.year2013}
                                      onChange={handleCheckboxChange}
                                      />
                                    <span className="checkmark" /> 2013
                                  </label>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Car fule type selectable */}
                    <div className="accordion" id="accordionMain04">
                      <div className="card-header-new" id="headingfuel">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefuel"
                            aria-expanded="true"
                            aria-controls="collapsefuel"

                          >
                            Fuel Type
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapsefuel"
                        className="collapse"
                        aria-labelledby="headingfuel"
                        data-bs-parent="#accordionExample2"
                      >
                            <div className="card-body-chat">
                              <div id="checkBoxes02">
                                <div className="selectBox-cont">
                                  <label className="custom_check w-100">
                                    <input type="checkbox"
                                    name="petrol"
                                    checked={filters.petrol}
                                    onChange={handleCheckboxChange}
                                    />
                                    <span className="checkmark" /> Petrol
                                  </label>
                                  <label className="custom_check w-100">
                                  <input type="checkbox"
                                    name="diesel"
                                    checked={filters.diesel}
                                    onChange={handleCheckboxChange}
                                    />
                                    <span className="checkmark" /> Diesel
                                  </label>


                                  <div className="view-content">
                                    <div className="viewall-One">


                                      <label className="custom_check w-100">
                                      <input type="checkbox"
                                          name="electric"
                                          checked={filters.electric}
                                          onChange={handleCheckboxChange}
                                          />
                                        <span className="checkmark" /> Electric
                                      </label>


                                      <label className="custom_check w-100">
                                      <input type="checkbox"
                                          name="hybrid"
                                          checked={filters.hybrid}
                                          onChange={handleCheckboxChange}
                                          />
                                        <span className="checkmark" /> Hybrid
                                      </label>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                      </div>
                    </div>
                    {/* Car mileage */}
                    {/* <div className="accordion" id="accordionMain5">
                      <div className="card-header-new" id="headingmileage">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsemileage"
                            aria-expanded="true"
                            aria-controls="collapsemileage"
                          >
                            Mileage
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapsemileage"
                        className="collapse"
                        aria-labelledby="headingmileage"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="fuel-list">
                            <ul>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="mileage"
                                    id="limited"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="limited">Limited</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="mileage"
                                    id="unlimited"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="unlimited">Unlimited</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div> */}

                    <div className="accordion" id="accordionMain7">
                      <div className="card-header-new" id="headingColor">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseColor"
                            aria-expanded="true"
                            aria-controls="collapseColor"
                          >
                            Colors
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      {/* Car colour */}
                      <div
                        id="collapseColor"
                        className="collapse"
                        aria-labelledby="headingColor"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="theme-colorsset">
                            <ul>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="greenColor"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="greenColor"
                                    className="green-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="yellowColor"
                                    defaultValue="yellow"
                                  />
                                  <label
                                    htmlFor="yellowColor"
                                    className="yellow-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="brownColor"
                                    defaultValue="blue"
                                  />
                                  <label
                                    htmlFor="brownColor"
                                    className="brown-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="blackColor"
                                    defaultValue="green"
                                  />
                                  <label
                                    htmlFor="blackColor"
                                    className="black-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="redColor"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="redColor"
                                    className="red-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="grayColor"
                                    defaultValue="blue"
                                  />
                                  <label
                                    htmlFor="grayColor"
                                    className="gray-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="gray100Color"
                                    defaultValue="green"
                                  />
                                  <label
                                    htmlFor="gray100Color"
                                    className="gray100-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="blueColor"
                                    defaultValue="yellow"
                                  />
                                  <label
                                    htmlFor="blueColor"
                                    className="blue-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="whiteColor"
                                    defaultValue="yellow"
                                  />
                                  <label
                                    htmlFor="whiteColor"
                                    className="white-clr"
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Car seat capacity checkmark */}
                    <div className="accordion" id="accordionMain8">
                      <div className="card-header-new" id="headingThree">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            Capacity
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes3">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox"
                                name="twoSeats"
                                checked={filters.twoSeats}
                                onChange={handleCheckboxChange}
                                />
                                <span className="checkmark" /> 2 Seater
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox"
                                   name="fourSeats"
                                  checked={filters.fourSeats}
                                  onChange={handleCheckboxChange}
                                />
                                <span className="checkmark" /> 4 Seater
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox"
                                  name="fiveSeats"
                                  checked={filters.fiveSeats}
                                  onChange={handleCheckboxChange}/>
                                <span className="checkmark" /> 5 Seater
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox"
                                  name="sevenSeats"
                                  checked={filters.sevenSeats}
                                  onChange={handleCheckboxChange}/>
                                <span className="checkmark" /> 7 Seater
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* car price */}
                    <div className="accordion" id="accordionMain9">
                      <div className="card-header-new" id="headingFour">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="true"
                            aria-controls="collapseFour"
                          >
                            Price
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample4"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes3">
                              <div className="selectBox-cont">
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="bystatus" />
                                  <span className="checkmark" /> $100-0
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="bystatus" />
                                  <span className="checkmark" /> $200
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="bystatus" />
                                  <span className="checkmark" /> $300
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="bystatus" />
                                  <span className="checkmark" /> $400
                                </label>
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="bystatus" />
                                  <span className="checkmark" /> $500
                                </label>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Car transmission */}
                    <div className="accordion" id="accordionMain4">
                      <div className="card-header-new" id="headingtransmiss">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsetransmission"
                            aria-expanded="true"
                            aria-controls="collapsetransmission"
                          >
                            Transmission
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>

                      <div
                        id="collapsetransmission"
                        className="collapse"
                        aria-labelledby="headingtransmiss"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="fuel-list">
                            <ul>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="transmission"
                                    id="manual"
                                    defaultChecked
                                  />
                                  <label htmlFor="manual">Manual </label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="transmission"
                                    id="semi"
                                  />
                                  <label htmlFor="semi">Semi Automatic</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="transmission"
                                    id="automatic"
                                  />
                                  <label htmlFor="automatic">Automatic</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                  {/* Filter results button */}
                  <button
                    type="submit"
                    className="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary filter-btn"
                  >
                    <span>
                      <i className="feather icon-filter me-2" />
                    </span>
                    Filter results
                  </button>
                  {/* Reset filter button */}
                  <a  className="reset-filter" onClick={() => window.location.reload()}>
                      Reset Filter
                  </a>

                </form>
              </div>
            </div>

            {/* Car Listing grid  */}
            <div className="col-lg-9">
              <div className="row">
                {/* Display the cars here */}
                {filteredCars.map((car, index) => (
                  <Cars
                    key={index}
                    carName={car.carName}
                    CarTypeFeatureText = {car.CarTypeFeatureText}
                    carImgOne={car.carImgOne}
                    carImgTwo={car.carImgTwo}
                    carImgAlt={car.carImgAlt}
                    carImgIconNumber={car.carImgIconNumber}
                    carTransmission={car.carTransmission}
                    carMilage={car.carMilage}
                    carFuelType={car.carFuelType}
                    carYear={car.carYear}
                    carHP={car.carHP}
                    carPassangerCapacity={car.carPassangerCapacity}
                    carPricePerDay={car.carPricePerDay}
                    carLocation={car.carLocation}
                    carFeatureTextColor={car.carFeatureTextColor}
                    carFeatureText={car.carFeatureText}
                    customLink={car.customLink}
                  />


                ))}


              </div>
              {/*Pagination*/}
              <div className="blog-pagination">
                <nav>
                  <ul className="pagination page-item justify-content-center">
                    <li className="previtem">
                      <Link className="page-link" to="#">
                        <i className="fas fa-regular fa-arrow-left me-2" /> Prev
                      </Link>
                    </li>
                    <li className="justify-content-center pagination-center">
                      <div className="page-group">
                        <ul>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              1
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="active page-link" to="#">
                              2{" "}
                              <span className="visually-hidden">(current)</span>
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              3
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nextlink">
                      <Link className="page-link" to="#">
                        Next{" "}
                        <i className="fas fa-regular fa-arrow-right ms-2" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*/Pagination*/}
            </div>
          </div>
        </div>
      </section>
      {/* /Car Grid View */}
    </div>
  );
};

export default ListingGrid;

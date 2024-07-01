import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { useDispatch, useSelector } from "react-redux";
import { set_is_mobile_sidebar } from "../../core/data/redux/action";

const Header = () => {
  const routes = all_routes;
  const location = useLocation();

  const dispatch = useDispatch();

  const mobileSidebar = useSelector((state: any) => state.mobileSidebar);

  const handleClick = () => {
    dispatch(set_is_mobile_sidebar(!mobileSidebar));
  };

  const [mobileSubmenu, setMobileSubmenu] = useState(false);

  const mobileSubmenus = () => {
    setMobileSubmenu(!mobileSubmenu);
  };

  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={handleClick}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to={routes.homeOne} className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <Link to={routes.homeOne} className="navbar-brand logo-small">
                <ImageWithBasePath
                  src="assets/img/logo-small.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to={routes.homeOne} className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="#"
                  onClick={handleClick}
                >
                  {" "}
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <li
                  className={`has-submenu ${location.pathname.includes("index") ? "active" : ""}`}
                >
                  <Link to="/" onClick={mobileSubmenus}>
                    Home
                  </Link>

                </li>
                <li
                  className={`has-submenu ${location.pathname.includes("listing") ? "active" : ""}`}
                >
                  <Link to="#">
                    Listings <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li
                      className={
                        location.pathname.includes(routes.listingGrid)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.listingGrid}>Listing Grid</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.listingList)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.listingList}>Listing List</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.listingMap)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.listingMap}>Listing With Map</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.listingDetails)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.listingDetails}>Listing Details</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`has-submenu ${location.pathname.includes("user") ? "active" : ""}`}
                >
                  <Link to="#">
                    User <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li
                      className={
                        location.pathname.includes(routes.userDashboard)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.userDashboard}>Dashboard</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.userBookings)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.userBookings}>My Bookings</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.userReviews)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.userReviews}>Reviews</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.userWishlist)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.userWishlist}>Wishlist</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.userMessages)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.userMessages}>Messages</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.userWallet)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.userWallet}>My Wallet</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.userPayment)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.userPayment}>Payments</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.userSettings)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.userSettings}>Settings</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`has-submenu ${location.pathname.includes("pages") ? "active" : ""}`}
                >
                  <Link to="#">
                    Pages <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li
                      className={
                        location.pathname.includes(routes.aboutUs)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.aboutUs}>About Us</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Authentication</Link>
                      <ul className="submenu">
                        <li
                          className={
                            location.pathname.includes(routes.register)
                              ? "active"
                              : ""
                          }
                        >
                          <Link to={routes.register}>Signup</Link>
                        </li>
                        <li
                          className={
                            location.pathname.includes(routes.login)
                              ? "active"
                              : ""
                          }
                        >
                          <Link to={routes.login}>Signin</Link>
                        </li>
                        <li
                          className={
                            location.pathname.includes(routes.forgotPassword)
                              ? "active"
                              : ""
                          }
                        >
                          <Link to={routes.forgotPassword}>
                            Forgot Password
                          </Link>
                        </li>
                        <li
                          className={
                            location.pathname.includes(routes.resetPassword)
                              ? "active"
                              : ""
                          }
                        >
                          <Link to={routes.resetPassword}>Reset Password</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={`has-submenu ${
                        location.pathname.includes("booking") ||
                        location.pathname.includes("invoice")
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link to="#">Booking</Link>
                      <ul className="submenu">
                        {/* <li
                          className={
                            location.pathname === routes.bookingCheckout
                              ? "active"
                              : ""
                          }
                        >
                          <Link to={routes.bookingCheckout}>
                            Booking Checkout
                          </Link>
                        </li>
                        <li
                          className={
                            location.pathname === routes.booking ? "active" : ""
                          }
                        >
                          <Link to={routes.booking}>Booking</Link>
                        </li>
                        <li
                          className={
                            location.pathname.includes(routes.invoiceDetails)
                              ? "active"
                              : ""
                          }
                        >
                          <Link to={routes.invoiceDetails}>
                            Invoice Details
                          </Link>
                        </li> */}
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Error Page</Link>
                      <ul className="submenu">
                        <li
                          className={
                            location.pathname.includes(routes.error404)
                              ? "active"
                              : ""
                          }
                        >
                          <Link to={routes.error404}>404 Error</Link>
                        </li>
                        <li
                          className={
                            location.pathname.includes(routes.error500)
                              ? "active"
                              : ""
                          }
                        >
                          <Link to={routes.error500}>500 Error</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.pricing)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.pricing}>Pricing</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.faq) ? "active" : ""
                      }
                    >
                      <Link to={routes.faq}>FAQ</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.gallery)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.gallery}>Gallery</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.ourTeam)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.ourTeam}>Our Team</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.testimonial)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.testimonial}>Testimonials</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.termsConditions)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.termsConditions}>
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.privacyPolicy)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.privacyPolicy}>Privacy Policy</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.maintenance)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.maintenance}>Maintenance</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.comingSoon)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.comingSoon}>Coming Soon</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`has-submenu ${location.pathname.includes("blog") ? "active" : ""}`}
                >
                  <Link to="#">
                    Blog <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li
                      className={
                        location.pathname.includes(routes.blogList)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.blogList}>Blog List</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.blogGrid)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.blogGrid}>Blog Grid</Link>
                    </li>
                    <li
                      className={
                        location.pathname.includes(routes.blogDetails)
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={routes.blogDetails}>Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={
                    location.pathname.includes(routes.contactUs) ? "active" : ""
                  }
                >
                  <Link to={routes.contactUs}>Contact</Link>
                </li>
                <li className="login-link">
                  <Link to={routes.register}>Sign Up</Link>
                </li>
                <li className="login-link">
                  <Link to={routes.login}>Sign In</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link header-login" to={routes.login}>
                  <span>
                    <i className="fa-regular fa-user" />
                  </span>
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-reg" to={routes.register}>
                  <span>
                    <i className="fa-solid fa-lock" />
                  </span>
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

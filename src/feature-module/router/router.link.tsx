import React from "react";
import { Navigate } from "react-router";
import { all_routes } from "./all_routes";

import SignUp from "../authentication/signup";
import Login from "../authentication/login";
import ForgotPassword from "../authentication/forgotpassword";
import ResetPassword from "../authentication/resetpassword";
import ListingGrid from "../listings/listing-grid";
import Listingslist from "../listings/listing-list";
import Faq from "../pages/faq/faq";
import Gallerys from "../pages/gallery";
import Pricing from "../pages/pricing/pricing";
import BlogList from "../blog/bloglist";
import BlogGrid from "../blog/bloggrid";
import BlogDetails from "../blog/blogdetails";
import BookingCheckout from "../booking/booking-checkout";
import Booking from "../booking/booking";
import ListingDetails from "../listings/listingDetails";
import Testimonials from "../pages/testimonial/testimonials";
import TermsCondition from "../pages/termscondition/termscondition";
import Maintenance from "../pages/maintenance/maintenance";
import Error404 from "../pages/errorpages/error404";
import Error500 from "../pages/errorpages/error500";
import Contact from "../contact/contact";
import UserSettings from "../user/settings/usersettings";
import UserDashboard from "../user/userdashboard";
import UserIntegration from "../user/userintegration";
import UserSecurity from "../user/settings/usersecurity";
import UserPreferences from "../user/settings/userpreferences";
import UserNotification from "../user/settings/usernotification";
import UserWishList from "../user/wishlist/userwishlist";
import UserMessages from "../user/usermessages";
import UserReview from "../user/userreview";
import UserBookingCancelled from "../user/userbookingcancelled";
import UserBookings from "../user/userbookings";
import UserBookingUpcoming from "../user/user-booking-upcoming";
import UserBookingComplete from "../user/user-booking-complete";
import { UserBookingInprogress } from "../user/user-booking-inprogress";
import UserPayment from "../user/userpayment";
import BookingAddon from "../booking/booking-addon";
import BookingDetail from "../booking/booking-detail";
import BookingPayment from "../booking/booking-payment";
import BookingSuccess from "../booking/booking-success";
import HomeOne from "../home/home-one/home-one";
import OurTeam from "../pages/ourteam/ourTeam";
import ComingSoon from "../pages/comingsoon/comingsoon";
import UserWallet from "../user/wallet/userwallet";
import PrivacyPolicy from "../pages/privacypolicy/privacypolicy";
import AboutUs from "../pages/aboutus";
import InvoiceDetails from "../booking/invoice";
import BookingCalendar from "../user/bookings-calendar";
import BookingCompleteCalendar from "../user/booking-complete-calendar";
import BookingCancelledCalendar from "../user/booking.cancelled-calendar";
import BookingInprogressCalendar from "../user/booking-inprogress-calendar";
import BookingUpcomingCalendar from "../user/booking-upcoming-calendar";
import ListingMap from "../listings/listing-map";
// import BookingCalendar from "../user/bookings-calendar";

const routes = all_routes;

export const publicRoutes = [
  {
    path: routes.homeOne,
    element: <HomeOne />,
  },

  {
    path: "/",
    element: <Navigate to="/" />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },

  {
    path: routes.contactUs,
    element: <Contact />,
  },
];

export const listingroutes = [
  {
    path: routes.listingGrid,
    element: <ListingGrid />,
  },
  {
    path: routes.listingList,
    element: <Listingslist />,
  },
  {
    path: routes.listingDetails,
    element: <ListingDetails />,
  },
  {
    path: routes.listingMap,
    element: <ListingMap />,
  },

];

export const pageroutes = [
  {
    path: routes.aboutUs,
    element: <AboutUs />,
  },
  {
    path: routes.pricing,
    element: <Pricing />,
  },
  {
    path: routes.faq,
    element: <Faq />,
  },
  {
    path: routes.gallery,
    element: <Gallerys />,
  },
  {
    path: routes.bookingCheckout,
    element: <BookingCheckout />,
  },
  {
    path: routes.booking,
    element: <Booking />,
  },
  {
    path: routes.invoiceDetails,
    element: <InvoiceDetails />,
  },
  {
    path: routes.ourTeam,
    element: <OurTeam />,
  },
  {
    path: routes.testimonial,
    element: <Testimonials />,
  },
  {
    path: routes.termsConditions,
    element: <TermsCondition />,
  },
  {
    path: routes.privacyPolicy,
    element: <PrivacyPolicy />,
  },
  {
    path: routes.bookingAddon,
    element: <BookingAddon />,
  },
  {
    path: routes.bookingCheckout,
    element: <BookingCheckout />,
  },
  {
    path: routes.bookingDetail,
    element: <BookingDetail />,
  },
  {
    path: routes.bookingPayment,
    element: <BookingPayment />,
  },
  {
    path: routes.bookingSuccess,
    element: <BookingSuccess />,
  },
];

export const blogroutes = [
  {
    path: routes.blogList,
    element: <BlogList />,
  },
  {
    path: routes.blogGrid,
    element: <BlogGrid />,
  },
  {
    path: routes.blogDetails,
    element: <BlogDetails />,
  },
];

export const authenticationRoute = [
  {
    path: routes.register,
    element: <SignUp />,
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.forgotPassword,
    element: <ForgotPassword />,
  },
  {
    path: routes.resetPassword,
    element: <ResetPassword />,
  },
  {
    path: routes.error404,
    element: <Error404 />,
  },
  {
    path: routes.error500,
    element: <Error500 />,
  },
  {
    path: routes.maintenance,
    element: <Maintenance />,
  },
  {
    path: routes.comingSoon,
    element: <ComingSoon />,
  },
];

export const usermodule = [
  {
    path: routes.userDashboard,
    element: <UserDashboard />,
  },
  {
    path: routes.userSettings,
    element: <UserSettings />,
  },
  {
    path: routes.userIntegration,
    element: <UserIntegration />,
  },
  {
    path: routes.userSecurity,
    element: <UserSecurity />,
  },
  {
    path: routes.preference,
    element: <UserPreferences />,
  },
  {
    path: routes.notification,
    element: <UserNotification />,
  },
  {
    path: routes.userWallet,
    element: <UserWallet />,
  },
  {
    path: routes.userWishlist,
    element: <UserWishList />,
  },
  {
    path: routes.userMessages,
    element: <UserMessages />,
  },
  {
    path: routes.userPayment,
    element: <UserPayment />,
  },
  {
    path: routes.userReviews,
    element: <UserReview />,
  },
  {
    path: routes.userBookingCancelled,
    element: <UserBookingCancelled />,
  },
  {
    path: routes.userBookingCancelled,
    element: <UserBookingCancelled />,
  },
  {
    path: routes.userBookings,
    element: <UserBookings />,
  },
  {
    path: routes.userBookingUpcoming,
    element: <UserBookingUpcoming />,
  },
  {
    path: routes.userBookingComplete,
    element: <UserBookingComplete />,
  },
  {
    path: routes.userBookingCancelled,
    element: <UserBookingCancelled />,
  },
  {
    path: routes.userBookingInprogress,
    element: <UserBookingInprogress />,
  },
  {
    path: routes.BookingCalendar,
    element: <BookingCalendar />,
  },
  {
    path: routes.BookingCompleteCalendar,
    element: <BookingCompleteCalendar />,
  },
  {
    path: routes.BookingCancelledCalendar,
    element: <BookingCancelledCalendar />,
  },
  {
    path: routes.BookingInprogressCalendar,
    element: <BookingInprogressCalendar />,
  },
  {
    path: routes.BookingUpcomingCalendar,
    element: <BookingUpcomingCalendar />,
  },
  // {
  //   path: routes.bookingCalendar,
  //   element: <BookingCalendar />,
  // },
];

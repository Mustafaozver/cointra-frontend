import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import './App.scss';

import { MyPZTheme } from './mypzkit';
import NotFoundPage from './pages/notFound/NotFoundPage';
import PropertiesListPage from './pages/properties/propertiesListPage/PropertiesListPage';
import PropertyDetailPage from './pages/properties/propertyDetailPage/PropertyDetailPage';
import PropertiesLuxuryPage from './pages/properties/propertiesLuxuryPage/PropertiesLuxuryPage';
import ConciergeServicePage from './pages/conciergeService/ConciergeServicePage';
import AboutUsPage from './pages/aboutUs/AboutUsPage';
import TermsPage from './pages/terms/TermsPage';
import ForDeveloperPage from './pages/forDeveloper/ForDeveloperPage';
import ForBrokerPage from './pages/forBroker/ForBrokerPage';
import PrivacyPolicyPage from './pages/privacyPolicy/PrivacyPolicyPage';
import ContactPage from './pages/contact/ContactPage';
import LoyaltyProgramPage from './pages/loyatlyProgram/LoyaltyProgramPage';
import CareerPage from './pages/career/CareerPage';
import MainLayout from './components/layouts/main/MainLayout';
import HomePage from './pages/home/HomePage';
import FavoritesListPage from './pages/favorites/favoritesListPage/FavoritesListPage';
import VerifyFacebookLogin from './pages/users/verifyFacebookLogin/VerifyFacebookLogin';
import VerifyEmailPage from './pages/users/verifyEmail/VerifyEmailPage';
import ResetPasswordPage from './pages/users/resetPassword/ResetPasswordPage';
import VerifyGoogleLogin from './pages/users/verifyGoogleLogin/VerifyGoogleLogin';
import ProfilePage from './pages/users/profile/ProfilePage';

function App() {
  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <BrowserRouter>
          <MyPZTheme>
            <MainLayout>
              <Switch>
                <Route exact path="/"><HomePage /></Route>
                <Route exact path="/properties"><PropertiesListPage /></Route>
                <Route exact path="/properties/favorites"><FavoritesListPage /></Route>
                <Route exact path="/properties/:slug"><PropertyDetailPage /></Route>

                {/* properties with specific filters pages */}
                <Route exact path="/properties-for-rent"><PropertiesListPage initialFilters={{ businessType: 'rent' }} /></Route>
                <Route exact path="/properties-for-sale"><PropertiesListPage initialFilters={{ businessType: 'sale' }} /></Route>

                {/* user */}
                <Route exact path="/profile"><ProfilePage /></Route>

                {/* static pages */}
                <Route exact path="/property-concierge-service"><ConciergeServicePage /></Route>
                <Route exact path="/about-us"><AboutUsPage /></Route>
                <Route exact path="/terms-and-conditions"><TermsPage /></Route>
                <Route exact path="/privacy-policy"><PrivacyPolicyPage /></Route>
                <Route exact path="/developer-pricing"><ForDeveloperPage /></Route>
                <Route exact path="/real-estate-property-agency-pricing"><ForBrokerPage /></Route>
                <Route exact path="/contact"><ContactPage /></Route>
                <Route exact path="/loyalty-program"><LoyaltyProgramPage /></Route>
                <Route exact path="/luxury-properties"><PropertiesLuxuryPage /></Route>
                <Route exact path="/career"><CareerPage /></Route>

                {/* Auth redirect handler pages */}
                <Route exact path="/facebook-login"><VerifyFacebookLogin /></Route>
                <Route exact path="/google-login"><VerifyGoogleLogin /></Route>
                <Route exact path="/users/verify-email"><VerifyEmailPage /></Route>
                <Route exact path="/users/reset-password"><ResetPasswordPage /></Route>

                {/* SEO */}
                <Route exact path="/apartment-for-rent-in-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"rent","locations":[{"value":"dubai"}]}')} /></Route>
                <Route exact path="/apartment-for-rent-in-business-bay"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"rent","locations":[{"value":"dubai-business-bay"}]}')} /></Route>
                <Route exact path="/apartment-for-rent-in-palm-jumeirah"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"rent","locations":[{"value":"dubai-palm-jumeirah"}]}')} /></Route>
                <Route exact path="/apartment-for-sale-in-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"sale","locations":[{"value":"dubai"}]}')} /></Route>
                <Route exact path="/apartment-for-sale-in-business-bay"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"sale","locations":[{"value":"dubai-business-bay"}]}')} /></Route>
                <Route exact path="/apartment-for-sale-in-palm-jumeirah"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"sale","locations":[{"value":"dubai-palm-jumeirah"}]}')} /></Route>
                <Route exact path="/villa-for-rent-in-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"rent","locations":[{"value":"dubai"}]}')} /></Route>
                <Route exact path="/villa-for-rent-in-business-bay"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"rent","locations":[{"value":"dubai-business-bay"}]}')} /></Route>
                <Route exact path="/villa-for-rent-in-palm-jumeirah"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"rent","locations":[{"value":"dubai-palm-jumeirah"}]}')} /></Route>
                <Route exact path="/villa-for-sale-in-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"sale","locations":[{"value":"dubai"}]}')} /></Route>
                <Route exact path="/villa-for-sale-in-business-bay"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"sale","locations":[{"value":"dubai-business-bay"}]}')} /></Route>
                <Route exact path="/villa-for-sale-in-palm-jumeirah"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"sale","locations":[{"value":"dubai-palm-jumeirah"}]}')} /></Route>
                <Route exact path="/house-for-rent-in-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"rent","locations":[{"value":"dubai"}]}')} /></Route>
                <Route exact path="/house-for-rent-in-business-bay"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"rent","locations":[{"value":"dubai-business-bay"}]}')} /></Route>
                <Route exact path="/house-for-rent-in-palm-jumeirah"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"rent","locations":[{"value":"dubai-palm-jumeirah"}]}')} /></Route>
                <Route exact path="/house-for-sale-in-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"sale","locations":[{"value":"dubai"}]}')} /></Route>
                <Route exact path="/house-for-sale-in-business-bay"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"sale","locations":[{"value":"dubai-business-bay"}]}')} /></Route>
                <Route exact path="/house-for-sale-in-palm-jumeirah"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"sale","locations":[{"value":"dubai-palm-jumeirah"}]}')} /></Route>
                <Route exact path="/apartment-for-rent-in-abu-dhabi"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"rent","locations":[{"value":"abu-dhabi"}]}')} /></Route>
                <Route exact path="/apartment-for-sale-in-abu-dhabi"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"sale","locations":[{"value":"abu-dhabi"}]}')} /></Route>
                <Route exact path="/apartment-for-rent-in-dubai-marina"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"rent","locations":[{"value":"dubai-dubai-marina"}]}')} /></Route>
                <Route exact path="/apartment-for-rent-in-downtown-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"rent","locations":[{"value":"dubai-downtown-dubai"}]}')} /></Route>
                <Route exact path="/apartment-for-sale-in-dubai-marina"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"sale","locations":[{"value":"dubai-dubai-marina"}]}')} /></Route>
                <Route exact path="/apartment-for-sale-in-downtown-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"sale","locations":[{"value":"dubai-downtown-dubai"}]}')} /></Route>
                <Route exact path="/house-for-rent-in-dubai-marina"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"rent","locations":[{"value":"dubai-dubai-marina"}]}')} /></Route>
                <Route exact path="/house-for-rent-in-downtown-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"rent","locations":[{"value":"dubai-downtown-dubai"}]}')} /></Route>
                <Route exact path="/house-for-sale-in-dubai-marina"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"sale","locations":[{"value":"dubai-dubai-marina"}]}')} /></Route>
                <Route exact path="/house-for-sale-in-downtown-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"sale","locations":[{"value":"dubai-downtown-dubai"}]}')} /></Route>
                <Route exact path="/studio-for-rent-in-abu-dhabi"><PropertiesListPage initialFilters={JSON.parse('{"bedrooms":[0],"businessType":"rent","locations":[{"value":"abu-dhabi"}]}')} /></Route>
                <Route exact path="/studio-for-sale-in-abu-dhabi"><PropertiesListPage initialFilters={JSON.parse('{"bedrooms":[0],"businessType":"sale","locations":[{"value":"abu-dhabi"}]}')} /></Route>
                <Route exact path="/villa-for-rent-in-abu-dhabi"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"rent","locations":[{"value":"abu-dhabi"}]}')} /></Route>
                <Route exact path="/villa-for-sale-in-abu-dhabi"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"sale","locations":[{"value":"abu-dhabi"}]}')} /></Route>
                <Route exact path="/apartment-for-rent-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"rent"}')} /></Route>
                <Route exact path="/apartment-for-sale-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"APT":true},"category":0,"businessType":"sale"}')} /></Route>
                <Route exact path="/villa-for-rent-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"rent"}')} /></Route>
                <Route exact path="/villa-for-sale-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"sale"}')} /></Route>
                <Route exact path="/land-for-rent-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"LAN":true},"category":1,"businessType":"rent"}')} /></Route>
                <Route exact path="/land-for-sale-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"LAN":true},"category":1,"businessType":"sale"}')} /></Route>
                <Route exact path="/studio-for-rent-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"bedrooms":[0],"businessType":"rent"}')} /></Route>
                <Route exact path="/studio-for-sale-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"bedrooms":[0],"businessType":"sale"}')} /></Route>
                <Route exact path="/house-for-rent-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"rent"}')} /></Route>
                <Route exact path="/house-for-sale-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"VIL":true},"category":0,"businessType":"sale"}')} /></Route>
                <Route exact path="/luxury-for-rent-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"price":{"max":"Any","min":100000},"businessType":"rent"}')} /></Route>
                <Route exact path="/luxury-for-sale-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"price":{"max":"Any","min":100000},"businessType":"sale"}')} /></Route>
                <Route exact path="/commercial-for-rent-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"SHP":true,"SHW":true},"category":1,"businessType":"rent"}')} /></Route>
                <Route exact path="/commercial-for-sale-in-uae"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"SHP":true,"SHW":true},"category":1,"businessType":"sale"}')} /></Route>
                <Route exact path="/shop-for-rent-in-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"SHP":true},"category":1,"businessType":"rent","locations":[{"value":"dubai"}]}')} /></Route>
                <Route exact path="/shop-for-sale-in-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"SHP":true},"category":1,"businessType":"sale","locations":[{"value":"dubai"}]}')} /></Route>
                <Route exact path="/commercial-for-rent-in-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"SHP":true,"SHW":true},"category":1,"businessType":"rent","locations":[{"value":"dubai"}]}')} /></Route>
                <Route exact path="/commercial-for-sale-in-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"SHP":true,"SHW":true},"category":1,"businessType":"sale","locations":[{"value":"dubai"}]}')} /></Route>
                <Route exact path="/office-for-rent-in-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"OFF":true},"category":1,"businessType":"rent","locations":[{"value":"dubai"}]}')} /></Route>
                <Route exact path="/office-for-sale-in-dubai"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"OFF":true},"category":1,"businessType":"sale","locations":[{"value":"dubai"}]}')} /></Route>
                <Route exact path="/office-for-rent-in-abu-dhabi"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"OFF":true},"category":1,"businessType":"rent","locations":[{"value":"abu-dhabi"}]}')} /></Route>
                <Route exact path="/office-for-sale-in-abu-dhabi"><PropertiesListPage initialFilters={JSON.parse('{"propertyTypes":{"OFF":true},"category":1,"businessType":"sale","locations":[{"value":"abu-dhabi"}]}')} /></Route>

                {/* Not found */}
                <Route><NotFoundPage /></Route>
              </Switch>
            </MainLayout>
          </MyPZTheme>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;

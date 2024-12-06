import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, Dialog, DialogContent, FormControlLabel, Tab, Tabs } from '@mui/material'
import {
  RoomService,
  VisibilityOff,
  DirectionsCar,
  Speed,
  Navigation,
  AttachMoney,
  Public,
  FlashOn,
  ExpandMore,
  CheckBox,
} from '@mui/icons-material'
import L from 'leaflet'
import * as bookcarsTypes from ':bookcars-types'
import * as bookcarsHelper from ':bookcars-helper'
import env from '@/config/env.config'
import { strings as commonStrings } from '@/lang/common'
import { strings } from '@/lang/home'
import * as UserService from '@/services/UserService'
import * as SupplierService from '@/services/SupplierService'
import * as CountryService from '@/services/CountryService'
import * as LocationService from '@/services/LocationService'
import Layout from '@/components/Layout'
import SupplierCarrousel from '@/components/SupplierCarrousel'
import TabPanel, { a11yProps } from '@/components/TabPanel'
import LocationCarrousel from '@/components/LocationCarrousel'
import SearchForm from '@/components/SearchForm'
import Map from '@/components/Map'
import Footer from '@/components/Footer'

import Mini from '@/assets/img/mini.png'
import Midi from '@/assets/img/midi.png'
import Maxi from '@/assets/img/maxi.png'

import '@/assets/css/home.css'

const Home = () => {
  const [suppliers, setSuppliers] = useState<bookcarsTypes.User[]>([])
  const [countries, setCountries] = useState<bookcarsTypes.CountryInfo[]>([])
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropOffLocation, setDropOffLocation] = useState('')
  const [sameLocation, setSameLocation] = useState(true)
  const [tabValue, setTabValue] = useState(0)
  const [openLocationSearchFormDialog, setOpenLocationSearchFormDialog] = useState(false)
  const [locations, setLocations] = useState<bookcarsTypes.Location[]>([])
  const [ranges, setRanges] = useState([bookcarsTypes.CarRange.Mini, bookcarsTypes.CarRange.Midi])
  const [openRangeSearchFormDialog, setOpenRangeSearchFormDialog] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const onLoad = async () => {
    let _suppliers = await SupplierService.getAllSuppliers()
    _suppliers = _suppliers.filter((supplier) => supplier.avatar && !/no-image/i.test(supplier.avatar))
    bookcarsHelper.shuffle(_suppliers)
    setSuppliers(_suppliers)
    const _countries = await CountryService.getCountriesWithLocations('', true, env.MIN_LOCATIONS)
    setCountries(_countries)
    const _locations = await LocationService.getLocationsWithPosition()
    setLocations(_locations)

    const video = document.getElementById('cover') as HTMLVideoElement
    if (video) {
      video.muted = true
      video.play()
    } else {
      console.error('Cover video tag not loaded')
    }
  }

  const language = UserService.getLanguage()

  return (
    <Layout onLoad={onLoad} strict={false}>

      <div className="home">
        <div className="home-content">

          <div className="video">
            <video
              id="cover"
              muted={!env.isSafari}
              autoPlay={!env.isSafari}
              loop
              playsInline
              disablePictureInPicture
              onLoadedData={() => {
                setVideoLoaded(true)
              }}
            >
              <source src="cover.mp4" type="video/mp4" />
              <track kind="captions" />
            </video>
            {!videoLoaded && <div className="video-background" />}
          </div>

          <div className="home-title">{strings.TITLE}</div>
          <div className="home-cover">{strings.COVER}</div>
          {/* <div className="home-subtitle">{strings.SUBTITLE}</div> */}

        </div>

        <div className="search">
          <div className="home-search">
            <SearchForm />
          </div>
        </div>

        <div className="why">

          {/* <h1>{strings.WHY_TITLE}</h1> */}

          <div className="why-boxes">

            <div className="why-box">
              <div className="why-icon-wrapper">
                <RoomService className="why-icon" />
              </div>
              <div className="why-text-wrapper">
                <span className="why-title">{strings.WHY_SERVICE_TITLE}</span>
                <span className="why-text">{strings.WHY_SERVICE}</span>
              </div>
            </div>

            <div className="why-box">
              <div className="why-icon-wrapper">
                <VisibilityOff className="why-icon" />
              </div>
              <div className="why-text-wrapper">
                <span className="why-title">{strings.WHY_CHARGES_TITLE}</span>
                <span className="why-text">{strings.WHY_CHARGES}</span>
              </div>
            </div>

            <div className="why-box">
              <div className="why-icon-wrapper">
                <DirectionsCar className="why-icon" />
              </div>
              <div className="why-text-wrapper">
                <span className="why-title">{strings.WHY_FLEET_TITLE}</span>
                <span className="why-text">{strings.WHY_FLEET}</span>
              </div>
            </div>

            <div className="why-box">
              <div className="why-icon-wrapper">
                <Speed className="why-icon" />
              </div>
              <div className="why-text-wrapper">
                <span className="why-title">{strings.WHY_MILEAGE_TITLE}</span>
                <span className="why-text">{strings.WHY_MILEAGE}</span>
                <span className="why-text">{strings.WHY_MILEAGE_ASTERISK}</span>
              </div>
            </div>

          </div>
        </div>

        <div className="services">

          <h1>{strings.SERVICES_TITLE}</h1>

          <div className="services-boxes">

            <div className="services-box">
              <div className="services-icon-wrapper">
                <DirectionsCar className="services-icon" />
              </div>
              <div className="services-text-wrapper">
                <span className="services-title">{strings.SERVICES_FLEET_TITLE}</span>
                <span className="services-text">{strings.SERVICES_FLEET}</span>
              </div>
            </div>

            <div className="services-box">
              <div className="services-icon-wrapper">
                <Navigation className="services-icon" />
              </div>
              <div className="services-text-wrapper">
                <span className="services-title">{strings.SERVICES_FLEXIBLE_TITLE}</span>
                <span className="services-text">{strings.SERVICES_FLEXIBLE}</span>
              </div>
            </div>

            <div className="services-box">
              <div className="services-icon-wrapper">
                <AttachMoney className="services-icon" />
              </div>
              <div className="services-text-wrapper">
                <span className="services-title">{strings.SERVICES_PRICES_TITLE}</span>
                <span className="services-text">{strings.SERVICES_PRICES}</span>
              </div>
            </div>

            <div className="services-box">
              <div className="services-icon-wrapper">
                <Public className="services-icon" />
              </div>
              <div className="services-text-wrapper">
                <span className="services-title">{strings.SERVICES_BOOKING_ONLINE_TITLE}</span>
                <span className="services-text">{strings.SERVICES_BOOKING_ONLINE}</span>
              </div>
            </div>

            <div className="services-box">
              <div className="services-icon-wrapper">
                <FlashOn className="services-icon" />
              </div>
              <div className="services-text-wrapper">
                <span className="services-title">{strings.SERVICE_INSTANT_BOOKING_TITLE}</span>
                <span className="services-text">{strings.SERVICE_INSTANT_BOOKING}</span>
              </div>
            </div>

            <div className="services-box">
              <div className="services-icon-wrapper">
                <RoomService className="services-icon" />
              </div>
              <div className="services-text-wrapper">
                <span className="services-title">{strings.SERVICES_SUPPORT_TITLE}</span>
                <span className="services-text">{strings.SERVICES_SUPPORT}</span>
              </div>
            </div>

          </div>
        </div>

        <div className="home-suppliers" style={suppliers.length < 4 ? { margin: 0 } : undefined}>
          {suppliers.length > 3 && (
            <>
              <h1>{strings.SUPPLIERS_TITLE}</h1>
              <SupplierCarrousel suppliers={suppliers} />
            </>
          )}
        </div>

        {countries.length > 0 && (
          <div className="destinations">
            <h1>{strings.DESTINATIONS_TITLE}</h1>
            <div className="tabs">
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="destinations"
                TabIndicatorProps={{ sx: { display: env.isMobile ? 'none' : null } }}
                sx={{
                  '& .MuiTabs-flexContainer': {
                    flexWrap: 'wrap',
                  },
                }}
              >
                {
                  countries.map((country, index) => (
                    <Tab key={country._id} label={country.name?.toUpperCase()} {...a11yProps(index)} />
                  ))
                }
              </Tabs>

              {
                countries.map((country, index) => (
                  <TabPanel key={country._id} value={tabValue} index={index}>
                    <LocationCarrousel
                      locations={country.locations!}
                      onSelect={(location) => {
                        setPickupLocation(location._id)
                        setOpenLocationSearchFormDialog(true)
                      }}
                    />
                  </TabPanel>
                ))
              }
            </div>
          </div>
        )}

        <div className="car-size">
          <h1>{strings.CAR_SIZE_TITLE}</h1>
          <p>{strings.CAR_SIZE_TEXT}</p>
          <div className="boxes">
            <div className="box">
              <img alt="Mini" src={Mini} />
              <div className="box-content">
                <FormControlLabel
                  control={(
                    <Checkbox
                      defaultChecked
                      onChange={(e) => {
                        const _ranges = bookcarsHelper.cloneArray(ranges) || []
                        if (e.target.checked) {
                          _ranges.push(bookcarsTypes.CarRange.Mini)
                        } else {
                          _ranges.splice(_ranges.findIndex((r) => r === bookcarsTypes.CarRange.Mini), 1)
                        }
                        setRanges(_ranges)
                      }}
                    />
                  )}
                  label={strings.MINI}
                />
                <ul>
                  <li>
                    <span className="price">{bookcarsHelper.formatPrice(2.5, commonStrings.CURRENCY, language)}</span>
                    <span className="unit"> · phr</span>
                  </li>
                  <li>
                    <span className="price">{bookcarsHelper.formatPrice(40, commonStrings.CURRENCY, language)}</span>
                    <span className="unit"> · pday</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box">
              <img alt="Midi" src={Midi} />
              <div className="box-content">
                <FormControlLabel
                  control={(
                    <Checkbox
                      defaultChecked
                      onChange={(e) => {
                        const _ranges = bookcarsHelper.cloneArray(ranges) || []
                        if (e.target.checked) {
                          _ranges.push(bookcarsTypes.CarRange.Midi)
                        } else {
                          _ranges.splice(_ranges.findIndex((r) => r === bookcarsTypes.CarRange.Midi), 1)
                        }
                        setRanges(_ranges)
                      }}
                    />
                  )}
                  label={strings.MIDI}
                />
                <ul>
                  <li>
                    <span className="price">{bookcarsHelper.formatPrice(3.5, commonStrings.CURRENCY, language)}</span>
                    <span className="unit"> · phr</span>
                  </li>
                  <li>
                    <span className="price">{bookcarsHelper.formatPrice(50, commonStrings.CURRENCY, language)}</span>
                    <span className="unit"> · pday</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box">
              <img alt="Maxi" src={Maxi} />
              <div className="box-content">
                <FormControlLabel
                  control={(
                    <Checkbox
                      onChange={(e) => {
                        const _ranges = bookcarsHelper.cloneArray(ranges) || []
                        if (e.target.checked) {
                          _ranges.push(bookcarsTypes.CarRange.Maxi)
                        } else {
                          _ranges.splice(_ranges.findIndex((r) => r === bookcarsTypes.CarRange.Maxi), 1)
                        }
                        setRanges(_ranges)
                      }}
                    />
                  )}
                  label={strings.MAXI}
                />
                <ul>
                  <li>
                    <span className="price">{bookcarsHelper.formatPrice(4.5, commonStrings.CURRENCY, language)}</span>
                    <span className="unit"> · phr</span>
                  </li>
                  <li>
                    <span className="price">{bookcarsHelper.formatPrice(70, commonStrings.CURRENCY, language)}</span>
                    <span className="unit"> · pday</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            className="btn-primary btn-home"
            disabled={ranges.length === 0}
            onClick={() => {
              setOpenRangeSearchFormDialog(true)
            }}
          >
            {strings.SEARCH_FOR_CAR}
          </Button>
        </div>

        <div className="faq">
          <h2>{strings.FAQ_TITLE}</h2>
          <div className="questions">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />} className="accordion-title">{strings.FAQ_DOCUMENTS_TITLE}</AccordionSummary>
              <AccordionDetails className="accordion-details">{strings.FAQ_DOCUMENTS_TEXT}</AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />} className="accordion-title">{strings.FAQ_SERVICES_TITLE}</AccordionSummary>
              <AccordionDetails className="accordion-details">{strings.FAQ_SERVICES_TEXT}</AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />} className="accordion-title">{strings.FAQ_AGE_TITLE}</AccordionSummary>
              <AccordionDetails className="accordion-details">{strings.FAQ_AGE_TEXT}</AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />} className="accordion-title">{strings.FAQ_CANCEL_TITLE}</AccordionSummary>
              <AccordionDetails className="accordion-details">{strings.FAQ_CANCEL_TEXT}</AccordionDetails>
            </Accordion>
          </div>
          <Button
            variant="contained"
            className="btn-primary btn-home"
            href="/contact"
          >
            {strings.MORE_QUESTIONS}
          </Button>
        </div>

        <div className="home-map">
          <Map
            title={strings.MAP_TITLE}
            position={new L.LatLng(34.0268755, 1.6528399999999976)}
            initialZoom={5}
            locations={locations}
            onSelelectPickUpLocation={async (locationId) => {
              setPickupLocation(locationId)
              if (sameLocation) {
                setDropOffLocation(locationId)
              } else {
                setSameLocation(dropOffLocation === locationId)
              }
              setOpenLocationSearchFormDialog(true)
            }}
          // onSelelectDropOffLocation={async (locationId) => {
          //   setDropOffLocation(locationId)
          //   setSameLocation(pickupLocation === locationId)
          //   helper.info(strings.MAP_DROP_OFF_SELECTED)
          // }}
          />
        </div>

        <div className="customer-care">
          <div className="customer-care-wrapper">
            <div className="customer-care-text">
              <h1>{strings.CUSTOMER_CARE_TITLE}</h1>
              <h2>{strings.CUSTOMER_CARE_SUBTITLE}</h2>
              <div className="customer-care-content">{strings.CUSTOMER_CARE_TEXT}</div>
              <div className="customer-care-boxes">
                <div className="customer-care-box">
                  <CheckBox className="customer-care-icon" />
                  <span>{strings.CUSTOMER_CARE_ASSISTANCE}</span>
                </div>
                <div className="customer-care-box">
                  <CheckBox className="customer-care-icon" />
                  <span>{strings.CUSTOMER_CARE_MODIFICATION}</span>
                </div>
                <div className="customer-care-box">
                  <CheckBox className="customer-care-icon" />
                  <span>{strings.CUSTOMER_CARE_GUIDANCE}</span>
                </div>
                <div className="customer-care-box">
                  <CheckBox className="customer-care-icon" />
                  <span>{strings.CUSTOMER_CARE_SUPPORT}</span>
                </div>
              </div>
              <Button
                variant="contained"
                className="btn-primary btn-home"
                href="/contact"
              >
                {strings.CONTACT_US}
              </Button>
            </div>

            <div className="customer-care-img">
              <img src="/customer-care.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Dialog
        fullWidth={env.isMobile}
        maxWidth={false}
        open={openLocationSearchFormDialog}
        onClose={() => {
          setOpenLocationSearchFormDialog(false)
        }}
      >
        <DialogContent className="search-dialog-content">
          <SearchForm
            ranges={bookcarsHelper.getAllRanges()}
            pickupLocation={pickupLocation}
            onCancel={() => {
              setOpenLocationSearchFormDialog(false)
            }}
          />
        </DialogContent>
      </Dialog>

      <Dialog
        fullWidth={env.isMobile}
        maxWidth={false}
        open={openRangeSearchFormDialog}
        onClose={() => {
          setOpenRangeSearchFormDialog(false)
        }}
      >
        <DialogContent className="search-dialog-content">
          <SearchForm
            ranges={ranges}
            onCancel={() => {
              setOpenRangeSearchFormDialog(false)
            }}
          />
        </DialogContent>
      </Dialog>

      <Footer />
    </Layout>
  )
}

export default Home

import Env from '../config/env.config'
import { COPYRIGHT, REGISTERED } from './copyright'

const en = {
  GENERIC_ERROR: 'An unhandled error occurred.',
  CHANGE_LANGUAGE_ERROR: 'An error occurred while changing language.',
  UPDATED: 'Changes made successfully.',
  GO_TO_HOME: 'Go to the home page',
  FULL_NAME: 'Full name',
  EMAIL: 'Email',
  PASSWORD: 'Password',
  EMAIL_ALREADY_REGISTERED: 'This email address is already registered.',
  CONFIRM_PASSWORD: 'Confirm Password',
  PHONE: 'Phone',
  LOCATION: 'Location',
  BIO: 'Bio',
  IMAGE_REQUIRED: 'Please add an image.',
  LOADING: 'Loading...',
  PLEASE_WAIT: 'Please wait...',
  SEARCH: 'Search',
  SEARCH_PLACEHOLDER: 'Search...',
  CONFIRM_TITLE: 'Confirmation',
  PASSWORD_LENGTH_ERROR: 'Password must be at least 6 characters long.',
  PASSWORDS_DONT_MATCH: "Passwords don't match.",
  CREATE: 'Create',
  UPDATE: 'Save',
  DELETE: 'Delete',
  SAVE: 'Save',
  CANCEL: 'Cancel',
  CHANGE_PASSWORD: 'Change Password',
  CHANGE_PASSWORD_TITLE: 'Password modification',
  CURRENCY: 'DH',
  DELETE_AVATAR_CONFIRM: 'Are you sure you want to delete the picture?',
  UPLOAD_IMAGE: 'Upload image',
  DELETE_IMAGE: 'Delete image',
  UNCHECK_ALL: 'Uncheck all',
  CHECK_ALL: 'Check all',
  CLOSE: 'Close',
  BOOKING_STATUS: 'Status',
  BOOKING_STATUS_VOID: 'Void',
  BOOKING_STATUS_PENDING: 'Pending',
  BOOKING_STATUS_DEPOSIT: 'Deposit',
  BOOKING_STATUS_PAID: 'Paid',
  BOOKING_STATUS_RESERVED: 'Reserved',
  BOOKING_STATUS_CANCELLED: 'Cancelled',
  FROM: 'From',
  TO: 'To',
  OPTIONAL: 'Optional Parameters',
  AND: 'and',
  RECORD_TYPE_ADMIN: 'Admin',
  RECORD_TYPE_COMPANY: 'Company',
  RECORD_TYPE_USER: 'Driver',
  TYPE: 'Type',
  CONFIRM: 'Confirm',
  USER: 'User',
  INFO: 'Information',
  USER_TYPE_REQUIRED: 'Please fill in the field: Type',
  FIX_ERRORS: 'Please fix errors.',
  SEND_MESSAGE: 'Send a message',
  VERIFIED: 'Verified account',
  CAR: 'car',
  RESEND_ACTIVATION_LINK: 'Resend account activation link',
  ACTIVATION_EMAIL_SENT: 'Activation email sent.',
  EMAIL_NOT_VALID: 'Invalid email address',
  PICKUP_LOCATION: 'Pickup location',
  DROP_OFF_LOCATION: 'Drop-off location',
  PHONE_NOT_VALID: 'Invalid phone number',
  ALL: 'All',
  TOS: 'I read and agree with the Terms of Use.',
  BIRTH_DATE: 'Birth date',
  RECAPTCHA_ERROR: 'Fill out the captcha to continue.',
  TOS_ERROR: 'Please accept the Terms of Use.',
  BIRTH_DATE_NOT_VALID: 'You must be at least ' + Env.MINIMUM_AGE + ' years old.',
  BIRTH_DATE_NOT_VALID_PART1: 'The driver must be at least',
  BIRTH_DATE_NOT_VALID_PART2: 'years old.',
  SUPPLIER: 'Supplier',
  COPYRIGHT_PART1: COPYRIGHT,
  COPYRIGHT_PART2: REGISTERED,
  COPYRIGHT_PART3: '. All rights reserved.',
  SAME_LOCATION: 'Return to same location',
  FROM_DATE: 'Pickup date',
  FROM_TIME: 'Pickup time',
  TO_DATE: 'Drop-off date',
  TO_TIME: 'Drop-off time',
  PICKUP_LOCATION_EMPTY: 'Please enter a pick up location.',
  DROP_OFF_LOCATION_EMPTY: 'Please enter a drop-off location.',
  HOME: 'Home',
  ABOUT: 'About',
  VALIDATE_EMAIL:
    "A validation email has been sent to your email address. Please check your mailbox and validate your account by clicking the link in the email. It will be expire after one day. If you didn't receive the validation email click on resend.",
  RESEND: 'Resend',
  VALIDATION_EMAIL_SENT: 'Validation email sent.',
  VALIDATION_EMAIL_ERROR: 'An error occurred while sending validation email.',
  TOS: 'Terms of Service',
  CONTACT: 'Contact',
  SIGN_IN: 'Sign in',
  SIGN_IN_TITLE: 'Sign in',
  EMAIL: 'Email',
  PASSWORD: 'Password',
  SIGN_UP: 'Sign up',
  SIGN_UP_TITLE: 'Sign up',
  SIGN_IN_ERROR: 'Incorrect email or password.',
  IS_BLACKLISTED: 'Your account is suspended.',
  FORGOT_PASSWORD: 'Forgot password?',
  FULL_NAME: 'Full name',
  EMAIL: 'Email',
  EMAIL_ALREADY_REGISTERED: 'This email address is already registered.',
  PHONE: 'Phone',
  PASSWORD: 'Password',
  CONFIRM_PASSWORD: 'Confirm Password',
  ACCEPT_TOS: 'I read and agree with the Terms of Use.',
  TOS_ERROR: 'Please accept the Terms of Use.',
  RESET_PASSWORD: 'Please enter your email address so we can send you an email to reset your password.',
  RESET: 'Reset',
  RESET_EMAIL_SENT: 'Password reset email sent.',
  REQUIRED: 'This field is required',
  SIGN_OUT: 'Sign out',
  BOOKINGS: 'Bookings',
  LANGUAGE: 'Language',
  LANGUAGE_FR: 'Français',
  LANGUAGE_EN: 'English',
  CARS: 'Cars',
  EMAIL_ERROR: 'Email address not registered',
  RESET_EMAIL_SENT: 'Password reset email sent.',
  SETTINGS: 'Settings',
  ENABLE_EMAIL_NOTIFICATIONS: 'Enable email notifications',
  SETTINGS_UPDATED: 'Settings updated successfully.',
  CURRENT_PASSWORD: 'Current Password',
  PASSWORD_ERROR: 'Wrong password',
  NEW_PASSWORD: 'New Password',
  PASSWORD_UPDATE: 'Password changed successfully.',
  PASSWORD_UPDATE_ERROR: 'An error occurred while updating password.',
  EMPTY_CAR_LIST: 'No cars.',
  CAR_CURRENCY: ' DH/day',
  DIESEL_SHORT: 'D',
  GASOLINE_SHORT: 'G',
  GEARBOX_MANUAL_SHORT: 'M',
  GEARBOX_AUTOMATIC_SHORT: 'A',
  FUEL_POLICY: 'Fuel policy',
  FUEL_POLICY_LIKE_FOR_LIKE: 'Like for Like',
  FUEL_POLICY_FREE_TANK: 'Free tank',
  MILEAGE: 'Mileage',
  MILEAGE_UNIT: 'KM/day',
  UNLIMITED: 'Unlimited',
  LIMITED: 'Limited',
  CANCELLATION: 'Cancellation',
  AMENDMENTS: 'Amendments',
  THEFT_PROTECTION: 'Theft protection',
  COLLISION_DAMAGE_WAVER: 'Collision damage waiver',
  FULL_INSURANCE: 'Full insurance',
  ADDITIONAL_DRIVER: 'Additional driver',
  INCLUDED: 'Included',
  UNAVAILABLE: 'Unavailable',
  PRICE_DAYS_PART_1: 'Price for',
  PRICE_DAYS_PART_2: 'day',
  PRICE_PER_DAY: 'Price per day:',
  BOOK: 'Choose this car',
  STAY_CONNECTED: 'Stay connected',
  CREATE_BOOKING: 'Book Now',
  BOOKING_OPTIONS: 'Your booking options',
  BOOKING_DETAILS: 'Your booking details',
  DAYS: 'Days',
  CAR: 'Car',
  COMPANY: 'Company',
  COST: 'COST',
  DRIVER_DETAILS: 'Driver details',
  EMAIL_INFO: 'You will receive a confirmation email at this address.',
  PHONE_INFO: 'If we need to contact you urgently.',
  PAYMENT: 'Secure payment',
  CARD_NAME: 'Name on Card',
  CARD_NUMBER: 'Card number',
  CARD_MONTH: 'Month (MM)',
  CARD_MONTH_NOT_VALID: 'Invalid month',
  CARD_YEAR: 'Year (YY)',
  CARD_YEAR_NOT_VALID: 'Invalid year',
  CARD_NUMBER_NOT_VALID: 'Invalid card number',
  CVV: 'Card Validation Code',
  CVV_NOT_VALID: 'Invalid Card Validation Code',
  BOOK_NOW: 'Book  now',
  SECURE_PAYMENT_INFO: 'Your data is protected by SSL secure payment.',
  CARD_DATE_ERROR: 'Invalid card date.',
  BOOKING_SUCCESS: 'Your booking and payment were successfully done. We have sent you a confirmation email.',
  BOOKING_EMAIL_ALREADY_REGISTERED: 'This email address is already registered. Please sign in.',
  EMPTY_BOOKING_LIST: 'No bookings.',
  OPTIONS: 'Options',
  ENGINE: 'Engine',
  DIESEL: 'Diesel',
  GASOLINE: 'Gasoline',
  GEARBOX: 'Gearbox',
  GEARBOX_AUTOMATIC: 'Automatic',
  GEARBOX_MANUAL: 'Manual',
  ENGINE: 'Engine',
  DEPOSIT: 'Deposit at pick-up',
  LESS_THAN_2500: 'Less than 2500 DH',
  LESS_THAN_5000: 'Less than 5000 DH',
  LESS_THAN_7500: 'Less than 7500 DH',
  CANCEL_BOOKING_BTN: 'Cancel this booking',
  CANCEL_BOOKING: 'Are you sure you want to cancel this booking?',
  CANCEL_BOOKING_REQUEST_SENT: 'Your cancel request hes been submited. We will contact you to finalize the cancellation procedure.',
  OF: 'of',
  EMPTY_NOTIFICATION_LIST: 'No notifications',
  DELETE_NOTIFICATION: 'Are you sure you want to delete this notification?',
  DELETE_NOTIFICATIONS: 'Are you sure you want to delete these notifications?',
  DELETE_AVATAR: 'Are you sure you want to delete your profile picture?',
  CAMERA_PERMISSION: 'Permission to access camera roll is required!',
  BOOKING_DELETED: 'This booking was deleted.',
  PAYMENT_OPTIONS: 'Payment options',
  PAY_LATER: 'Paye later',
  PAY_LATER_INFO: 'Free amendments and cancellation',
  PAY_ONLINE: 'Pay online',
  PAY_ONLINE_INFO: 'Amendments and cancellation under conditions',
  PAY_LATER_SUCCESS: 'Your booking were successfully done. We have sent you a confirmation email.',
}

export default en

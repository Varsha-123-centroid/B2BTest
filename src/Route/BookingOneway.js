import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const sample1={
    "Response": {
        "B2B2BStatus": false,
        "Error": {
            "ErrorCode": 0,
            "ErrorMessage": ""
        },
        "ResponseStatus": 1,
        "TraceId": "ac3aec1e-3b86-421e-b6b1-ddb08c25fbff",
        "Response": {
            "PNR": "X97VFT",
            "BookingId": 1906910,
            "SSRDenied": false,
            "SSRMessage": null,
            "Status": 1,
            "IsPriceChanged": false,
            "IsTimeChanged": false,
            "FlightItinerary": {
                "CommentDetails": null,
                "IsAutoReissuanceAllowed": true,
                "IssuancePcc": "QPDEL7005B_03",
                "JourneyType": 1,
                "SearchCombinationType": 2,
                "TripIndicator": 1,
                "BookingAllowedForRoamer": true,
                "BookingId": 1906910,
                "IsCouponAppilcable": true,
                "IsManual": false,
                "PNR": "X97VFT",
                "AgentReferenceNo": "sonam1234567890",
                "IsDomestic": true,
                "ResultFareType": "RegularFare",
                "Source": 109,
                "Origin": "DEL",
                "Destination": "BOM",
                "AirlineCode": "QP",
                "ValidatingAirlineCode": "QP",
                "AirlineRemark": "",
                "IsLCC": true,
                "NonRefundable": false,
                "FareType": "PUB",
                "CreditNoteNo": null,
                "Fare": {
                    "Currency": "INR",
                    "BaseFare": 1100,
                    "Tax": 2594,
                    "TaxBreakup": [
                        {
                            "key": "PSF",
                            "value": 182.00
                        },
                        {
                            "key": "UDF",
                            "value": 122.00
                        },
                        {
                            "key": "YR",
                            "value": 150.00
                        },
                        {
                            "key": "TotalTax",
                            "value": 1094.00
                        },
                        {
                            "key": "OtherTaxes",
                            "value": 640.00
                        },
                        {
                            "key": "K3",
                            "value": 0
                        }
                    ],
                    "YQTax": 0,
                    "AdditionalTxnFeeOfrd": 0,
                    "AdditionalTxnFeePub": 0,
                    "PGCharge": 0,
                    "OtherCharges": 0,
                    "ChargeBU": [
                        {
                            "key": "TBOMARKUP",
                            "value": 0
                        },
                        {
                            "key": "GLOBALPROCUREMENTCHARGE",
                            "value": 0
                        },
                        {
                            "key": "OTHERCHARGE",
                            "value": 0
                        },
                        {
                            "key": "CONVENIENCECHARGE",
                            "value": 0
                        }
                    ],
                    "Discount": 0.00,
                    "PublishedFare": 8744,
                    "CommissionEarned": 0,
                    "PLBEarned": 0,
                    "IncentiveEarned": 0,
                    "OfferedFare": 8744,
                    "TdsOnCommission": 0,
                    "TdsOnPLB": 0,
                    "TdsOnIncentive": 0,
                    "ServiceFee": 0,
                    "TotalBaggageCharges": 5050,
                    "TotalMealCharges": 0,
                    "TotalSeatCharges": 0,
                    "TotalSpecialServiceCharges": 0
                },
                "CreditNoteCreatedOn": null,
                "Passenger": [
                    {
                        "BarcodeDetails": {
                            "Id": 3135615,
                            "Barcode": [
                                {
                                    "Index": 1,
                                    "Format": "PDF417",
                                    "Content": "M1MANGALATH/SUNIL RAJ  X97VFT DELBOMQP 1128 238Y00000000 100",
                                    "BarCodeInBase64": null,
                                    "JourneyWayType": 3
                                }
                            ]
                        },
                        "DocumentDetails": null,
                        "GuardianDetails": null,
                        "PaxId": 3135615,
                        "Title": "Mr",
                        "FirstName": "Sunil Raj",
                        "LastName": "Mangalath",
                        "PaxType": 1,
                        "DateOfBirth": "1987-11-06T00:00:00",
                        "Gender": 1,
                        "IsPANRequired": false,
                        "IsPassportRequired": false,
                        "PAN": "",
                        "PassportNo": "",
                        "AddressLine1": "Karayamuttam",
                        "AddressLine2": "Thrissur",
                        "Fare": {
                            "Currency": "INR",
                            "BaseFare": 550,
                            "Tax": 547,
                            "TaxBreakup": [
                                {
                                    "key": "K3",
                                    "value": 0
                                },
                                {
                                    "key": "PSF",
                                    "value": 91.00
                                },
                                {
                                    "key": "UDF",
                                    "value": 61.00
                                },
                                {
                                    "key": "YR",
                                    "value": 75.00
                                },
                                {
                                    "key": "TotalTax",
                                    "value": 547.00
                                },
                                {
                                    "key": "OtherTaxes",
                                    "value": 320.00
                                }
                            ],
                            "YQTax": 0,
                            "AdditionalTxnFeeOfrd": 0,
                            "AdditionalTxnFeePub": 0,
                            "PGCharge": 0,
                            "OtherCharges": 0,
                            "ChargeBU": [
                                {
                                    "key": "TBOMARKUP",
                                    "value": 0
                                },
                                {
                                    "key": "GLOBALPROCUREMENTCHARGE",
                                    "value": 0
                                },
                                {
                                    "key": "OTHERCHARGE",
                                    "value": 0
                                },
                                {
                                    "key": "CONVENIENCECHARGE",
                                    "value": 0
                                }
                            ],
                            "Discount": 0.00,
                            "PublishedFare": 3622,
                            "CommissionEarned": 0,
                            "PLBEarned": 0,
                            "IncentiveEarned": 0,
                            "OfferedFare": 3622,
                            "TdsOnCommission": 0,
                            "TdsOnPLB": 0,
                            "TdsOnIncentive": 0,
                            "ServiceFee": 0,
                            "TotalBaggageCharges": 2525,
                            "TotalMealCharges": 0,
                            "TotalSeatCharges": 0,
                            "TotalSpecialServiceCharges": 0
                        },
                        "City": "Thrissur",
                        "CountryCode": "IN",
                        "CountryName": "India",
                        "Nationality": "IN",
                        "ContactNo": "9879834877",
                        "Email": "harsh123@tbtq.in",
                        "IsLeadPax": true,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Baggage": [
                            {
                                "AirlineCode": "QP",
                                "FlightNumber": "1128",
                                "WayType": 2,
                                "Code": "XC05",
                                "Description": 2,
                                "Weight": 5,
                                "Currency": "INR",
                                "Price": 2525,
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "Text": "5 kgs"
                            }
                        ],
                        "MealDynamic": [
                            {
                                "AirlineCode": "QP",
                                "FlightNumber": "1128",
                                "WayType": 2,
                                "Code": "NoMeal",
                                "Description": 2,
                                "AirlineDescription": null,
                                "Quantity": 0,
                                "Currency": "INR",
                                "Price": 0,
                                "Origin": "DEL",
                                "Destination": "BOM"
                            }
                        ],
                        "Ssr": [],
                        "Ticket": {
                            "TicketId": 2193319,
                            "TicketNumber": "X97VFT",
                            "IssueDate": "2024-07-06T11:09:04",
                            "ValidatingAirline": "022",
                            "Remarks": "",
                            "ServiceFeeDisplayType": "ShowInTax",
                            "Status": "OK",
                            "ConjunctionNumber": "",
                            "TicketType": "N"
                        },
                        "GSTCompanyAddress": "",
                        "GSTCompanyContactNumber": "",
                        "GSTCompanyEmail": "",
                        "GSTCompanyName": "",
                        "GSTNumber": "",
                        "SegmentAdditionalInfo": [
                            {
                                "FareBasis": "B0O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg|5",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            }
                        ]
                    },
                    {
                        "BarcodeDetails": {
                            "Id": 3135616,
                            "Barcode": [
                                {
                                    "Index": 1,
                                    "Format": "PDF417",
                                    "Content": "M1KRISHAN/SUMANRAI     X97VFT DELBOMQP 1128 238Y00000000 100",
                                    "BarCodeInBase64": null,
                                    "JourneyWayType": 3
                                }
                            ]
                        },
                        "DocumentDetails": null,
                        "GuardianDetails": null,
                        "PaxId": 3135616,
                        "Title": "Mstr",
                        "FirstName": "sumanrai",
                        "LastName": "Krishan",
                        "PaxType": 2,
                        "DateOfBirth": "2019-12-06T00:00:00",
                        "Gender": 1,
                        "IsPANRequired": false,
                        "IsPassportRequired": false,
                        "PAN": "",
                        "PassportNo": "",
                        "AddressLine1": "Karayamuttam",
                        "AddressLine2": "Thrissur",
                        "Fare": {
                            "Currency": "INR",
                            "BaseFare": 550,
                            "Tax": 547,
                            "TaxBreakup": [
                                {
                                    "key": "K3",
                                    "value": 0
                                },
                                {
                                    "key": "PSF",
                                    "value": 91.00
                                },
                                {
                                    "key": "UDF",
                                    "value": 61.00
                                },
                                {
                                    "key": "YR",
                                    "value": 75.00
                                },
                                {
                                    "key": "TotalTax",
                                    "value": 547.00
                                },
                                {
                                    "key": "OtherTaxes",
                                    "value": 320.00
                                }
                            ],
                            "YQTax": 0,
                            "AdditionalTxnFeeOfrd": 0,
                            "AdditionalTxnFeePub": 0,
                            "PGCharge": 0,
                            "OtherCharges": 0,
                            "ChargeBU": [
                                {
                                    "key": "TBOMARKUP",
                                    "value": 0
                                },
                                {
                                    "key": "GLOBALPROCUREMENTCHARGE",
                                    "value": 0
                                },
                                {
                                    "key": "OTHERCHARGE",
                                    "value": 0
                                },
                                {
                                    "key": "CONVENIENCECHARGE",
                                    "value": 0
                                }
                            ],
                            "Discount": 0.00,
                            "PublishedFare": 3622,
                            "CommissionEarned": 0,
                            "PLBEarned": 0,
                            "IncentiveEarned": 0,
                            "OfferedFare": 3622,
                            "TdsOnCommission": 0,
                            "TdsOnPLB": 0,
                            "TdsOnIncentive": 0,
                            "ServiceFee": 0,
                            "TotalBaggageCharges": 2525,
                            "TotalMealCharges": 0,
                            "TotalSeatCharges": 0,
                            "TotalSpecialServiceCharges": 0
                        },
                        "City": "Thrissur",
                        "CountryCode": "IN",
                        "CountryName": "India",
                        "Nationality": "IN",
                        "ContactNo": "9879834877",
                        "Email": "harsh123@tbtq.in",
                        "IsLeadPax": false,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Baggage": [
                            {
                                "AirlineCode": "QP",
                                "FlightNumber": "1128",
                                "WayType": 2,
                                "Code": "XC05",
                                "Description": 2,
                                "Weight": 5,
                                "Currency": "INR",
                                "Price": 2525,
                                "Origin": "DEL",
                                "Destination": "BOM",
                                "Text": "5 kgs"
                            }
                        ],
                        "MealDynamic": [
                            {
                                "AirlineCode": "QP",
                                "FlightNumber": "1128",
                                "WayType": 2,
                                "Code": "NoMeal",
                                "Description": 2,
                                "AirlineDescription": null,
                                "Quantity": 0,
                                "Currency": "INR",
                                "Price": 0,
                                "Origin": "DEL",
                                "Destination": "BOM"
                            }
                        ],
                        "Ssr": [],
                        "Ticket": {
                            "TicketId": 2193320,
                            "TicketNumber": "X97VFT",
                            "IssueDate": "2024-07-06T11:09:04",
                            "ValidatingAirline": "022",
                            "Remarks": "",
                            "ServiceFeeDisplayType": "ShowInTax",
                            "Status": "OK",
                            "ConjunctionNumber": "",
                            "TicketType": "N"
                        },
                        "GSTCompanyAddress": "",
                        "GSTCompanyContactNumber": "",
                        "GSTCompanyEmail": "",
                        "GSTCompanyName": "",
                        "GSTNumber": "",
                        "SegmentAdditionalInfo": [
                            {
                                "FareBasis": "B0O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg|5",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            }
                        ]
                    },
                    {
                        "BarcodeDetails": {
                            "Id": 3135617,
                            "Barcode": [
                                {
                                    "Index": 1,
                                    "Format": "PDF417",
                                    "Content": "M1KRISHNA/SAM          X97VFT DELBOMQP 1128 238Y00000000 100",
                                    "BarCodeInBase64": null,
                                    "JourneyWayType": 3
                                }
                            ]
                        },
                        "DocumentDetails": null,
                        "GuardianDetails": null,
                        "PaxId": 3135617,
                        "Title": "Mstr",
                        "FirstName": "Sam",
                        "LastName": "Krishna",
                        "PaxType": 3,
                        "DateOfBirth": "2023-12-06T00:00:00",
                        "Gender": 1,
                        "IsPANRequired": false,
                        "IsPassportRequired": false,
                        "PAN": "",
                        "PassportNo": "",
                        "AddressLine1": "Karayamuttam",
                        "AddressLine2": "Thrissur",
                        "Fare": {
                            "Currency": "INR",
                            "BaseFare": 0,
                            "Tax": 1500,
                            "TaxBreakup": [
                                {
                                    "key": "K3",
                                    "value": 0
                                }
                            ],
                            "YQTax": 0,
                            "AdditionalTxnFeeOfrd": 0,
                            "AdditionalTxnFeePub": 0,
                            "PGCharge": 0,
                            "OtherCharges": 0,
                            "ChargeBU": [
                                {
                                    "key": "TBOMARKUP",
                                    "value": 0
                                },
                                {
                                    "key": "GLOBALPROCUREMENTCHARGE",
                                    "value": 0
                                },
                                {
                                    "key": "OTHERCHARGE",
                                    "value": 0
                                },
                                {
                                    "key": "CONVENIENCECHARGE",
                                    "value": 0
                                }
                            ],
                            "Discount": 0.00,
                            "PublishedFare": 1500,
                            "CommissionEarned": 0,
                            "PLBEarned": 0,
                            "IncentiveEarned": 0,
                            "OfferedFare": 1500,
                            "TdsOnCommission": 0,
                            "TdsOnPLB": 0,
                            "TdsOnIncentive": 0,
                            "ServiceFee": 0,
                            "TotalBaggageCharges": 0,
                            "TotalMealCharges": 0,
                            "TotalSeatCharges": 0,
                            "TotalSpecialServiceCharges": 0
                        },
                        "City": "Thrissur",
                        "CountryCode": "IN",
                        "CountryName": "India",
                        "Nationality": "IN",
                        "ContactNo": "9879834877",
                        "Email": "harsh123@tbtq.in",
                        "IsLeadPax": false,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Ssr": [],
                        "Ticket": {
                            "TicketId": 2193321,
                            "TicketNumber": "X97VFT",
                            "IssueDate": "2024-07-06T11:09:04",
                            "ValidatingAirline": "022",
                            "Remarks": "",
                            "ServiceFeeDisplayType": "ShowInTax",
                            "Status": "OK",
                            "ConjunctionNumber": "",
                            "TicketType": "N"
                        },
                        "GSTCompanyAddress": "",
                        "GSTCompanyContactNumber": "",
                        "GSTCompanyEmail": "",
                        "GSTCompanyName": "",
                        "GSTNumber": "",
                        "SegmentAdditionalInfo": [
                            {
                                "FareBasis": "B0O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "0 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            }
                        ]
                    }
                ],
                "CancellationCharges": null,
                "Segments": [
                    {
                        "Baggage": "15 Kg",
                        "CabinBaggage": "7 Kg",
                        "CabinClass": 2,
                        "SupplierFareClass": null,
                        "TripIndicator": 1,
                        "SegmentIndicator": 1,
                        "Airline": {
                            "AirlineCode": "QP",
                            "AirlineName": "Akasa Air",
                            "FlightNumber": "1128",
                            "FareClass": "BC",
                            "OperatingCarrier": ""
                        },
                        "AirlinePNR": "",
                        "Origin": {
                            "Airport": {
                                "AirportCode": "DEL",
                                "AirportName": "Indira Gandhi Airport",
                                "Terminal": "T2",
                                "CityCode": "DEL",
                                "CityName": "Delhi",
                                "CountryCode": "IN",
                                "CountryName": "India"
                            },
                            "DepTime": "2024-08-25T16:10:00"
                        },
                        "Destination": {
                            "Airport": {
                                "AirportCode": "BOM",
                                "AirportName": "Chhatrapati Shivaji International Airport",
                                "Terminal": "T1",
                                "CityCode": "BOM",
                                "CityName": "Mumbai",
                                "CountryCode": "IN",
                                "CountryName": "India"
                            },
                            "ArrTime": "2024-08-25T18:20:00"
                        },
                        "Duration": 130,
                        "GroundTime": 0,
                        "Mile": 0,
                        "StopOver": false,
                        "FlightInfoIndex": "",
                        "StopPoint": "",
                        "StopPointArrivalTime": "0001-01-01T00:00:00",
                        "StopPointDepartureTime": "0001-01-01T00:00:00",
                        "Craft": "7BH",
                        "Remark": null,
                        "IsETicketEligible": true,
                        "FlightStatus": "Confirmed",
                        "Status": "HK",
                        "FareClassification": null
                    }
                ],
                "FareRules": [
                    {
                        "Origin": "DEL",
                        "Destination": "BOM",
                        "Airline": "QP",
                        "FareBasisCode": "B0O7RBIX",
                        "FareRuleDetail": "<div style=\"font-size:12pt;font-family:&quot;Microsoft Sans Serif&quot;;\"><p style=\"font-size:8.5pt;margin:0;\">Test Rule </p></div><br /><br /><br/> <br/><ul><li>APART FROM AIRLINE CHARGES,GST+RAF+ APPLICABLE CHARGES IF ANY, WILL BE CHARGED.</li><li>MENTIONED FEE ARE INDICATIVE PER PAX AND PER SECTOR.</li><li>FOR DOMESTIC BOOKINGS, PASSENGERS ARE REQUIRED TO SUBMIT THE CANCELLATION OR REISSUE REQUEST AT LEAST 2 HOURS BEFORE THE AIRLINES CANCELLATION AND REISSUE POLICY.</li><li>FOR INTERNATIONAL BOOKINGS, PASSENGERS ARE REQUIRED TO SUBMIT THE CANCELLATION OR REISSUE REQUEST AT LEAST 4 HOURS BEFORE THE AIRLINES CANCELLATION AND REISSUE POLICY.</li></ul>",
                        "FareRestriction": null
                    }
                ],
                "MiniFareRules": [
                    {
                        "JourneyPoints": "",
                        "Type": "",
                        "From": "",
                        "To": "",
                        "Unit": "",
                        "Details": ""
                    }
                ],
                "PenaltyCharges": {},
                "Status": 5,
                "Invoice": [
                    {
                        "CreditNoteGSTIN": null,
                        "GSTIN": null,
                        "InvoiceCreatedOn": "2024-07-06T11:09:05",
                        "InvoiceId": 8389,
                        "InvoiceNo": "IW/2425/8389",
                        "InvoiceAmount": 8744.00,
                        "Remarks": "",
                        "InvoiceStatus": 3
                    }
                ],
                "InvoiceAmount": 8744.00,
                "InvoiceNo": "IW/2425/8389",
                "InvoiceStatus": 3,
                "InvoiceCreatedOn": "2024-07-06T11:09:05",
                "Remarks": "",
                "IsWebCheckInAllowed": false
            },
            "TicketStatus": 1
        }
    }
};
const ticketStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap');

  .ticket-wrapper {
    max-width: 860px;
    margin: 0 auto;
    background: #fff;
    border: 1px solid #ccc;
    padding: 24px 28px;
    font-family: 'Source Sans 3', Arial, sans-serif;
    font-size: 13px;
    color: #222;
    box-sizing: border-box;
  }
  .ticket-wrapper *, .ticket-wrapper *::before, .ticket-wrapper *::after {
    box-sizing: border-box;
  }
  .ticket-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 18px;
  }
  .ticket-agency-info {
    font-size: 12px;
    line-height: 1.6;
  }
  .ticket-agency-info strong { font-size: 13px; }
  .ticket-title-block { text-align: center; flex: 1; }
  .ticket-title-block h1 {
    font-size: 26px;
    font-weight: 700;
    color: #222;
    letter-spacing: 1px;
    margin: 0;
  }
  .ticket-status-pnr { text-align: right; }
  .ticket-badge-confirmed {
    display: inline-block;
    border: 2px solid #2e7d32;
    color: #2e7d32;
    font-weight: 700;
    font-size: 13px;
    padding: 3px 14px;
    border-radius: 4px;
    margin-bottom: 6px;
  }
  .ticket-pnr-line {
    font-size: 14px;
    font-weight: 700;
    color: #d4860a;
  }
  .ticket-issued-line { font-size: 11.5px; color: #555; }

  .ticket-table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }
  .ticket-table th, .ticket-table td {
    border: 1px solid #c0c0c0;
    padding: 7px 10px;
    font-size: 12.5px;
  }
  .ticket-table thead th {
    background: #d9e4f0;
    font-weight: 700;
    color: #1a1a1a;
    font-size: 12.5px;
  }
  .ticket-section-label {
    background: #eef3fa;
    font-weight: 600;
    font-size: 12.5px;
    color: #333;
  }

  .ticket-flight-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 13px;
  }
  .ticket-airline-badge {
    width: 34px; height: 34px;
    background: #1a3f6f;
    border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-weight: 900; font-size: 11px;
    flex-shrink: 0;
    text-align: center;
    line-height: 1.1;
  }
  .ticket-flight-sub { font-size: 11.5px; color: #555; font-weight: 400; }
  .ticket-airport-code { font-size: 18px; font-weight: 700; }
  .ticket-airport-name { font-size: 11px; color: #555; }
  .ticket-terminal-time { font-size: 11.5px; color: #333; }
  .ticket-dep-time { font-weight: 700; color: #111; }
  .ticket-arrow-cell { text-align: center; color: #e87722; font-size: 20px; vertical-align: middle; }

  .ticket-anc-header { background: #d9e4f0; font-weight: 700; }
  .ticket-anc-passenger { font-weight: 700; background: #f5f5f5; }
  .ticket-anc-label { font-weight: 700; font-size: 12px; }
  .ticket-baggage-detail { font-size: 12px; line-height: 1.7; }

  .ticket-bottom-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin-top: 14px;
  }
  .ticket-bottom-section.no-price {
    grid-template-columns: 1fr 1fr;
  }
  .ticket-important-box { font-size: 12px; line-height: 1.7; }
  .ticket-important-box .red-bold { color: #c00; font-weight: 700; }
  .ticket-important-box .bold { font-weight: 700; }

  .ticket-general-info { font-size: 11.5px; }
  .ticket-general-info strong { display: block; margin-bottom: 6px; font-size: 12px; text-decoration: underline; }
  .ticket-general-info ul { padding-left: 16px; line-height: 1.8; margin: 0; }

  .ticket-payment-box { font-size: 12.5px; }
  .ticket-payment-box table { width: 100%; border-collapse: collapse; }
  .ticket-payment-box td { border: 1px solid #ccc; padding: 5px 10px; }
  .ticket-pay-header {
    background: #d9e4f0;
    font-weight: 700;
    font-size: 13px;
    padding: 6px 10px;
    border: 1px solid #ccc;
  }
  .ticket-total-row td { font-weight: 700; background: #f5f5f5; }
  .ticket-hr { border: none; border-top: 1px solid #ccc; margin: 12px 0; }
`;

// ── Barcode SVG placeholder ──────────────────────────────────
const BarcodeSVG = () => (
  <svg width="130" height="48" viewBox="0 0 130 48" xmlns="http://www.w3.org/2000/svg">
    {[0,4,7,12,16,19,23,26,31,34,38,41,46,50,53,57,60,65,69,72,76,79,84,88,91,95,98,103,107,110,114,119,122,126].map((x, i) => (
      <rect key={i} x={x} y="0" width={[2,1,3,2,1,2,1,3,1,2,1,3,2,1,2,1,3,2,1,2,1,3,2,1,2,1,3,2,1,2,3,1,2,2][i]} height="48" fill="#000" />
    ))}
  </svg>
);

// ── Reusable ticket block (one flight direction) ─────────────
const TicketBlock = ({
  id,
  branchData,
  dataa,
  datas,
  segm,
  lsegm,
  segments,
  farevl,
  serviceprice,
  discount,
  markupp,
  showPrice,
  flightLabel,
  isReturn,
}) => {
  const paxType = (z) => {
    if (z === 1) return 'Adult';
    if (z === 2) return 'Child';
    if (z === 3) return 'Infant';
    return '';
  };

  const TotalDuration = (segs) => {
    const total = segs.reduce((s, f) => s + (f?.Duration || 0), 0);
    return `${Math.floor(total / 60)}h ${total % 60}m`;
  };

  const fmt = (dt) => moment(dt).format('ddd, DD-MMM-YYYY HH:mm');

  const totalAmount = parseFloat(farevl?.PublishedFare || 0)
    + parseFloat(markupp || 0)
    + parseFloat(farevl?.TotalBaggageCharges || 0)
    + parseFloat(farevl?.TotalMealCharges || 0)
    + parseFloat(serviceprice || 0)
    - parseFloat(discount || 0);

  const toINR = (v) => parseFloat(v || 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

  const airlineCode = dataa.FlightItinerary.AirlineCode;

  return (
    <div id={id} className="ticket-wrapper">
      {/* ── HEADER ── */}
      <div className="ticket-header">
        <div className="ticket-agency-info">
          <img src="assets/images/SIGNATORY01.png" height="100" alt="TravelXpo" style={{ maxWidth: 160 }} /><br />
          {branchData?.data?.address || '1st floor travelxpo adarsh arcade'}<br />
          {branchData?.data?.poc_mobile && <>Contact No: {branchData.data.poc_mobile}</>}
        </div>
        <div className="ticket-title-block">
          <h1>E-Ticket</h1>
          {branchData?.data?.company_name && (
            <div style={{ fontSize: 12, color: '#555', marginTop: 4 }}>
              {branchData.data.company_name}<br />
              {branchData.data.company_email}
            </div>
          )}
        </div>
        <div className="ticket-status-pnr">
          <div className="ticket-badge-confirmed">Confirmed</div><br />
          <div className="ticket-pnr-line">PNR: {dataa.FlightItinerary.PNR}</div>
          <div className="ticket-issued-line">
            Issued Date: {moment().format('ddd, DD-MMM-YYYY HH:mm')}
          </div>
        </div>
      </div>

      {/* ── PASSENGER TABLE ── */}
      <table className="ticket-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Passenger Type</th>
            <th>Ticket No.</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((p, i) => (
            <tr key={i}>
              <td>{p?.Title} {p?.FirstName}</td>
              <td>{p?.LastName}</td>
              <td>{paxType(p?.PaxType)}</td>
              <td>{p?.Ticket?.TicketId ? `${p.Ticket.TicketId}-${p.Ticket.TicketNumber}` : '––'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── FLIGHT DETAILS TABLE ── */}
      <table className="ticket-table">
        <thead>
          <tr>
            <th>Flight Details</th>
            <th>Departure</th>
            <th style={{ width: 40 }}></th>
            <th style={{ textAlign: 'right' }}>Arrival</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" className="ticket-section-label">{flightLabel || 'Departure Flight'}</td>
          </tr>
          {segments.map((seg, idx) => (
            <tr key={idx}>
              <td>
                <div className="ticket-flight-logo">
                  <div className="ticket-airline-badge">{seg.Airline?.AirlineCode}</div>
                  <div>
                    {seg.Airline?.AirlineName} {seg.Airline?.AirlineCode}-{seg.Airline?.FlightNumber}<br />
                    <span className="ticket-flight-sub">Economy, Class {seg.Airline?.FareClass || '–'}</span><br />
                    <span className="ticket-flight-sub">Duration: {Math.floor((seg.Duration || 0) / 60)}h {(seg.Duration || 0) % 60}m</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="ticket-airport-code">{seg.Origin?.Airport?.AirportCode}</div>
                <div className="ticket-airport-name">({seg.Origin?.Airport?.AirportName}, {seg.Origin?.Airport?.CityName})</div>
                <div className="ticket-terminal-time">Terminal: {seg.Origin?.Airport?.Terminal || '–'}</div>
                <div className="ticket-dep-time">{fmt(seg.Origin?.DepTime)}</div>
              </td>
              <td className="ticket-arrow-cell">✈</td>
              <td style={{ textAlign: 'right' }}>
                <div className="ticket-airport-code">{seg.Destination?.Airport?.AirportCode}</div>
                <div className="ticket-airport-name">({seg.Destination?.Airport?.AirportName}, {seg.Destination?.Airport?.CityName})</div>
                <div className="ticket-terminal-time">Terminal: {seg.Destination?.Airport?.Terminal || '–'}</div>
                <div className="ticket-dep-time">{fmt(seg.Destination?.ArrTime)}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ── ANCILLARY TABLE ── */}
      <table className="ticket-table">
        <thead>
          <tr>
            <th colSpan="5" className="ticket-anc-header">Ancillary Details</th>
            <th className="ticket-anc-header">Barcode</th>
          </tr>
        </thead>
        <tbody>
          <tr><td colSpan="6" className="ticket-section-label">{flightLabel || 'Departure Flight'}</td></tr>
          {datas.map((p, i) => (
            <React.Fragment key={i}>
              <tr>
                <td colSpan="6" className="ticket-anc-passenger">
                  {p?.Title} {p?.FirstName} {p?.LastName}
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: 11, color: '#777', width: 90 }}>
                  {segm.Origin?.Airport?.AirportCode} – {lsegm.Destination?.Airport?.AirportCode}<br />
                  {segm.Airline?.AirlineCode} {segm.Airline?.FlightNumber}
                </td>
                <td>
                  <div className="ticket-anc-label">🧳 Baggage</div>
                  <div className="ticket-baggage-detail">
                    Cabin: {segm.CabinBaggage || '7 Kg'}<br />
                    Check-In: {segm.Baggage || '15 Kg'}<br />
                    {p?.Baggage?.length > 0 ? `Extra: ${p.Baggage[0].Weight} Kg` : 'Excess: ––'}
                  </div>
                </td>
                <td>
                  <div className="ticket-anc-label">🪑 Seat</div>
                  {p?.SeatPreference || '––'}
                </td>
                <td>
                  <div className="ticket-anc-label">🍽 Meal</div>
                  {p?.MealDynamic?.length > 0 ? p.MealDynamic[0].AirlineDescription : '––'}
                </td>
                <td>
                  <div className="ticket-anc-label">⭐ Special Service</div>
                  ––
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  <BarcodeSVG />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* ── BOTTOM SECTION: 3-col with price, 2-col without ── */}
      <div className={`ticket-bottom-section${showPrice ? '' : ' no-price'}`}>

        {/* Left: Important notices */}
        <div className="ticket-important-box">
          <p><span className="red-bold">Important:</span> This is an Electronic Ticket. Passengers must carry a valid photo ID for check-in at the airport.</p>
          <br />
          <p><span className="bold">Baggage dimensions may vary depending on airline policies. Please confirm with the airline in advance.</span></p>
          <br />
          <p>Carriage and other services provided by the carrier are subject to conditions of carriage. These conditions may be obtained from the issuing carrier. Passengers travelling on a tourist visa must show a return ticket at the time of check-in.</p>
          <br />
          <p><span className="bold">Note:</span> We recommend purchasing travel insurance. Please contact your travel advisor to purchase travel insurance.</p>
        </div>

        {/* Centre: General Information */}
        <div className="ticket-general-info">
          <strong>General Information :</strong>
          <ul>
            <li>Complete Check-In procedure before departure. <strong>***Have a safe and pleasant journey***</strong></li>
            <li>Carry a valid government-issued photo ID for airport check-in.</li>
            <li>For international travel, ensure a valid passport, applicable visa (including transit visa if required), and immigration clearance.</li>
            <li>Travel is subject to the airline's Conditions of Carriage.</li>
            <li>Baggage dimensions may vary by airline — please confirm in advance.</li>
            <li>Passenger to report 2 hours before departure. Check-in closes 1 hour before departure.</li>
          </ul>
        </div>

        {/* Right: Payment Details — only rendered when showPrice is true */}
        {showPrice && (
          <div className="ticket-payment-box">
            <table>
              <tbody>
                <tr><td colSpan="2" className="ticket-pay-header">Payment Details</td></tr>
                <tr>
                  <td>Fare (incl. markup):</td>
                  <td style={{ textAlign: 'right' }}>{toINR(parseFloat(farevl?.PublishedFare || 0) + parseFloat(markupp || 0))}</td>
                </tr>
                <tr>
                  <td>Transaction Fee:</td>
                  <td style={{ textAlign: 'right' }}>{toINR(farevl?.TransactionFee)}</td>
                </tr>
                <tr>
                  <td>Other Charges:</td>
                  <td style={{ textAlign: 'right' }}>{toINR(farevl?.OtherCharges)}</td>
                </tr>
                <tr>
                  <td>Baggage Charges:</td>
                  <td style={{ textAlign: 'right' }}>{toINR(farevl?.TotalBaggageCharges)}</td>
                </tr>
                <tr>
                  <td>Meal Charges:</td>
                  <td style={{ textAlign: 'right' }}>{toINR(farevl?.TotalMealCharges)}</td>
                </tr>
                <tr>
                  <td>Service Charge:</td>
                  <td style={{ textAlign: 'right' }}>{toINR(serviceprice)}</td>
                </tr>
                <tr>
                  <td>Discount:</td>
                  <td style={{ textAlign: 'right' }}>- {toINR(discount)}</td>
                </tr>
                <tr className="ticket-total-row">
                  <td>Total Amount:</td>
                  <td style={{ textAlign: 'right' }}>{toINR(totalAmount)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────
const BookingOneway = () => {
  const location = useLocation();
  const response = location.state?.responsebook ?? sample1;

  const serviceprice = response.price;
  const discount = response.discount;
  const markupp = parseFloat(response.expoPrice) + parseFloat(response.agentPrice) + parseFloat(response.subagentPrice);

  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [branchData, setBranchData] = useState('');
  const [dataa] = useState(response.Response.Response);
  const [farevl] = useState(response.Response.Response.FlightItinerary.Fare);
  const [datas] = useState(response.Response.Response.FlightItinerary.Passenger);
  const segments = response.Response.Response.FlightItinerary.Segments;
  const [segm] = useState(segments[0]);
  const [lsegm] = useState(segments[segments.length - 1]);
  const [showPrice, setShowPrice] = useState(true);
  const branchId = sessionStorage.getItem('branchId');

  useEffect(() => {
    const storedValue = localStorage.getItem('tokenValue');
    if (storedValue) setValue(storedValue);
  }, []);

  useEffect(() => {
    const fetchAgentInfo = async () => {
      try {
        const res = await axios.post('https://b2b.travelxpo.in/api/getUserData', { branchId });
        setBranchData(res);
      } catch (error) {
        console.error('Error fetching branch data:', error);
      }
    };
    fetchAgentInfo();
  }, [branchId]);

  const pdfDownload = async (e, withPrice) => {
    e.preventDefault();
    setShowPrice(withPrice);
    await new Promise(resolve => setTimeout(resolve, 300));
    const pdfView = document.getElementById('pdf-view');
    html2canvas(pdfView, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('portrait', 'pt', 'A4');
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 10, 10, pageW - 20, pageH - 20);
      doc.save(withPrice ? 'Ticket-With-Price.pdf' : 'Ticket-No-Price.pdf');
    });
  };

  return (
    <div>
      <style>{ticketStyles}</style>
      <Navbar />
      <div className="page-content">

        {/* ── Action bar ── */}
        <div className="row mb-3">
          <div className="col-lg-6"></div>
          <div className="col-lg-1" style={{ marginTop: '-25px' }}>
            <Link to="/dashboard">
              <h5>◄◄ <i className="fa fa-home pt-4" aria-hidden="true" style={{ color: '#333' }}></i></h5>
            </Link>
          </div>
          <div className="col-lg-2" style={{ marginTop: '-15px' }}>
            <button onClick={(e) => pdfDownload(e, true)} className="btn btn-info me-2">
              Download With Price
            </button>
          </div>
          <div className="col-lg-2" style={{ marginTop: '-15px' }}>
            <button onClick={(e) => pdfDownload(e, false)} className="btn btn-secondary">
              Download Without Price
            </button>
          </div>
        </div>

        {/* ── Ticket ── */}
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <TicketBlock
                  id="pdf-view"
                  branchData={branchData}
                  dataa={dataa}
                  datas={datas}
                  segm={segm}
                  lsegm={lsegm}
                  segments={segments}
                  farevl={farevl}
                  serviceprice={serviceprice}
                  discount={discount}
                  markupp={markupp}
                  showPrice={showPrice}
                  flightLabel="Departure Flight"
                />
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingOneway;
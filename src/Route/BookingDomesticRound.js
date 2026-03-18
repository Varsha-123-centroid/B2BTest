import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment/moment';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const sample1 ={
    "Response": {
        "B2B2BStatus": false,
        "Error": {
            "ErrorCode": 0,
            "ErrorMessage": ""
        },
        "ResponseStatus": 1,
        "TraceId": "3daf263f-73ff-493a-8fd9-3ed069ca250a",
        "Response": {
            "PNR": "C967SQ",
            "BookingId": 1906951,
            "SSRDenied": false,
            "SSRMessage": null,
            "Status": 1,
            "IsPriceChanged": false,
            "IsTimeChanged": false,
            "FlightItinerary": {
                "CommentDetails": null,
                "IsAutoReissuanceAllowed": true,
                "IssuancePcc": "QPDEL7005B_03",
                "JourneyType": 2,
                "SearchCombinationType": 1,
                "TripIndicator": 1,
                "BookingAllowedForRoamer": true,
                "BookingId": 1906951,
                "IsCouponAppilcable": true,
                "IsManual": false,
                "PNR": "C967SQ",
                "AgentReferenceNo": "sonam1234567890",
                "IsDomestic": true,
                "ResultFareType": "RegularFare",
                "Source": 109,
                "Origin": "DEL",
                "Destination": "COK",
                "AirlineCode": "QP",
                "ValidatingAirlineCode": "QP",
                "AirlineRemark": "",
                "IsLCC": true,
                "NonRefundable": false,
                "FareType": "PUB",
                "CreditNoteNo": null,
                "Fare": {
                    "Currency": "INR",
                    "BaseFare": 18836,
                    "Tax": 4728,
                    "TaxBreakup": [
                        {
                            "key": "PSF",
                            "value": 364.00
                        },
                        {
                            "key": "UDF",
                            "value": 244.00
                        },
                        {
                            "key": "YR",
                            "value": 300.00
                        },
                        {
                            "key": "TotalTax",
                            "value": 3228.00
                        },
                        {
                            "key": "OtherTaxes",
                            "value": 2320.00
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
                    "PublishedFare": 23564,
                    "CommissionEarned": 0,
                    "PLBEarned": 0,
                    "IncentiveEarned": 0,
                    "OfferedFare": 23564,
                    "TdsOnCommission": 0,
                    "TdsOnPLB": 0,
                    "TdsOnIncentive": 0,
                    "ServiceFee": 0,
                    "TotalBaggageCharges": 0,
                    "TotalMealCharges": 0,
                    "TotalSeatCharges": 0,
                    "TotalSpecialServiceCharges": 0
                },
                "CreditNoteCreatedOn": null,
                "Passenger": [
                    {
                        "BarcodeDetails": {
                            "Id": 3135674,
                            "Barcode": [
                                {
                                    "Index": 1,
                                    "Format": "PDF417",
                                    "Content": "M1RAJ/SANDYA           C967SQ DELCOKQP 1128 233Y00000000 100",
                                    "BarCodeInBase64": null,
                                    "JourneyWayType": 3
                                }
                            ]
                        },
                        "DocumentDetails": null,
                        "GuardianDetails": null,
                        "PaxId": 3135674,
                        "Title": "Mrs",
                        "FirstName": "Sandya",
                        "LastName": "Raj",
                        "PaxType": 1,
                        "DateOfBirth": "1987-11-06T00:00:00",
                        "Gender": 2,
                        "IsPANRequired": false,
                        "IsPassportRequired": false,
                        "PAN": "",
                        "PassportNo": "",
                        "AddressLine1": "Karayamuttam",
                        "AddressLine2": "Edamuttam",
                        "Fare": {
                            "Currency": "INR",
                            "BaseFare": 4709,
                            "Tax": 807,
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
                                    "value": 807.00
                                },
                                {
                                    "key": "OtherTaxes",
                                    "value": 580.00
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
                            "PublishedFare": 5516,
                            "CommissionEarned": 0,
                            "PLBEarned": 0,
                            "IncentiveEarned": 0,
                            "OfferedFare": 5516,
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
                        "ContactNo": "9879879877",
                        "Email": "sandhya@tbtq.in",
                        "IsLeadPax": true,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Ssr": [],
                        "Ticket": {
                            "TicketId": 2193357,
                            "TicketNumber": "C967SQ",
                            "IssueDate": "2024-07-06T12:39:19",
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
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            },
                            {
                                "FareBasis": "B0O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            }
                        ]
                    },
                    {
                        "BarcodeDetails": {
                            "Id": 3135675,
                            "Barcode": [
                                {
                                    "Index": 1,
                                    "Format": "PDF417",
                                    "Content": "M1GOPAL/RAJ            C967SQ DELCOKQP 1128 233Y00000000 100",
                                    "BarCodeInBase64": null,
                                    "JourneyWayType": 3
                                }
                            ]
                        },
                        "DocumentDetails": null,
                        "GuardianDetails": null,
                        "PaxId": 3135675,
                        "Title": "Mr",
                        "FirstName": "Raj",
                        "LastName": "Gopal",
                        "PaxType": 1,
                        "DateOfBirth": "1980-12-06T00:00:00",
                        "Gender": 1,
                        "IsPANRequired": false,
                        "IsPassportRequired": false,
                        "PAN": "",
                        "PassportNo": "",
                        "AddressLine1": "Karayamuttam",
                        "AddressLine2": "Edamuttam",
                        "Fare": {
                            "Currency": "INR",
                            "BaseFare": 4709,
                            "Tax": 807,
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
                                    "value": 807.00
                                },
                                {
                                    "key": "OtherTaxes",
                                    "value": 580.00
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
                            "PublishedFare": 5516,
                            "CommissionEarned": 0,
                            "PLBEarned": 0,
                            "IncentiveEarned": 0,
                            "OfferedFare": 5516,
                            "TdsOnCommission": 0,
                            "TdsOnPLB": 0,
                            "TdsOnIncentive": 0,
                            "ServiceFee": 0,
                            "TotalBaggageCharges": 0,
                            "TotalMealCharges": 0,
                            "TotalSeatCharges": 0,
                            "TotalSpecialServiceCharges": 0
                        },
                        "City": "Gurgaon",
                        "CountryCode": "IN",
                        "CountryName": "India",
                        "Nationality": "IN",
                        "ContactNo": "9879879877",
                        "Email": "sandhya@tbtq.in",
                        "IsLeadPax": false,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Ssr": [],
                        "Ticket": {
                            "TicketId": 2193358,
                            "TicketNumber": "C967SQ",
                            "IssueDate": "2024-07-06T12:39:19",
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
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            },
                            {
                                "FareBasis": "B0O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            }
                        ]
                    },
                    {
                        "BarcodeDetails": {
                            "Id": 3135676,
                            "Barcode": [
                                {
                                    "Index": 1,
                                    "Format": "PDF417",
                                    "Content": "M1RAJ/RAM              C967SQ DELCOKQP 1128 233Y00000000 100",
                                    "BarCodeInBase64": null,
                                    "JourneyWayType": 3
                                }
                            ]
                        },
                        "DocumentDetails": null,
                        "GuardianDetails": null,
                        "PaxId": 3135676,
                        "Title": "Mstr",
                        "FirstName": "Ram",
                        "LastName": "Raj",
                        "PaxType": 2,
                        "DateOfBirth": "2018-10-06T00:00:00",
                        "Gender": 1,
                        "IsPANRequired": false,
                        "IsPassportRequired": false,
                        "PAN": "",
                        "PassportNo": "",
                        "AddressLine1": "Karayamuttam",
                        "AddressLine2": "Edamuttam",
                        "Fare": {
                            "Currency": "INR",
                            "BaseFare": 4709,
                            "Tax": 807,
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
                                    "value": 807.00
                                },
                                {
                                    "key": "OtherTaxes",
                                    "value": 580.00
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
                            "PublishedFare": 5516,
                            "CommissionEarned": 0,
                            "PLBEarned": 0,
                            "IncentiveEarned": 0,
                            "OfferedFare": 5516,
                            "TdsOnCommission": 0,
                            "TdsOnPLB": 0,
                            "TdsOnIncentive": 0,
                            "ServiceFee": 0,
                            "TotalBaggageCharges": 0,
                            "TotalMealCharges": 0,
                            "TotalSeatCharges": 0,
                            "TotalSpecialServiceCharges": 0
                        },
                        "City": "Thrissr",
                        "CountryCode": "IN",
                        "CountryName": "India",
                        "Nationality": "IN",
                        "ContactNo": "9879879877",
                        "Email": "sandhya@tbtq.in",
                        "IsLeadPax": false,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Ssr": [],
                        "Ticket": {
                            "TicketId": 2193359,
                            "TicketNumber": "C967SQ",
                            "IssueDate": "2024-07-06T12:39:19",
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
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            },
                            {
                                "FareBasis": "B0O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            }
                        ]
                    },
                    {
                        "BarcodeDetails": {
                            "Id": 3135677,
                            "Barcode": [
                                {
                                    "Index": 1,
                                    "Format": "PDF417",
                                    "Content": "M1RAJ/SAM              C967SQ DELCOKQP 1128 233Y00000000 100",
                                    "BarCodeInBase64": null,
                                    "JourneyWayType": 3
                                }
                            ]
                        },
                        "DocumentDetails": null,
                        "GuardianDetails": null,
                        "PaxId": 3135677,
                        "Title": "Mstr",
                        "FirstName": "Sam",
                        "LastName": "Raj",
                        "PaxType": 2,
                        "DateOfBirth": "2018-10-06T00:00:00",
                        "Gender": 1,
                        "IsPANRequired": false,
                        "IsPassportRequired": false,
                        "PAN": "",
                        "PassportNo": "",
                        "AddressLine1": "Karayamuttam",
                        "AddressLine2": "Edamuttam",
                        "Fare": {
                            "Currency": "INR",
                            "BaseFare": 4709,
                            "Tax": 807,
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
                                    "value": 807.00
                                },
                                {
                                    "key": "OtherTaxes",
                                    "value": 580.00
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
                            "PublishedFare": 5516,
                            "CommissionEarned": 0,
                            "PLBEarned": 0,
                            "IncentiveEarned": 0,
                            "OfferedFare": 5516,
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
                        "ContactNo": "9879879877",
                        "Email": "sandhya@tbtq.in",
                        "IsLeadPax": false,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Ssr": [],
                        "Ticket": {
                            "TicketId": 2193360,
                            "TicketNumber": "C967SQ",
                            "IssueDate": "2024-07-06T12:39:19",
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
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            },
                            {
                                "FareBasis": "B0O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            }
                        ]
                    },
                    {
                        "BarcodeDetails": {
                            "Id": 3135678,
                            "Barcode": [
                                {
                                    "Index": 1,
                                    "Format": "PDF417",
                                    "Content": "M1MOL/SOORYA           C967SQ DELCOKQP 1128 233Y00000000 100",
                                    "BarCodeInBase64": null,
                                    "JourneyWayType": 3
                                }
                            ]
                        },
                        "DocumentDetails": null,
                        "GuardianDetails": null,
                        "PaxId": 3135678,
                        "Title": "Miss",
                        "FirstName": "Soorya",
                        "LastName": "Mol",
                        "PaxType": 3,
                        "DateOfBirth": "2023-10-04T00:00:00",
                        "Gender": 2,
                        "IsPANRequired": false,
                        "IsPassportRequired": false,
                        "PAN": "",
                        "PassportNo": "",
                        "AddressLine1": "Karayamuttam",
                        "AddressLine2": "Edamuttam",
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
                        "ContactNo": "9879879877",
                        "Email": "sandhya@tbtq.in",
                        "IsLeadPax": false,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Ssr": [],
                        "Ticket": {
                            "TicketId": 2193361,
                            "TicketNumber": "C967SQ",
                            "IssueDate": "2024-07-06T12:39:19",
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
                            },
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
                            "DepTime": "2024-08-20T16:10:00"
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
                            "ArrTime": "2024-08-20T18:20:00"
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
                    },
                    {
                        "Baggage": "15 Kg",
                        "CabinBaggage": "7 Kg",
                        "CabinClass": 2,
                        "SupplierFareClass": null,
                        "TripIndicator": 1,
                        "SegmentIndicator": 2,
                        "Airline": {
                            "AirlineCode": "QP",
                            "AirlineName": "Akasa Air",
                            "FlightNumber": "1505",
                            "FareClass": "V1",
                            "OperatingCarrier": ""
                        },
                        "AirlinePNR": "",
                        "Origin": {
                            "Airport": {
                                "AirportCode": "BOM",
                                "AirportName": "Chhatrapati Shivaji International Airport",
                                "Terminal": "T1",
                                "CityCode": "BOM",
                                "CityName": "Mumbai",
                                "CountryCode": "IN",
                                "CountryName": "India"
                            },
                            "DepTime": "2024-08-20T19:50:00"
                        },
                        "Destination": {
                            "Airport": {
                                "AirportCode": "COK",
                                "AirportName": "Cochin International Airport",
                                "Terminal": "T1",
                                "CityCode": "COK",
                                "CityName": "Kochi",
                                "CountryCode": "IN",
                                "CountryName": "India"
                            },
                            "ArrTime": "2024-08-20T21:50:00"
                        },
                        "AccumulatedDuration": 340,
                        "Duration": 120,
                        "GroundTime": 0,
                        "Mile": 0,
                        "StopOver": false,
                        "FlightInfoIndex": "",
                        "StopPoint": "",
                        "StopPointArrivalTime": "0001-01-01T00:00:00",
                        "StopPointDepartureTime": "0001-01-01T00:00:00",
                        "Craft": "7MZ",
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
                        "InvoiceCreatedOn": "2024-07-06T12:39:20",
                        "InvoiceId": 8406,
                        "InvoiceNo": "IW/2425/8406",
                        "InvoiceAmount": 23564.00,
                        "Remarks": "",
                        "InvoiceStatus": 3
                    }
                ],
                "InvoiceAmount": 23564.00,
                "InvoiceNo": "IW/2425/8406",
                "InvoiceStatus": 3,
                "InvoiceCreatedOn": "2024-07-06T12:39:20",
                "Remarks": "",
                "IsWebCheckInAllowed": false
            },
            "TicketStatus": 1
        }
    }
};
const sampleIB={
    "Response": {
        "B2B2BStatus": false,
        "Error": {
            "ErrorCode": 0,
            "ErrorMessage": ""
        },
        "ResponseStatus": 1,
        "TraceId": "3daf263f-73ff-493a-8fd9-3ed069ca250a",
        "Response": {
            "PNR": "Z83NNJ",
            "BookingId": 1906952,
            "SSRDenied": false,
            "SSRMessage": null,
            "Status": 1,
            "IsPriceChanged": false,
            "IsTimeChanged": false,
            "FlightItinerary": {
                "CommentDetails": null,
                "IsAutoReissuanceAllowed": true,
                "IssuancePcc": "QPDEL7005B_03",
                "JourneyType": 2,
                "SearchCombinationType": 1,
                "TripIndicator": 2,
                "BookingAllowedForRoamer": true,
                "BookingId": 1906952,
                "ParentBookingId": 1906951,
                "IsCouponAppilcable": true,
                "IsManual": false,
                "PNR": "Z83NNJ",
                "AgentReferenceNo": "sonam1234567890",
                "IsDomestic": true,
                "ResultFareType": "RegularFare",
                "Source": 109,
                "Origin": "COK",
                "Destination": "DEL",
                "AirlineCode": "QP",
                "ValidatingAirlineCode": "QP",
                "AirlineRemark": "",
                "IsLCC": true,
                "NonRefundable": false,
                "FareType": "PUB",
                "CreditNoteNo": null,
                "Fare": {
                    "Currency": "INR",
                    "BaseFare": 21364,
                    "Tax": 5524,
                    "TaxBreakup": [
                        {
                            "key": "UDF",
                            "value": 1276.00
                        },
                        {
                            "key": "YR",
                            "value": 300.00
                        },
                        {
                            "key": "TotalTax",
                            "value": 4024.00
                        },
                        {
                            "key": "OtherTaxes",
                            "value": 2448.00
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
                    "PublishedFare": 26888,
                    "CommissionEarned": 0,
                    "PLBEarned": 0,
                    "IncentiveEarned": 0,
                    "OfferedFare": 26888,
                    "TdsOnCommission": 0,
                    "TdsOnPLB": 0,
                    "TdsOnIncentive": 0,
                    "ServiceFee": 0,
                    "TotalBaggageCharges": 0,
                    "TotalMealCharges": 0,
                    "TotalSeatCharges": 0,
                    "TotalSpecialServiceCharges": 0
                },
                "CreditNoteCreatedOn": null,
                "Passenger": [
                    {
                        "BarcodeDetails": {
                            "Id": 3135679,
                            "Barcode": [
                                {
                                    "Index": 1,
                                    "Format": "PDF417",
                                    "Content": "M1RAJ/SANDYA           Z83NNJ COKDELQP 1352 241Y00000000 100",
                                    "BarCodeInBase64": null,
                                    "JourneyWayType": 3
                                }
                            ]
                        },
                        "DocumentDetails": null,
                        "GuardianDetails": null,
                        "PaxId": 3135679,
                        "Title": "Mrs",
                        "FirstName": "Sandya",
                        "LastName": "Raj",
                        "PaxType": 1,
                        "DateOfBirth": "1987-11-06T00:00:00",
                        "Gender": 2,
                        "IsPANRequired": false,
                        "IsPassportRequired": false,
                        "PAN": "",
                        "PassportNo": "",
                        "AddressLine1": "Karayamuttam",
                        "AddressLine2": "Edamuttam",
                        "Fare": {
                            "Currency": "INR",
                            "BaseFare": 5341,
                            "Tax": 1006,
                            "TaxBreakup": [
                                {
                                    "key": "K3",
                                    "value": 0
                                },
                                {
                                    "key": "UDF",
                                    "value": 319.00
                                },
                                {
                                    "key": "YR",
                                    "value": 75.00
                                },
                                {
                                    "key": "TotalTax",
                                    "value": 1006.00
                                },
                                {
                                    "key": "OtherTaxes",
                                    "value": 612.00
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
                            "PublishedFare": 6347,
                            "CommissionEarned": 0,
                            "PLBEarned": 0,
                            "IncentiveEarned": 0,
                            "OfferedFare": 6347,
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
                        "ContactNo": "9879879877",
                        "Email": "sandhya@tbtq.in",
                        "IsLeadPax": true,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Ssr": [],
                        "Ticket": {
                            "TicketId": 2193362,
                            "TicketNumber": "Z83NNJ",
                            "IssueDate": "2024-07-06T12:44:27",
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
                                "FareBasis": "U8O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            },
                            {
                                "FareBasis": "U8O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            }
                        ]
                    },
                    {
                        "BarcodeDetails": {
                            "Id": 3135680,
                            "Barcode": [
                                {
                                    "Index": 1,
                                    "Format": "PDF417",
                                    "Content": "M1GOPAL/RAJ            Z83NNJ COKDELQP 1352 241Y00000000 100",
                                    "BarCodeInBase64": null,
                                    "JourneyWayType": 3
                                }
                            ]
                        },
                        "DocumentDetails": null,
                        "GuardianDetails": null,
                        "PaxId": 3135680,
                        "Title": "Mr",
                        "FirstName": "Raj",
                        "LastName": "Gopal",
                        "PaxType": 1,
                        "DateOfBirth": "1980-12-06T00:00:00",
                        "Gender": 1,
                        "IsPANRequired": false,
                        "IsPassportRequired": false,
                        "PAN": "",
                        "PassportNo": "",
                        "AddressLine1": "Karayamuttam",
                        "AddressLine2": "Edamuttam",
                        "Fare": {
                            "Currency": "INR",
                            "BaseFare": 5341,
                            "Tax": 1006,
                            "TaxBreakup": [
                                {
                                    "key": "K3",
                                    "value": 0
                                },
                                {
                                    "key": "UDF",
                                    "value": 319.00
                                },
                                {
                                    "key": "YR",
                                    "value": 75.00
                                },
                                {
                                    "key": "TotalTax",
                                    "value": 1006.00
                                },
                                {
                                    "key": "OtherTaxes",
                                    "value": 612.00
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
                            "PublishedFare": 6347,
                            "CommissionEarned": 0,
                            "PLBEarned": 0,
                            "IncentiveEarned": 0,
                            "OfferedFare": 6347,
                            "TdsOnCommission": 0,
                            "TdsOnPLB": 0,
                            "TdsOnIncentive": 0,
                            "ServiceFee": 0,
                            "TotalBaggageCharges": 0,
                            "TotalMealCharges": 0,
                            "TotalSeatCharges": 0,
                            "TotalSpecialServiceCharges": 0
                        },
                        "City": "Gurgaon",
                        "CountryCode": "IN",
                        "CountryName": "India",
                        "Nationality": "IN",
                        "ContactNo": "9879879877",
                        "Email": "sandhya@tbtq.in",
                        "IsLeadPax": false,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Ssr": [],
                        "Ticket": {
                            "TicketId": 2193363,
                            "TicketNumber": "Z83NNJ",
                            "IssueDate": "2024-07-06T12:44:27",
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
                                "FareBasis": "U8O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            },
                            {
                                "FareBasis": "U8O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            }
                        ]
                    },
                    {
                        "BarcodeDetails": {
                            "Id": 3135681,
                            "Barcode": [
                                {
                                    "Index": 1,
                                    "Format": "PDF417",
                                    "Content": "M1RAJ/RAM              Z83NNJ COKDELQP 1352 241Y00000000 100",
                                    "BarCodeInBase64": null,
                                    "JourneyWayType": 3
                                }
                            ]
                        },
                        "DocumentDetails": null,
                        "GuardianDetails": null,
                        "PaxId": 3135681,
                        "Title": "Mstr",
                        "FirstName": "Ram",
                        "LastName": "Raj",
                        "PaxType": 2,
                        "DateOfBirth": "2018-10-06T00:00:00",
                        "Gender": 1,
                        "IsPANRequired": false,
                        "IsPassportRequired": false,
                        "PAN": "",
                        "PassportNo": "",
                        "AddressLine1": "Karayamuttam",
                        "AddressLine2": "Edamuttam",
                        "Fare": {
                            "Currency": "INR",
                            "BaseFare": 5341,
                            "Tax": 1006,
                            "TaxBreakup": [
                                {
                                    "key": "K3",
                                    "value": 0
                                },
                                {
                                    "key": "UDF",
                                    "value": 319.00
                                },
                                {
                                    "key": "YR",
                                    "value": 75.00
                                },
                                {
                                    "key": "TotalTax",
                                    "value": 1006.00
                                },
                                {
                                    "key": "OtherTaxes",
                                    "value": 612.00
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
                            "PublishedFare": 6347,
                            "CommissionEarned": 0,
                            "PLBEarned": 0,
                            "IncentiveEarned": 0,
                            "OfferedFare": 6347,
                            "TdsOnCommission": 0,
                            "TdsOnPLB": 0,
                            "TdsOnIncentive": 0,
                            "ServiceFee": 0,
                            "TotalBaggageCharges": 0,
                            "TotalMealCharges": 0,
                            "TotalSeatCharges": 0,
                            "TotalSpecialServiceCharges": 0
                        },
                        "City": "Thrissr",
                        "CountryCode": "IN",
                        "CountryName": "India",
                        "Nationality": "IN",
                        "ContactNo": "9879879877",
                        "Email": "sandhya@tbtq.in",
                        "IsLeadPax": false,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Ssr": [],
                        "Ticket": {
                            "TicketId": 2193364,
                            "TicketNumber": "Z83NNJ",
                            "IssueDate": "2024-07-06T12:44:27",
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
                                "FareBasis": "U8O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            },
                            {
                                "FareBasis": "U8O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            }
                        ]
                    },
                    {
                        "BarcodeDetails": {
                            "Id": 3135682,
                            "Barcode": [
                                {
                                    "Index": 1,
                                    "Format": "PDF417",
                                    "Content": "M1RAJ/SAM              Z83NNJ COKDELQP 1352 241Y00000000 100",
                                    "BarCodeInBase64": null,
                                    "JourneyWayType": 3
                                }
                            ]
                        },
                        "DocumentDetails": null,
                        "GuardianDetails": null,
                        "PaxId": 3135682,
                        "Title": "Mstr",
                        "FirstName": "Sam",
                        "LastName": "Raj",
                        "PaxType": 2,
                        "DateOfBirth": "2018-10-06T00:00:00",
                        "Gender": 1,
                        "IsPANRequired": false,
                        "IsPassportRequired": false,
                        "PAN": "",
                        "PassportNo": "",
                        "AddressLine1": "Karayamuttam",
                        "AddressLine2": "Edamuttam",
                        "Fare": {
                            "Currency": "INR",
                            "BaseFare": 5341,
                            "Tax": 1006,
                            "TaxBreakup": [
                                {
                                    "key": "K3",
                                    "value": 0
                                },
                                {
                                    "key": "UDF",
                                    "value": 319.00
                                },
                                {
                                    "key": "YR",
                                    "value": 75.00
                                },
                                {
                                    "key": "TotalTax",
                                    "value": 1006.00
                                },
                                {
                                    "key": "OtherTaxes",
                                    "value": 612.00
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
                            "PublishedFare": 6347,
                            "CommissionEarned": 0,
                            "PLBEarned": 0,
                            "IncentiveEarned": 0,
                            "OfferedFare": 6347,
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
                        "ContactNo": "9879879877",
                        "Email": "sandhya@tbtq.in",
                        "IsLeadPax": false,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Ssr": [],
                        "Ticket": {
                            "TicketId": 2193365,
                            "TicketNumber": "Z83NNJ",
                            "IssueDate": "2024-07-06T12:44:27",
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
                                "FareBasis": "U8O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            },
                            {
                                "FareBasis": "U8O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "15 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            }
                        ]
                    },
                    {
                        "BarcodeDetails": {
                            "Id": 3135683,
                            "Barcode": [
                                {
                                    "Index": 1,
                                    "Format": "PDF417",
                                    "Content": "M1MOL/SOORYA           Z83NNJ COKDELQP 1352 241Y00000000 100",
                                    "BarCodeInBase64": null,
                                    "JourneyWayType": 3
                                }
                            ]
                        },
                        "DocumentDetails": null,
                        "GuardianDetails": null,
                        "PaxId": 3135683,
                        "Title": "Miss",
                        "FirstName": "Soorya",
                        "LastName": "Mol",
                        "PaxType": 3,
                        "DateOfBirth": "2023-10-04T00:00:00",
                        "Gender": 2,
                        "IsPANRequired": false,
                        "IsPassportRequired": false,
                        "PAN": "",
                        "PassportNo": "",
                        "AddressLine1": "Karayamuttam",
                        "AddressLine2": "Edamuttam",
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
                        "ContactNo": "9879879877",
                        "Email": "sandhya@tbtq.in",
                        "IsLeadPax": false,
                        "FFAirlineCode": null,
                        "FFNumber": "",
                        "Ssr": [],
                        "Ticket": {
                            "TicketId": 2193366,
                            "TicketNumber": "Z83NNJ",
                            "IssueDate": "2024-07-06T12:44:27",
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
                                "FareBasis": "U8O7RBIX",
                                "NVA": "",
                                "NVB": "",
                                "Baggage": "0 Kg",
                                "Meal": "0 Platter",
                                "Seat": "",
                                "SpecialService": ""
                            },
                            {
                                "FareBasis": "U8O7RBIX",
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
                            "FlightNumber": "1352",
                            "FareClass": "U1",
                            "OperatingCarrier": ""
                        },
                        "AirlinePNR": "",
                        "Origin": {
                            "Airport": {
                                "AirportCode": "COK",
                                "AirportName": "Cochin International Airport",
                                "Terminal": "T1",
                                "CityCode": "COK",
                                "CityName": "Kochi",
                                "CountryCode": "IN",
                                "CountryName": "India"
                            },
                            "DepTime": "2024-08-28T08:55:00"
                        },
                        "Destination": {
                            "Airport": {
                                "AirportCode": "BLR",
                                "AirportName": "Kempegowda International Airport",
                                "Terminal": "T1",
                                "CityCode": "BLR",
                                "CityName": "Bangalore",
                                "CountryCode": "IN",
                                "CountryName": "India"
                            },
                            "ArrTime": "2024-08-28T10:05:00"
                        },
                        "Duration": 70,
                        "GroundTime": 0,
                        "Mile": 0,
                        "StopOver": false,
                        "FlightInfoIndex": "",
                        "StopPoint": "",
                        "StopPointArrivalTime": "0001-01-01T00:00:00",
                        "StopPointDepartureTime": "0001-01-01T00:00:00",
                        "Craft": "7MA",
                        "Remark": null,
                        "IsETicketEligible": true,
                        "FlightStatus": "Confirmed",
                        "Status": "HK",
                        "FareClassification": null
                    },
                    {
                        "Baggage": "15 Kg",
                        "CabinBaggage": "7 Kg",
                        "CabinClass": 2,
                        "SupplierFareClass": null,
                        "TripIndicator": 1,
                        "SegmentIndicator": 2,
                        "Airline": {
                            "AirlineCode": "QP",
                            "AirlineName": "Akasa Air",
                            "FlightNumber": "1336",
                            "FareClass": "U1",
                            "OperatingCarrier": ""
                        },
                        "AirlinePNR": "",
                        "Origin": {
                            "Airport": {
                                "AirportCode": "BLR",
                                "AirportName": "Kempegowda International Airport",
                                "Terminal": "T1",
                                "CityCode": "BLR",
                                "CityName": "Bangalore",
                                "CountryCode": "IN",
                                "CountryName": "India"
                            },
                            "DepTime": "2024-08-28T15:40:00"
                        },
                        "Destination": {
                            "Airport": {
                                "AirportCode": "DEL",
                                "AirportName": "Indira Gandhi Airport",
                                "Terminal": "T2",
                                "CityCode": "DEL",
                                "CityName": "Delhi",
                                "CountryCode": "IN",
                                "CountryName": "India"
                            },
                            "ArrTime": "2024-08-28T18:25:00"
                        },
                        "AccumulatedDuration": 570,
                        "Duration": 165,
                        "GroundTime": 0,
                        "Mile": 0,
                        "StopOver": false,
                        "FlightInfoIndex": "",
                        "StopPoint": "",
                        "StopPointArrivalTime": "0001-01-01T00:00:00",
                        "StopPointDepartureTime": "0001-01-01T00:00:00",
                        "Craft": "7MZ",
                        "Remark": null,
                        "IsETicketEligible": true,
                        "FlightStatus": "Confirmed",
                        "Status": "HK",
                        "FareClassification": null
                    }
                ],
                "FareRules": [
                    {
                        "Origin": "COK",
                        "Destination": "BLR",
                        "Airline": "QP",
                        "FareBasisCode": "U8O7RBIX",
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
                        "InvoiceCreatedOn": "2024-07-06T12:44:29",
                        "InvoiceId": 8407,
                        "InvoiceNo": "IW/2425/8407",
                        "InvoiceAmount": 26888.00,
                        "Remarks": "",
                        "InvoiceStatus": 3
                    }
                ],
                "InvoiceAmount": 26888.00,
                "InvoiceNo": "IW/2425/8407",
                "InvoiceStatus": 3,
                "InvoiceCreatedOn": "2024-07-06T12:44:29",
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
  .ticket-agency-info { font-size: 12px; line-height: 1.6; }
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
  .ticket-pnr-line { font-size: 14px; font-weight: 700; color: #d4860a; }
  .ticket-issued-line { font-size: 11.5px; color: #555; }

  .ticket-table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }
  .ticket-table th, .ticket-table td { border: 1px solid #c0c0c0; padding: 7px 10px; font-size: 12.5px; }
  .ticket-table thead th { background: #d9e4f0; font-weight: 700; color: #1a1a1a; font-size: 12.5px; }
  .ticket-section-label { background: #eef3fa; font-weight: 600; font-size: 12.5px; color: #333; }

  .ticket-flight-logo { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 13px; }
  .ticket-airline-badge {
    width: 34px; height: 34px;
    background: #1a3f6f;
    border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-weight: 900; font-size: 11px;
    flex-shrink: 0; text-align: center; line-height: 1.1;
  }
  .ticket-flight-sub { font-size: 11.5px; color: #555; font-weight: 400; }
  .ticket-airport-code { font-size: 18px; font-weight: 700; }
  .ticket-airport-name { font-size: 11px; color: #555; }
  .ticket-terminal-time { font-size: 11.5px; color: #333; }
  .ticket-dep-time { font-weight: 700; color: #111; }
  .ticket-arrow-cell { text-align: center; color: #e87722; font-size: 20px; vertical-align: middle; }

  .ticket-anc-header { background: #d9e4f0; font-weight: 700; }
  .ticket-anc-passenger { font-weight: 700; background: #f5f5f5; }

  .ticket-anc-table { table-layout: fixed; width: 100%; }
  .ticket-anc-col-route   { width: 80px; }
  .ticket-anc-col-baggage { width: 160px; }
  .ticket-anc-col-seat    { width: 70px; }
  .ticket-anc-col-meal    { width: 70px; }
  .ticket-anc-col-ssr     { width: 90px; }
  .ticket-anc-col-barcode { width: 160px; }

  .ticket-anc-label { display: block; font-weight: 700; font-size: 12px; margin-bottom: 4px; }
  .ticket-anc-value { display: block; font-size: 12px; color: #333; }
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
  .ticket-pay-header { background: #d9e4f0; font-weight: 700; font-size: 13px; padding: 6px 10px; border: 1px solid #ccc; }
  .ticket-total-row td { font-weight: 700; background: #f5f5f5; }
`;

// ── Code128B encoder + canvas barcode renderer ───────────────
const C128B = [
  '11011001100','11001101100','11001100110','10010011000','10010001100',
  '10001001100','10011001000','10001100100','10011000100','11001001000',
  '11001000100','11000100100','10110011100','10011011100','10011001110',
  '10111001100','10011101100','10011100110','11001110010','11001011100',
  '11001001110','11011100100','11001110100','11101101110','11101001100',
  '11100101100','11100100110','11101100100','11100110100','11100110010',
  '11011011000','11011000110','11000110110','10100011000','10001011000',
  '10001000110','10110001000','10001101000','10011001000','10000101110',
  '10000110110','10001010000','10100001000','10001001110','10000100110',
  '10001100010','11010001110','11000101110','11011101000','11011100010',
  '11011101110','11101011000','11101000110','11100010110','11101101000',
  '11101100010','11100011010','11101111010','11001000010','11110001010',
  '10100110000','10100001100','10010110000','10010000110','10000101100',
  '10000100110','10110010000','10110000100','10011010000','10011000010',
  '10000110100','10000110010','11000010010','11001010000','11110111010',
  '11000010100','10001111010','10100111100','10010111100','10010011110',
  '10111100100','10011110100','10011110010','11110100100','11110010100',
  '11110010010','11011011110','11011110110','11110110110','10101111000',
  '10100011110','10001011110','10111101000','10111100010','11110101000',
  '11110100010','10111011110','10111101110','11101011110','11110101110',
  '11010000100','11010010000','11010011100','1100011101011',
];
const C128_START_B = 104;
const C128_STOP    = 106;

function encodeCode128B(text) {
  const vals = [C128_START_B];
  let checksum = C128_START_B;
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i) - 32;
    if (code < 0 || code > 94) continue;
    vals.push(code);
    checksum += code * (i + 1);
  }
  vals.push(checksum % 103);
  vals.push(C128_STOP);
  return vals.map(v => C128B[v] || '').join('');
}

function drawBarcode(canvas, text) {
  if (!canvas || !text) return;
  const bars   = encodeCode128B(text);
  const barW   = 1.5;
  const height = 48;
  const quietW = 10;
  const totalW = bars.length * barW + quietW * 2;
  canvas.width  = totalW;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, totalW, height);
  ctx.fillStyle = '#000';
  let x = quietW;
  for (let i = 0; i < bars.length; i++) {
    if (bars[i] === '1') ctx.fillRect(x, 0, barW, height);
    x += barW;
  }
}

// ── BarcodeCell component ─────────────────────────────────────
const BarcodeCell = ({ passenger }) => {
  const barcodeObj = passenger?.BarcodeDetails?.Barcode?.[0];
  const canvasRef  = React.useRef(null);
  const content    = barcodeObj?.Content || '';

  useEffect(() => {
    if (barcodeObj?.BarCodeInBase64 || !content) return;
    const t = setTimeout(() => drawBarcode(canvasRef.current, content), 50);
    return () => clearTimeout(t);
  }, [content]);

  if (!barcodeObj) return <span style={{ fontSize: 11, color: '#999' }}>––</span>;

  if (barcodeObj.BarCodeInBase64) {
    return (
      <img
        src={`data:image/png;base64,${barcodeObj.BarCodeInBase64}`}
        alt="Boarding barcode"
        style={{ maxWidth: 150, maxHeight: 56, display: 'block', margin: '0 auto' }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 50 }}
    />
  );
};

// ── Reusable single-flight ticket block ──────────────────────
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
}) => {
  const paxType = (z) => {
    if (z === 1) return 'Adult';
    if (z === 2) return 'Child';
    if (z === 3) return 'Infant';
    return '';
  };

  const fmt = (dt) => moment(dt).format('ddd, DD-MMM-YYYY HH:mm');
  const toINR = (v) => parseFloat(v || 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

  const totalAmount = parseFloat(farevl?.PublishedFare || 0)
    + parseFloat(markupp || 0)
    + parseFloat(farevl?.TotalBaggageCharges || 0)
    + parseFloat(farevl?.TotalMealCharges || 0)
    + parseFloat(serviceprice || 0)
    - parseFloat(discount || 0);

  return (
    <div id={id} className="ticket-wrapper" style={{ marginBottom: 32 }}>

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
            Issued Date: {datas[0]?.Ticket?.IssueDate
              ? moment(datas[0].Ticket.IssueDate).format('ddd, DD-MMM-YYYY HH:mm')
              : moment().format('ddd, DD-MMM-YYYY HH:mm')}
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
            <th>GST No.</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((p, i) => (
            <tr key={i}>
              <td>{p?.Title} {p?.FirstName}</td>
              <td>{p?.LastName}</td>
              <td>{paxType(p?.PaxType)}</td>
              <td>{p?.Ticket?.TicketId ? `${p.Ticket.TicketId}-${p.Ticket.TicketNumber}` : '––'}</td>
              <td>{p?.GSTNumber || '––'}</td>
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
            <td colSpan="4" className="ticket-section-label">{flightLabel}</td>
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
      <table className="ticket-table ticket-anc-table">
        <colgroup>
          <col className="ticket-anc-col-route" />
          <col className="ticket-anc-col-baggage" />
          <col className="ticket-anc-col-seat" />
          <col className="ticket-anc-col-meal" />
          <col className="ticket-anc-col-ssr" />
          <col className="ticket-anc-col-barcode" />
        </colgroup>
        <thead>
          <tr>
            <th colSpan="5" className="ticket-anc-header">Ancillary Details</th>
            <th className="ticket-anc-header">Barcode</th>
          </tr>
        </thead>
        <tbody>
          <tr><td colSpan="6" className="ticket-section-label">{flightLabel}</td></tr>
          {datas.map((p, i) => {
            const segInfo = p?.SegmentAdditionalInfo?.[0];
            const paidBag = p?.Baggage?.length > 0
              ? p.Baggage.map(b => b.Text || `${b.Weight} Kg`).join(', ')
              : null;
            const meal = p?.MealDynamic?.length > 0 && p.MealDynamic[0].AirlineDescription
              ? p.MealDynamic[0].AirlineDescription
              : (p?.MealDynamic?.[0]?.Code && p.MealDynamic[0].Code !== 'NoMeal'
                  ? p.MealDynamic[0].Code
                  : '––');
            const seat = segInfo?.Seat || '––';
            const ssr = segInfo?.SpecialService || (p?.Ssr?.length > 0 ? p.Ssr[0] : '––');

            return (
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
                      Cabin: {segm.CabinBaggage || segInfo?.Baggage?.split('|')[1]?.trim() || '7 Kg'}<br />
                      Check-In: {segm.Baggage || segInfo?.Baggage?.split('|')[0]?.trim() || '15 Kg'}<br />
                      {paidBag ? `Extra: ${paidBag}` : 'Excess: ––'}
                    </div>
                  </td>
                  <td  style={{ verticalAlign: 'top' }}>
                    <div className="ticket-anc-label">🪑 Seat</div>
                    <div>{seat}</div>
                  </td>
                  <td  style={{ verticalAlign: 'top' }}>
                    <div className="ticket-anc-label">🍽 Meal</div>
                    <div>{meal}</div>
                  </td>
                  <td  style={{ verticalAlign: 'top' }}>
                    <div className="ticket-anc-label"  style={{ whiteSpace: 'nowrap' }}>⭐ Special Service</div>
                    <div>{ssr}</div>
                  </td>
                  <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    <BarcodeCell passenger={p} />
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      {/* ── BOTTOM SECTION: 3-col with price, 2-col without ── */}
      <div className={`ticket-bottom-section${showPrice ? '' : ' no-price'}`}>

        {/* Left: Important */}
        <div className="ticket-important-box">
          <p><span className="red-bold">Important:</span> This is an Electronic Ticket. Passengers must carry a valid photo ID for check-in at the airport.</p>
          <br />
          <p><span className="bold">Baggage dimensions may vary depending on airline policies. Please confirm with the airline in advance.</span></p>
          <br />
          <p>Carriage and other services provided by the carrier are subject to conditions of carriage. Passengers travelling on a tourist visa must show a return ticket at check-in.</p>
          <br />
          <p><span className="bold">Note:</span> We recommend purchasing travel insurance. Please contact your travel advisor.</p>
        </div>

        {/* Centre: General Information */}
        <div className="ticket-general-info">
          <strong>General Information :</strong>
          <ul>
            <li>Complete Check-In before departure. <strong>***Have a safe and pleasant journey***</strong></li>
            <li>Carry a valid government-issued photo ID for airport check-in.</li>
            <li>For international travel, ensure valid passport, visa (including transit visa if required), and immigration clearance.</li>
            <li>Travel is subject to the airline's Conditions of Carriage.</li>
            <li>Baggage dimensions may vary — confirm with airline in advance.</li>
            <li>Report 2 hours before departure. Check-in closes 1 hour before departure.</li>
          </ul>
        </div>

        {/* Right: Payment — only rendered when showPrice is true */}
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
const BookingDomesticRound = () => {
  const location = useLocation();
  //const response = location.state?.responsebook;
  const response = location.state?.responsebook ?? sample1;
  //const responsereturn = location.state?.responsebookreturn;
const responsereturn = location.state?.responsebook ?? sampleIB;
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [branchData, setBranchData] = useState('');
  const [showPrice, setShowPrice] = useState(true);
  const branchId = sessionStorage.getItem('branchId');

  // ── Outbound flight data ──
  const dataa = response.Response.Response;
  const farevl = response.Response.Response.FlightItinerary.Fare;
  const datas = response.Response.Response.FlightItinerary.Passenger;
  const segments = response.Response.Response.FlightItinerary.Segments;
  const segm = segments[0];
  const lsegm = segments[segments.length - 1];
  const serviceprice = response.price;
  const discount = response.discount;
  const markupp = parseFloat(response.expoPrice) + parseFloat(response.agentPrice) + parseFloat(response.subagentPrice);

  // ── Return flight data ──
  const dataa1 = responsereturn.Response.Response;
  const farevl1 = responsereturn.Response.Response.FlightItinerary.Fare;
  const datas1 = responsereturn.Response.Response.FlightItinerary.Passenger;
  const segments1 = responsereturn.Response.Response.FlightItinerary.Segments;
  const segm1 = segments1[0];
  const lsegm1 = segments1[segments1.length - 1];
  const serviceprice1 = responsereturn.price;
  const discount1 = responsereturn.discount;
  const markupp1 = parseFloat(responsereturn.expoPrice) + parseFloat(responsereturn.agentPrice) + parseFloat(responsereturn.subagentPrice);

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

    const pdfView1 = document.getElementById('pdf-view1');
    const pdfView2 = document.getElementById('pdf-view2');

    html2canvas(pdfView1, { scale: 2, useCORS: true }).then((canvas1) => {
      html2canvas(pdfView2, { scale: 2, useCORS: true }).then((canvas2) => {
        const doc = new jsPDF('portrait', 'pt', 'A4');
        const pageW = doc.internal.pageSize.getWidth();
        const pageH = doc.internal.pageSize.getHeight();
        doc.addImage(canvas1.toDataURL('image/png'), 'PNG', 10, 10, pageW - 20, pageH - 20);
        doc.addPage();
        doc.addImage(canvas2.toDataURL('image/png'), 'PNG', 10, 10, pageW - 20, pageH - 20);
        doc.save(withPrice ? 'Ticket-With-Price.pdf' : 'Ticket-No-Price.pdf');
      });
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

        {/* ── Outbound Ticket ── */}
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <TicketBlock
                  id="pdf-view1"
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

        {/* ── Return Ticket ── */}
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-10">
                <TicketBlock
                  id="pdf-view2"
                  branchData={branchData}
                  dataa={dataa1}
                  datas={datas1}
                  segm={segm1}
                  lsegm={lsegm1}
                  segments={segments1}
                  farevl={farevl1}
                  serviceprice={serviceprice1}
                  discount={discount1}
                  markupp={markupp1}
                  showPrice={showPrice}
                  flightLabel="Return Flight"
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

export default BookingDomesticRound;
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

// ── Sample data for testing (remove ?? sample1 in production) ──
const sample1 = {
  "Response": {
    "B2B2BStatus": false,
    "Error": { "ErrorCode": 0, "ErrorMessage": "" },
    "ResponseStatus": 1,
    "Response": {
      "PNR": "X97VFT",
      "BookingId": 1906910,
      "FlightItinerary": {
        "JourneyType": 1,
        "BookingId": 1906910,
        "PNR": "X97VFT",
        "Origin": "DEL",
        "Destination": "BOM",
        "AirlineCode": "QP",
        "Fare": {
          "Currency": "INR", "BaseFare": 1100, "Tax": 2594,
          "PublishedFare": 8744, "OtherCharges": 0,
          "TotalBaggageCharges": 5050, "TotalMealCharges": 0,
          "TotalSeatCharges": 0, "TransactionFee": 0
        },
        "Passenger": [
          {
            "BarcodeDetails": {
              "Id": 3135615,
              "Barcode": [{
                "Index": 1, "Format": "PDF417",
                "Content": "M1MANGALATH/SUNIL RAJ  X97VFT DELBOMQP 1128 238Y00000000 100",
                "BarCodeInBase64": null, "JourneyWayType": 3
              }]
            },
            "Title": "Mr", "FirstName": "Sunil Raj", "LastName": "Mangalath", "PaxType": 1,
            "Fare": { "PublishedFare": 3622, "TotalBaggageCharges": 2525, "TotalMealCharges": 0 },
            "Baggage": [{ "Weight": 5, "Text": "5 kgs", "FlightNumber": "1128" }],
            "MealDynamic": [{ "Code": "NoMeal", "AirlineDescription": null, "FlightNumber": "1128" }],
            "Ssr": [],
            "Ticket": { "TicketId": 2193319, "TicketNumber": "X97VFT", "IssueDate": "2024-07-06T11:09:04", "Status": "OK" },
            "GSTNumber": "",
            "SegmentAdditionalInfo": [{ "FareBasis": "B0O7RBIX", "Baggage": "15 Kg|7 Kg", "Meal": "0 Platter", "Seat": "", "SpecialService": "" }]
          },
          {
            "BarcodeDetails": {
              "Id": 3135616,
              "Barcode": [{
                "Index": 1, "Format": "PDF417",
                "Content": "M1KRISHAN/SUMANRAI     X97VFT DELBOMQP 1128 238Y00000000 100",
                "BarCodeInBase64": null, "JourneyWayType": 3
              }]
            },
            "Title": "Mstr", "FirstName": "sumanrai", "LastName": "Krishan", "PaxType": 2,
            "Fare": { "PublishedFare": 3622, "TotalBaggageCharges": 2525, "TotalMealCharges": 0 },
            "Baggage": [{ "Weight": 5, "Text": "5 kgs", "FlightNumber": "1128" }],
            "MealDynamic": [{ "Code": "NoMeal", "AirlineDescription": null, "FlightNumber": "1128" }],
            "Ssr": [],
            "Ticket": { "TicketId": 2193320, "TicketNumber": "X97VFT", "IssueDate": "2024-07-06T11:09:04", "Status": "OK" },
            "GSTNumber": "",
            "SegmentAdditionalInfo": [{ "FareBasis": "B0O7RBIX", "Baggage": "15 Kg|7 Kg", "Meal": "0 Platter", "Seat": "", "SpecialService": "" }]
          },
          {
            "BarcodeDetails": {
              "Id": 3135617,
              "Barcode": [{
                "Index": 1, "Format": "PDF417",
                "Content": "M1KRISHNA/SAM          X97VFT DELBOMQP 1128 238Y00000000 100",
                "BarCodeInBase64": null, "JourneyWayType": 3
              }]
            },
            "Title": "Mstr", "FirstName": "Sam", "LastName": "Krishna", "PaxType": 3,
            "Fare": { "PublishedFare": 1500, "TotalBaggageCharges": 0, "TotalMealCharges": 0 },
            "Baggage": [], "MealDynamic": [], "Ssr": [],
            "Ticket": { "TicketId": 2193321, "TicketNumber": "X97VFT", "IssueDate": "2024-07-06T11:09:04", "Status": "OK" },
            "GSTNumber": "",
            "SegmentAdditionalInfo": [{ "FareBasis": "B0O7RBIX", "Baggage": "0 Kg", "Meal": "0 Platter", "Seat": "", "SpecialService": "" }]
          }
        ],
        "Segments": [{
          "Baggage": "15 Kg", "CabinBaggage": "7 Kg",
          "Airline": { "AirlineCode": "QP", "AirlineName": "Akasa Air", "FlightNumber": "1128", "FareClass": "BC" },
          "Origin": {
            "Airport": { "AirportCode": "DEL", "AirportName": "Indira Gandhi Airport", "Terminal": "T2", "CityName": "Delhi" },
            "DepTime": "2024-08-25T16:10:00"
          },
          "Destination": {
            "Airport": { "AirportCode": "BOM", "AirportName": "Chhatrapati Shivaji International Airport", "Terminal": "T1", "CityName": "Mumbai" },
            "ArrTime": "2024-08-25T18:20:00"
          },
          "Duration": 130
        }],
        "FareRules": []
      }
    }
  }
};

// ── Styles ───────────────────────────────────────────────────
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
    font-size: 26px; font-weight: 700; color: #222; letter-spacing: 1px; margin: 0;
  }
  .ticket-status-pnr { text-align: right; }
  .ticket-badge-confirmed {
    display: inline-block;
    border: 2px solid #2e7d32; color: #2e7d32;
    font-weight: 700; font-size: 13px;
    padding: 3px 14px; border-radius: 4px; margin-bottom: 6px;
  }
  .ticket-pnr-line { font-size: 14px; font-weight: 700; color: #d4860a; }
  .ticket-issued-line { font-size: 11.5px; color: #555; }

  .ticket-table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }
  .ticket-table th, .ticket-table td {
    border: 1px solid #c0c0c0; padding: 7px 10px; font-size: 12.5px;
  }
  .ticket-table thead th {
    background: #d9e4f0; font-weight: 700; color: #1a1a1a; font-size: 12.5px;
  }
  .ticket-section-label { background: #eef3fa; font-weight: 600; font-size: 12.5px; color: #333; }

  .ticket-flight-logo { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 13px; }
  .ticket-airline-badge {
    width: 34px; height: 34px; background: #1a3f6f; border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-weight: 900; font-size: 11px; flex-shrink: 0; text-align: center; line-height: 1.1;
  }
  .ticket-flight-sub { font-size: 11.5px; color: #555; font-weight: 400; }
  .ticket-airport-code { font-size: 18px; font-weight: 700; }
  .ticket-airport-name { font-size: 11px; color: #555; }
  .ticket-terminal-time { font-size: 11.5px; color: #333; }
  .ticket-dep-time { font-weight: 700; color: #111; }
  .ticket-arrow-cell { text-align: center; color: #e87722; font-size: 20px; vertical-align: middle; }

  .ticket-anc-header { background: #d9e4f0; font-weight: 700; }
  .ticket-anc-passenger { font-weight: 700; background: #f5f5f5; }

  /* Fix ancillary table column widths so barcode doesn't stretch */
  .ticket-anc-table { table-layout: fixed; width: 100%; }
  .ticket-anc-col-route   { width: 80px; }
  .ticket-anc-col-baggage { width: 160px; }
  .ticket-anc-col-seat    { width: 70px; }
  .ticket-anc-col-meal    { width: 70px; }
  .ticket-anc-col-ssr     { width: 90px; }
  .ticket-anc-col-barcode { width: 160px; }

  .ticket-anc-label { display: block; font-weight: 700; font-size: 12px; margin-bottom: 4px; }
  .ticket-anc-value {
    display: block;
    font-size: 12px;
    color: #333;
  }
  .ticket-baggage-detail { font-size: 12px; line-height: 1.7; }

  /* Barcode SVG — fixed size, never stretches */
  .barcode-svg {
    display: block;
    width: 150px !important;
    height: 50px !important;
    margin: 0 auto;
  }

  .ticket-bottom-section {
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-top: 14px;
  }
  .ticket-bottom-section.no-price { grid-template-columns: 1fr 1fr; }

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
    background: #d9e4f0; font-weight: 700; font-size: 13px; padding: 6px 10px; border: 1px solid #ccc;
  }
  .ticket-total-row td { font-weight: 700; background: #f5f5f5; }
`;

// ── Code128B encoder — draws a proper barcode on a <canvas> ──
// This avoids JsBarcode's SVG sizing issues entirely.
const CODE128_PATTERNS = {
  ' ':['11011001100'],A:['10011100110'],B:['10011001110'],C:['10111011000'],
  D:['10111000110'],E:['10001101110'],F:['10111011100'],G:['11101101110'],
  H:['11101001100'],I:['11100101100'],J:['11100100110'],K:['11101100100'],
  L:['11100110100'],M:['11100110010'],N:['11011011000'],O:['11011000110'],
  P:['11000110110'],Q:['10100011000'],R:['10001011000'],S:['10001000110'],
  T:['10110001000'],U:['10001101000'],V:['10011001000'],W:['10000101110'],
  X:['10000110110'],Y:['10001010000'],Z:['10100001000'],
  '0':['11001100110'],'1':['11001001100'],'2':['11001001110'],'3':['11011001000'],
  '4':['11001101000'],'5':['11001100100'],'6':['11011011110'],'7':['11011110110'],
  '8':['11110110110'],'9':['10010110000'],
  '-':['10010000110'],'.':['11101011110'],'/':['11110101110'],
  '*':['10011110100'], // start B
};

// Full Code128B table (values 0–106)
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
  '11010000100','11010010000','11010011100','1100011101011',// stop
];
const C128_START_B = 104;
const C128_STOP    = 106;

function encodeCode128B(text) {
  // Build array of symbol values
  const vals = [C128_START_B];
  let checksum = C128_START_B;
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i) - 32;
    if (code < 0 || code > 94) continue; // skip unsupported chars
    vals.push(code);
    checksum += code * (i + 1);
  }
  vals.push(checksum % 103); // check symbol
  vals.push(C128_STOP);
  // Convert to bar pattern string
  return vals.map(v => C128B[v] || '').join('');
}

function drawBarcode(canvas, text) {
  if (!canvas || !text) return;
  const bars   = encodeCode128B(text);
  const barW   = 1.5;   // pixels per module
  const height = 48;
  const quietW = 10;    // quiet zone
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
const whatsapp1=sessionStorage.getItem("whatsapp");
// ── BarcodeCell component ─────────────────────────────────────
const BarcodeCell = ({ passenger }) => {
  const barcodeObj = passenger?.BarcodeDetails?.Barcode?.[0];
  const canvasRef  = React.useRef(null);
  const content    = barcodeObj?.Content || '';
  
  useEffect(() => {
    if (barcodeObj?.BarCodeInBase64 || !content) return;
    // Small delay so the canvas is in the DOM
    const t = setTimeout(() => drawBarcode(canvasRef.current, content), 50);
    return () => clearTimeout(t);
  }, [content]);

  if (!barcodeObj) {
    return <span style={{ fontSize: 11, color: '#999' }}>––</span>;
  }

  // Priority 1: Base64 image from API
  if (barcodeObj.BarCodeInBase64) {
    return (
      <img
        src={`data:image/png;base64,${barcodeObj.BarCodeInBase64}`}
        alt="Boarding barcode"
        style={{ maxWidth: 150, maxHeight: 56, display: 'block', margin: '0 auto' }}
      />
    );
  }

  // Priority 2: canvas-drawn Code128B barcode from Content string
  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 50 }}
    />
  );
};

// ── Reusable ticket block ─────────────────────────────────────
const TicketBlock = ({
  id, branchData, dataa, datas, segm, lsegm,
  segments, farevl, serviceprice, discount, markupp, showPrice, flightLabel,
}) => {
  const paxType = (z) => z === 1 ? 'Adult' : z === 2 ? 'Child' : z === 3 ? 'Infant' : '';
  const fmt     = (dt) => moment(dt).format('ddd, DD-MMM-YYYY HH:mm');
  const toINR   = (v)  => parseFloat(v || 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

  const totalAmount =
    parseFloat(farevl?.PublishedFare || 0)
    + parseFloat(markupp || 0)
    + parseFloat(farevl?.TotalBaggageCharges || 0)
    + parseFloat(farevl?.TotalMealCharges || 0)
    + parseFloat(serviceprice || 0)
    - parseFloat(discount || 0);

  return (
    <div id={id} className="ticket-wrapper">

      {/* ── HEADER ── */}
      <div className="ticket-header">
        <div className="ticket-agency-info">
          <img
            src="assets/images/SIGNATORY01.png"
            height="100"
            alt="Agency Logo"
            style={{ maxWidth: 160, display: 'block', marginBottom: 4 }}
          />
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
            Issued Date:{' '}
            {datas[0]?.Ticket?.IssueDate
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
                    <span className="ticket-flight-sub">
                      Duration: {Math.floor((seg.Duration || 0) / 60)}h {(seg.Duration || 0) % 60}m
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div className="ticket-airport-code">{seg.Origin?.Airport?.AirportCode}</div>
                <div className="ticket-airport-name">
                  ({seg.Origin?.Airport?.AirportName}, {seg.Origin?.Airport?.CityName})
                </div>
                <div className="ticket-terminal-time">Terminal: {seg.Origin?.Airport?.Terminal || '–'}</div>
                <div className="ticket-dep-time">{fmt(seg.Origin?.DepTime)}</div>
              </td>
              <td className="ticket-arrow-cell">✈</td>
              <td style={{ textAlign: 'right' }}>
                <div className="ticket-airport-code">{seg.Destination?.Airport?.AirportCode}</div>
                <div className="ticket-airport-name">
                  ({seg.Destination?.Airport?.AirportName}, {seg.Destination?.Airport?.CityName})
                </div>
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
          <tr>
            <td colSpan="6" className="ticket-section-label">{flightLabel || 'Departure Flight'}</td>
          </tr>

          {datas.map((p, i) => {
            // SegmentAdditionalInfo[0] holds per-segment baggage/meal/seat strings
            const segInfo = p?.SegmentAdditionalInfo?.[0];

            // Baggage string format: "15 Kg|7 Kg" → [checkIn, cabin]
            const bagParts = segInfo?.Baggage?.split('|') || [];
            const checkIn  = bagParts[0]?.trim() || segm.Baggage    || '15 Kg';
            const cabin    = bagParts[1]?.trim() || segm.CabinBaggage || '7 Kg';

            // Extra paid baggage from the Baggage array
            const paidBag = p?.Baggage?.length > 0
              ? p.Baggage.map(b => b.Text || `${b.Weight} Kg`).join(', ')
              : null;

            // Meal — show description or code, skip NoMeal
            const mealCode = p?.MealDynamic?.[0]?.Code;
            const mealDesc = p?.MealDynamic?.[0]?.AirlineDescription;
            const meal = (mealDesc && mealDesc !== 'NoMeal')
              ? mealDesc
              : (mealCode && mealCode !== 'NoMeal' ? mealCode : '––');

            // Seat from SegmentAdditionalInfo
            const seat = segInfo?.Seat?.trim() || '––';

            // Special Service
            const ssr = segInfo?.SpecialService?.trim()
              || (p?.Ssr?.length > 0 ? p.Ssr[0] : '––');

            return (
              <React.Fragment key={i}>
                {/* Passenger name row */}
                <tr>
                  <td colSpan="6" className="ticket-anc-passenger">
                    {p?.Title} {p?.FirstName} {p?.LastName}
                  </td>
                </tr>

                {/* Detail row */}
                <tr>
                  {/* Route ref */}
                  <td style={{ fontSize: 11, color: '#777', width: 90, verticalAlign: 'top' }}>
                    {segm.Origin?.Airport?.AirportCode} – {lsegm.Destination?.Airport?.AirportCode}<br />
                    {segm.Airline?.AirlineCode} {segm.Airline?.FlightNumber}
                  </td>

                  {/* Baggage */}
                  <td style={{ verticalAlign: 'top' }}>
                    <span className="ticket-anc-label">🧳 Baggage</span>
                    <div className="ticket-baggage-detail">
                      Cabin: {cabin}<br />
                      Check-In: {checkIn}<br />
                      {paidBag ? `Extra: ${paidBag}` : 'Excess: ––'}
                    </div>
                  </td>

                  {/* Seat — label on top, value below */}
                  <td style={{ verticalAlign: 'top' }}>
                    <span className="ticket-anc-label">🪑 Seat</span>
                    <span className="ticket-anc-value">{seat}</span>
                  </td>

                  {/* Meal — label on top, value below */}
                  <td style={{ verticalAlign: 'top' }}>
                    <span className="ticket-anc-label">🍽 Meal</span>
                    <span className="ticket-anc-value">{meal}</span>
                  </td>

                  {/* Special Service — label on top, value below */}
                  <td style={{ verticalAlign: 'top' }}>
                    <span className="ticket-anc-label"  style={{ whiteSpace: 'nowrap' }}>⭐ Special Service</span>
                    <span className="ticket-anc-value">{ssr}</span>
                  </td>

                  {/* Barcode from real API BarcodeDetails */}
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

        {/* Left: Important notices */}
        <div className="ticket-important-box">
          <p>
            <span className="red-bold">Important:</span> This is an Electronic Ticket.
            Passengers must carry a valid photo ID for check-in at the airport.
          </p>
          <br />
          <p>
            <span className="bold">Baggage dimensions may vary depending on airline policies.
            Please confirm with the airline in advance.</span>
          </p>
          <br />
          <p>
            Carriage and other services provided by the carrier are subject to conditions of
            carriage. These conditions may be obtained from the issuing carrier. Passengers
            travelling on a tourist visa must show a return ticket at check-in.
          </p>
          <br />
          <p>
            <span className="bold">Note:</span> We recommend purchasing travel insurance.
            Please contact your travel advisor to purchase travel insurance.
          </p>
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
                  <td style={{ textAlign: 'right' }}>
                    {toINR(parseFloat(farevl?.PublishedFare || 0) + parseFloat(markupp || 0))}
                  </td>
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
  // ?? sample1 — fallback for testing without navigation state. Remove ?? sample1 in production.
  const response = location.state?.responsebook ?? sample1;

  const serviceprice = response.price       ?? 0;
  const discount     = response.discount    ?? 0;
  const markupp      = parseFloat(response.expoPrice     || 0)
                     + parseFloat(response.agentPrice    || 0)
                     + parseFloat(response.subagentPrice || 0);

  const navigate  = useNavigate();
  const [value, setValue]           = useState('');
  const [branchData, setBranchData] = useState('');
  const [showPrice, setShowPrice]   = useState(true);

  const dataa    = response.Response.Response;
  const farevl   = response.Response.Response.FlightItinerary.Fare;
  const datas    = response.Response.Response.FlightItinerary.Passenger;
  const segments = response.Response.Response.FlightItinerary.Segments;
  const segm     = segments[0];
  const lsegm    = segments[segments.length - 1];

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
    if (branchId) fetchAgentInfo();
  }, [branchId]);

  const pdfDownload = async (e, withPrice) => {
    e.preventDefault();
    setShowPrice(withPrice);
    await new Promise(resolve => setTimeout(resolve, 300));
    const pdfView = document.getElementById('pdf-view');
    html2canvas(pdfView, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc   = new jsPDF('portrait', 'pt', 'A4');
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
import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
            "BarcodeDetails": { "Id": 3135615, "Barcode": [{ "Index": 1, "Format": "PDF417", "Content": "M1MANGALATH/SUNIL RAJ  X97VFT DELBOMQP 1128 238Y00000000 100", "BarCodeInBase64": null, "JourneyWayType": 3 }] },
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
            "BarcodeDetails": { "Id": 3135616, "Barcode": [{ "Index": 1, "Format": "PDF417", "Content": "M1KRISHAN/SUMANRAI     X97VFT DELBOMQP 1128 238Y00000000 100", "BarCodeInBase64": null, "JourneyWayType": 3 }] },
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
            "BarcodeDetails": { "Id": 3135617, "Barcode": [{ "Index": 1, "Format": "PDF417", "Content": "M1KRISHNA/SAM          X97VFT DELBOMQP 1128 238Y00000000 100", "BarCodeInBase64": null, "JourneyWayType": 3 }] },
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
          "Origin": { "Airport": { "AirportCode": "DEL", "AirportName": "Indira Gandhi Airport", "Terminal": "T2", "CityName": "Delhi" }, "DepTime": "2024-08-25T16:10:00" },
          "Destination": { "Airport": { "AirportCode": "BOM", "AirportName": "Chhatrapati Shivaji International Airport", "Terminal": "T1", "CityName": "Mumbai" }, "ArrTime": "2024-08-25T18:20:00" },
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
  .ticket-wrapper { max-width: 860px; margin: 0 auto; background: #fff; border: 1px solid #ccc; padding: 24px 28px; font-family: 'Source Sans 3', Arial, sans-serif; font-size: 13px; color: #222; box-sizing: border-box; }
  .ticket-wrapper *, .ticket-wrapper *::before, .ticket-wrapper *::after { box-sizing: border-box; }
  .ticket-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 18px; }
  .ticket-agency-info { font-size: 12px; line-height: 1.6; }
  .ticket-agency-info strong { font-size: 13px; }
  .ticket-title-block { text-align: center; flex: 1; }
  .ticket-title-block h1 { font-size: 26px; font-weight: 700; color: #222; letter-spacing: 1px; margin: 0; }
  .ticket-status-pnr { text-align: right; }
  .ticket-badge-confirmed { display: inline-block; border: 2px solid #2e7d32; color: #2e7d32; font-weight: 700; font-size: 13px; padding: 3px 14px; border-radius: 4px; margin-bottom: 6px; }
  .ticket-pnr-line { font-size: 14px; font-weight: 700; color: #d4860a; }
  .ticket-issued-line { font-size: 11.5px; color: #555; }
  .ticket-table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }
  .ticket-table th, .ticket-table td { border: 1px solid #c0c0c0; padding: 7px 10px; font-size: 12.5px; }
  .ticket-table thead th { background: #d9e4f0; font-weight: 700; color: #1a1a1a; font-size: 12.5px; }
  .ticket-section-label { background: #eef3fa; font-weight: 600; font-size: 12.5px; color: #333; }
  .ticket-flight-logo { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 13px; }
  .ticket-airline-badge { width: 34px; height: 34px; background: #1a3f6f; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 900; font-size: 11px; flex-shrink: 0; text-align: center; line-height: 1.1; }
  .ticket-flight-sub { font-size: 11.5px; color: #555; font-weight: 400; }
  .ticket-airport-code { font-size: 18px; font-weight: 700; }
  .ticket-airport-name { font-size: 11px; color: #555; }
  .ticket-terminal-time { font-size: 11.5px; color: #333; }
  .ticket-dep-time { font-weight: 700; color: #111; }
  .ticket-arrow-cell { text-align: center; color: #e87722; font-size: 20px; vertical-align: middle; }
  .ticket-anc-header { background: #d9e4f0; font-weight: 700; }
  .ticket-anc-passenger { font-weight: 700; background: #f5f5f5; }
  .ticket-anc-table { table-layout: fixed; width: 100%; }
  .ticket-anc-col-route { width: 80px; }
  .ticket-anc-col-baggage { width: 160px; }
  .ticket-anc-col-seat { width: 70px; }
  .ticket-anc-col-meal { width: 70px; }
  .ticket-anc-col-ssr { width: 90px; }
  .ticket-anc-col-barcode { width: 160px; }
  .ticket-anc-label { display: block; font-weight: 700; font-size: 12px; margin-bottom: 4px; }
  .ticket-anc-value { display: block; font-size: 12px; color: #333; }
  .ticket-baggage-detail { font-size: 12px; line-height: 1.7; }
  .barcode-svg { display: block; width: 150px !important; height: 50px !important; margin: 0 auto; }
  .ticket-bottom-section { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-top: 14px; }
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
  .ticket-pay-header { background: #d9e4f0; font-weight: 700; font-size: 13px; padding: 6px 10px; border: 1px solid #ccc; }
  .ticket-total-row td { font-weight: 700; background: #f5f5f5; }

  /* ── WhatsApp Modal Styles ── */
  .wa-modal-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.55);
    display: flex; align-items: center; justify-content: center;
    z-index: 9999; backdrop-filter: blur(2px);
    animation: waFadeIn 0.18s ease;
  }
  @keyframes waFadeIn { from { opacity: 0 } to { opacity: 1 } }
  .wa-modal {
    background: #fff; border-radius: 16px; width: 420px; max-width: 95vw;
    box-shadow: 0 24px 60px rgba(0,0,0,0.22);
    overflow: hidden; animation: waSlideUp 0.22s cubic-bezier(.34,1.56,.64,1);
  }
  @keyframes waSlideUp { from { transform: translateY(30px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
  .wa-modal-header {
    background: #25D366; padding: 18px 22px;
    display: flex; align-items: center; gap: 12px;
  }
  .wa-modal-header svg { flex-shrink: 0; }
  .wa-modal-header h3 { margin: 0; color: #fff; font-size: 17px; font-weight: 700; font-family: 'Source Sans 3', sans-serif; }
  .wa-modal-body { padding: 22px; }
  .wa-field { margin-bottom: 16px; }
  .wa-field label { display: block; font-size: 12.5px; font-weight: 700; color: #444; margin-bottom: 6px; font-family: 'Source Sans 3', sans-serif; letter-spacing: 0.3px; }
  .wa-field input, .wa-field textarea {
    width: 100%; border: 1.5px solid #ddd; border-radius: 8px;
    padding: 10px 13px; font-size: 13.5px; font-family: inherit;
    transition: border-color 0.15s; outline: none; resize: none;
    color: #222;
  }
  .wa-field input:focus, .wa-field textarea:focus { border-color: #25D366; box-shadow: 0 0 0 3px rgba(37,211,102,0.12); }
  .wa-price-toggle { display: flex; gap: 10px; }
  .wa-price-btn {
    flex: 1; padding: 9px; border: 2px solid #ddd; border-radius: 8px;
    background: #fff; cursor: pointer; font-size: 13px; font-weight: 600;
    font-family: inherit; transition: all 0.15s; color: #555;
  }
  .wa-price-btn.active { border-color: #25D366; background: #f0fdf4; color: #15803d; }
  .wa-modal-footer { padding: 0 22px 22px; display: flex; gap: 10px; }
  .wa-btn-cancel {
    flex: 1; padding: 11px; border: 1.5px solid #ddd; border-radius: 8px;
    background: #fff; cursor: pointer; font-size: 14px; font-weight: 600;
    font-family: inherit; color: #666; transition: background 0.15s;
  }
  .wa-btn-cancel:hover { background: #f5f5f5; }
  .wa-btn-share {
    flex: 2; padding: 11px; border: none; border-radius: 8px;
    background: #25D366; cursor: pointer; font-size: 14px; font-weight: 700;
    font-family: inherit; color: #fff; display: flex; align-items: center;
    justify-content: center; gap: 8px; transition: background 0.15s;
  }
  .wa-btn-share:hover { background: #1ebe5d; }
  .wa-btn-share:disabled { background: #a8e6c2; cursor: not-allowed; }
  .wa-error { font-size: 12px; color: #dc2626; margin-top: 5px; display: block; }
  .wa-fetching { font-size: 12px; color: #888; margin-top: 5px; }
`;

// ── Code128B barcode encoder (unchanged) ─────────────────────
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

// ── BarcodeCell ───────────────────────────────────────────────
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

// ── WhatsApp Share Modal ──────────────────────────────────────
const WhatsAppShareModal = ({ isOpen, onClose, onShare, defaultMobile, isSending }) => {
  const [mobile, setMobile]     = useState('');
  const [message, setMessage]   = useState('');
  const [withPrice, setWithPrice] = useState(false);
  const [error, setError]       = useState('');

  // Pre-fill mobile when defaultMobile arrives from DB
  useEffect(() => {
    if (defaultMobile) setMobile(defaultMobile);
  }, [defaultMobile]);

  if (!isOpen) return null;

  const handleShare = () => {
    const cleaned = mobile.replace(/[\s\-\(\)]/g, '');
    if (!cleaned) { setError('Please enter a valid mobile number.'); return; }
    if (!/^\+?[0-9]{7,15}$/.test(cleaned)) { setError('Enter a valid number with country code, e.g. +919876543210'); return; }
    setError('');
    onShare(withPrice, cleaned, message);
  };

  return (
    <div className="wa-modal-overlay" onClick={onClose}>
      <div className="wa-modal" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="wa-modal-header">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="14" fill="white" fillOpacity="0.25"/>
            <path d="M14 4C8.477 4 4 8.477 4 14c0 1.82.49 3.524 1.343 4.99L4 24l5.163-1.322A9.96 9.96 0 0014 24c5.523 0 10-4.477 10-10S19.523 4 14 4zm5.07 13.9c-.213.598-1.236 1.14-1.7 1.196-.435.052-.985.074-1.59-.1-.367-.11-.838-.258-1.44-.504-2.528-1.09-4.18-3.63-4.307-3.8-.128-.17-1.04-1.383-1.04-2.638 0-1.255.658-1.872.891-2.126.234-.254.51-.318.68-.318l.49.009c.157.007.368-.06.576.44.213.513.724 1.768.786 1.896.063.128.105.277.02.447-.084.17-.127.276-.254.425-.127.148-.267.33-.382.444-.127.127-.26.265-.112.52.149.255.66 1.088 1.417 1.763.972.866 1.792 1.134 2.047 1.262.255.127.404.106.553-.064.148-.17.637-.744.807-1 .17-.255.34-.212.573-.127.234.085 1.487.701 1.742.83.255.127.425.19.488.296.063.107.063.616-.15 1.214z" fill="white"/>
          </svg>
          <h3>Share via WhatsApp</h3>
        </div>

        {/* Body */}
        <div className="wa-modal-body">

          {/* Mobile number */}
          <div className="wa-field">
            <label>📱 Customer Mobile Number</label>
            <input
              type="tel"
              placeholder="+91 9876543210"
              value={mobile}
              onChange={e => { setMobile(e.target.value); setError(''); }}
            />
            {error && <span className="wa-error">{error}</span>}
            {!defaultMobile && !error && (
              <span className="wa-fetching">Fetching from database…</span>
            )}
          </div>

          {/* Message */}
          <div className="wa-field">
            <label>💬 Message (optional)</label>
            <textarea
              rows={3}
              placeholder="Dear passenger, please find your e-ticket attached."
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>

          {/* Price toggle */}
          <div className="wa-field">
            <label>🧾 Ticket Type</label>
            <div className="wa-price-toggle">
              <button
                className={`wa-price-btn${!withPrice ? ' active' : ''}`}
                onClick={() => setWithPrice(false)}
              >
                Without Price
              </button>
              <button
                className={`wa-price-btn${withPrice ? ' active' : ''}`}
                onClick={() => setWithPrice(true)}
              >
                With Price
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="wa-modal-footer">
          <button className="wa-btn-cancel" onClick={onClose}>Cancel</button>
          <button className="wa-btn-share" onClick={handleShare} disabled={isSending}>
            {isSending ? (
              <>Preparing…</>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
                Send on WhatsApp
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

// ── TicketBlock (unchanged from original) ─────────────────────
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
      <div className="ticket-header">
        <div className="ticket-agency-info">
          <img src="assets/images/SIGNATORY01.png" height="100" alt="Agency Logo" style={{ maxWidth: 160, display: 'block', marginBottom: 4 }} />
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

      <table className="ticket-table">
        <thead>
          <tr><th>First Name</th><th>Last Name</th><th>Passenger Type</th><th>Ticket No.</th><th>GST No.</th></tr>
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

      <table className="ticket-table">
        <thead>
          <tr><th>Flight Details</th><th>Departure</th><th style={{ width: 40 }}></th><th style={{ textAlign: 'right' }}>Arrival</th></tr>
        </thead>
        <tbody>
          <tr><td colSpan="4" className="ticket-section-label">{flightLabel || 'Departure Flight'}</td></tr>
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

      <table className="ticket-table ticket-anc-table">
        <colgroup>
          <col className="ticket-anc-col-route" /><col className="ticket-anc-col-baggage" />
          <col className="ticket-anc-col-seat" /><col className="ticket-anc-col-meal" />
          <col className="ticket-anc-col-ssr" /><col className="ticket-anc-col-barcode" />
        </colgroup>
        <thead>
          <tr>
            <th colSpan="5" className="ticket-anc-header">Ancillary Details</th>
            <th className="ticket-anc-header">Barcode</th>
          </tr>
        </thead>
        <tbody>
          <tr><td colSpan="6" className="ticket-section-label">{flightLabel || 'Departure Flight'}</td></tr>
          {datas.map((p, i) => {
            const segInfo  = p?.SegmentAdditionalInfo?.[0];
            const bagParts = segInfo?.Baggage?.split('|') || [];
            const checkIn  = bagParts[0]?.trim() || segm.Baggage || '15 Kg';
            const cabin    = bagParts[1]?.trim() || segm.CabinBaggage || '7 Kg';
            const paidBag  = p?.Baggage?.length > 0 ? p.Baggage.map(b => b.Text || `${b.Weight} Kg`).join(', ') : null;
            const mealCode = p?.MealDynamic?.[0]?.Code;
            const mealDesc = p?.MealDynamic?.[0]?.AirlineDescription;
            const meal     = (mealDesc && mealDesc !== 'NoMeal') ? mealDesc : (mealCode && mealCode !== 'NoMeal' ? mealCode : '––');
            const seat     = segInfo?.Seat?.trim() || '––';
            const ssr      = segInfo?.SpecialService?.trim() || (p?.Ssr?.length > 0 ? p.Ssr[0] : '––');

            return (
              <React.Fragment key={i}>
                <tr><td colSpan="6" className="ticket-anc-passenger">{p?.Title} {p?.FirstName} {p?.LastName}</td></tr>
                <tr>
                  <td style={{ fontSize: 11, color: '#777', width: 90, verticalAlign: 'top' }}>
                    {segm.Origin?.Airport?.AirportCode} – {lsegm.Destination?.Airport?.AirportCode}<br />
                    {segm.Airline?.AirlineCode} {segm.Airline?.FlightNumber}
                  </td>
                  <td style={{ verticalAlign: 'top' }}>
                    <span className="ticket-anc-label">🧳 Baggage</span>
                    <div className="ticket-baggage-detail">Cabin: {cabin}<br />Check-In: {checkIn}<br />{paidBag ? `Extra: ${paidBag}` : 'Excess: ––'}</div>
                  </td>
                  <td style={{ verticalAlign: 'top' }}><span className="ticket-anc-label">🪑 Seat</span><span className="ticket-anc-value">{seat}</span></td>
                  <td style={{ verticalAlign: 'top' }}><span className="ticket-anc-label">🍽 Meal</span><span className="ticket-anc-value">{meal}</span></td>
                  <td style={{ verticalAlign: 'top' }}><span className="ticket-anc-label" style={{ whiteSpace: 'nowrap' }}>⭐ Special Service</span><span className="ticket-anc-value">{ssr}</span></td>
                  <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><BarcodeCell passenger={p} /></td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      <div className={`ticket-bottom-section${showPrice ? '' : ' no-price'}`}>
        <div className="ticket-important-box">
          <p><span className="red-bold">Important:</span> This is an Electronic Ticket. Passengers must carry a valid photo ID for check-in at the airport.</p>
          <br />
          <p><span className="bold">Baggage dimensions may vary depending on airline policies. Please confirm with the airline in advance.</span></p>
          <br />
          <p>Carriage and other services provided by the carrier are subject to conditions of carriage. These conditions may be obtained from the issuing carrier. Passengers travelling on a tourist visa must show a return ticket at check-in.</p>
          <br />
          <p><span className="bold">Note:</span> We recommend purchasing travel insurance. Please contact your travel advisor to purchase travel insurance.</p>
        </div>
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
        {showPrice && (
          <div className="ticket-payment-box">
            <table>
              <tbody>
                <tr><td colSpan="2" className="ticket-pay-header">Payment Details</td></tr>
                <tr><td>Fare (incl. markup):</td><td style={{ textAlign: 'right' }}>{toINR(parseFloat(farevl?.PublishedFare || 0) + parseFloat(markupp || 0))}</td></tr>
                <tr><td>Transaction Fee:</td><td style={{ textAlign: 'right' }}>{toINR(farevl?.TransactionFee)}</td></tr>
                <tr><td>Other Charges:</td><td style={{ textAlign: 'right' }}>{toINR(farevl?.OtherCharges)}</td></tr>
                <tr><td>Baggage Charges:</td><td style={{ textAlign: 'right' }}>{toINR(farevl?.TotalBaggageCharges)}</td></tr>
                <tr><td>Meal Charges:</td><td style={{ textAlign: 'right' }}>{toINR(farevl?.TotalMealCharges)}</td></tr>
                <tr><td>Service Charge:</td><td style={{ textAlign: 'right' }}>{toINR(serviceprice)}</td></tr>
                <tr><td>Discount:</td><td style={{ textAlign: 'right' }}>- {toINR(discount)}</td></tr>
                <tr className="ticket-total-row"><td>Total Amount:</td><td style={{ textAlign: 'right' }}>{toINR(totalAmount)}</td></tr>
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

  const serviceprice = response.price    ?? 0;
  const discount     = response.discount ?? 0;
  const markupp      =
    parseFloat(response.expoPrice     || 0)
    + parseFloat(response.agentPrice    || 0)
    + parseFloat(response.subagentPrice || 0);

  const navigate  = useNavigate();
  const [value, setValue]             = useState('');
  const [branchData, setBranchData]   = useState('');
  const [showPrice, setShowPrice]     = useState(true);
  const [showWaModal, setShowWaModal] = useState(false);
  const [customerMobile, setCustomerMobile] = useState('');
  const [isSending, setIsSending]     = useState(false);

  const dataa    = response.Response.Response;
  const farevl   = response.Response.Response.FlightItinerary.Fare;
  const datas    = response.Response.Response.FlightItinerary.Passenger;
  const segments = response.Response.Response.FlightItinerary.Segments;
  const segm     = segments[0];
  const lsegm    = segments[segments.length - 1];

  const branchId  = sessionStorage.getItem('branchId');
  const bookingId = response.Response.Response.BookingId;

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

  // ── Fetch customer mobile from DB when modal opens ────────
  const fetchCustomerMobile = async () => {
    // Priority 1: sessionStorage (already set by a previous screen)
    const fromSession = sessionStorage.getItem('whatsapp');
    if (fromSession) {
      setCustomerMobile(fromSession);
      return;
    }

    // Priority 2: branchData already holds poc_mobile (agent's number)
    // If your API stores the customer/passenger mobile separately, call it here.
    // Replace the endpoint & payload to match your backend.
    try {
      const res = await axios.post('https://b2b.travelxpo.in/api/getBookingContact', {
        bookingId,   // pass booking ID to look up customer mobile
        branchId,
      });
      // Adjust the key below to match your actual API response field
      const mobile =
        res?.data?.mobile          ||
        res?.data?.customerMobile  ||
        res?.data?.poc_mobile      ||
        res?.data?.phone           ||
        '';
      setCustomerMobile(mobile);
    } catch (err) {
      console.error('Could not fetch customer mobile:', err);
      // Leave empty — user can type it manually in the modal
    }
  };

  const openWhatsAppModal = () => {
    setCustomerMobile(''); // reset while fetching
    setShowWaModal(true);
    fetchCustomerMobile();
  };

  // ── Generate PDF blob (shared between download & share) ───
  const generatePdfBlob = async (withPrice) => {
    setShowPrice(withPrice);
    await new Promise(resolve => setTimeout(resolve, 300));
    const pdfView = document.getElementById('pdf-view');
    const canvas  = await html2canvas(pdfView, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL('image/png');
    const doc     = new jsPDF('portrait', 'pt', 'A4');
    const pageW   = doc.internal.pageSize.getWidth();
    const pageH   = doc.internal.pageSize.getHeight();
    doc.addImage(imgData, 'PNG', 10, 10, pageW - 20, pageH - 20);
    return doc.output('blob');
  };

  // ── Download PDF (existing behaviour) ────────────────────
  const pdfDownload = async (e, withPrice) => {
    e.preventDefault();
    setShowPrice(withPrice);
    await new Promise(resolve => setTimeout(resolve, 300));
    const pdfView = document.getElementById('pdf-view');
    html2canvas(pdfView, { scale: 2, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc     = new jsPDF('portrait', 'pt', 'A4');
      const pageW   = doc.internal.pageSize.getWidth();
      const pageH   = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 10, 10, pageW - 20, pageH - 20);
      doc.save(withPrice ? 'Ticket-With-Price.pdf' : 'Ticket-No-Price.pdf');
    });
  };

  // ── Share to WhatsApp ─────────────────────────────────────
  const shareToWhatsApp = async (withPrice, mobileNumber, message) => {
    setIsSending(true);
    const fileName = withPrice ? 'Ticket-With-Price.pdf' : 'Ticket-No-Price.pdf';
    // Ensure country code — prepend +91 if bare 10-digit Indian number
    let cleanNumber = mobileNumber.replace(/[\s\-\(\)]/g, '');
    if (/^[6-9]\d{9}$/.test(cleanNumber)) cleanNumber = '91' + cleanNumber;
    if (cleanNumber.startsWith('+')) cleanNumber = cleanNumber.slice(1);

    try {
      const blob = await generatePdfBlob(withPrice);
      const file = new File([blob], fileName, { type: 'application/pdf' });

      // Mobile: try native Web Share API (shares actual PDF file)
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: 'E-Ticket',
          text: message || 'Dear passenger, please find your e-ticket attached.',
          files: [file],
        });
        setShowWaModal(false);
        setIsSending(false);
        return;
      }

      // Desktop fallback: open WhatsApp Web with pre-filled text
      // (User will need to attach the PDF manually on desktop)
      // We trigger a download of the PDF simultaneously so they have it ready.
      const url = URL.createObjectURL(blob);
      const a   = document.createElement('a');
      a.href     = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);

      const encodedMsg = encodeURIComponent(
        message || `Dear passenger, please find your e-ticket (${fileName}) attached.`
      );
      window.open(`https://wa.me/${cleanNumber}?text=${encodedMsg}`, '_blank');

      setShowWaModal(false);
    } catch (err) {
      console.error('WhatsApp share failed:', err);
      alert('Could not open WhatsApp. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <style>{ticketStyles}</style>
      <Navbar />
      <div className="page-content">

        {/* ── Action bar ── */}
        <div className="row mb-3">
          <div className="col-lg-5"></div>
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
          {/* ── NEW: WhatsApp Share Button ── */}
          <div className="col-lg-2" style={{ marginTop: '-15px' }}>
            <button
              onClick={openWhatsAppModal}
              className="btn"
              style={{
                background: '#25D366', color: '#fff', fontWeight: 600,
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Share on WhatsApp
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

      {/* ── WhatsApp Modal ── */}
      <WhatsAppShareModal
        isOpen={showWaModal}
        onClose={() => setShowWaModal(false)}
        onShare={shareToWhatsApp}
        defaultMobile={customerMobile}
        isSending={isSending}
      />
    </div>
  );
};

export default BookingOneway;
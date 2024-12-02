// "use client";
// import React, { useState, useEffect } from "react";
// import QRCode from "qrcode";

// const PaymentQRCode: React.FC = () => {
//   const [showDoneModal, setShowDoneModal] = useState(false); // State for the "Done" modal

//   useEffect(() => {
//     // Generate QR Code on mount
//     const generateQRCode = async () => {
//       const url = "https://yourapp.com/payment"; // Your actual URL here
//       try {
//         const qrCodeUrl = await QRCode.toDataURL(url);
//         const qrCodeImg = document.getElementById("qrCode") as HTMLImageElement;
//         qrCodeImg.src = qrCodeUrl;
//       } catch (err) {
//         console.error("Error generating QR code:", err);
//       }
//     };

//     generateQRCode();

//     // Function to detect when the page is fully loaded
//     const onLoadEvent = () => {
//       console.log("Page loaded, showing Done modal");
//       setShowDoneModal(true);
//     };

//     // Check if the page has already loaded
//     if (document.readyState === "complete") {
//       onLoadEvent();
//     } else {
//       // Otherwise, wait for the load event
//       window.addEventListener("load", onLoadEvent);
//     }

//     // Clean up event listener on unmount
//     return () => {
//       window.removeEventListener("load", onLoadEvent);
//     };
//   }, []);

//   // Detect URL change (for real-time modal triggering)
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const qrCodeScanned = urlParams.get("scanned"); // Or any condition that indicates the QR scan completion

//     if (qrCodeScanned) {
//       setShowDoneModal(true); // Show modal when the QR code is scanned and processed
//     }
//   }, [window.location.href]); // This hook runs when the URL changes

//   const closeModal = () => {
//     setShowDoneModal(false); // Close the "Done" modal
//   };

//   return (
//     <div className="flex flex-col items-center justify-center py-10">
//       <h3 className="text-xl font-semibold mb-4">
//         Scan the QR Code to make a payment
//       </h3>
//       <img
//         id="qrCode"
//         alt="Payment QR Code"
//         className="w-64 h-64 border border-gray-300 rounded-md shadow-lg"
//       />

//       {showDoneModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg w-80 text-center shadow-xl">
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Done</h2>
//             <p className="text-lg text-gray-700 mb-4">
//               The QR code has been successfully scanned and processed.
//             </p>
//             <button
//               onClick={closeModal}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentQRCode;

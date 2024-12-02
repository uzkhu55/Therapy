"use client";
import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import io from "socket.io-client";

// Ensure the URL matches your backend
const socket = io("http://localhost:8000");

const PaymentQRCode: React.FC = () => {
  const [showDoneModal, setShowDoneModal] = useState(false);
  const [isQRScanned, setIsQRScanned] = useState(false); // Track the scan status
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null); // Store generated QR code URL

  useEffect(() => {
    // Generate QR code on mount
    const generateQRCode = async () => {
      const url = "https://www.youtube.com/as"; // Replace with your actual payment URL
      try {
        const qrCode = await QRCode.toDataURL(url);
        setQrCodeUrl(qrCode);
      } catch (err) {
        console.error("Error generating QR code:", err);
      }
    };

    generateQRCode();

    // Listen for 'qrScanned' event to show the modal
    socket.on("qrScanned", (data) => {
      console.log("QR Scanned Event Received:", data); // Log the event data
      setIsQRScanned(true); // Set scanned status to true when event is received
      setShowDoneModal(true); // Show the modal
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off("qrScanned");
    };
  }, []);

  const checkIfQRScanned = () => {
    // Emit an event to the server to check if the QR code was scanned
    console.log("Checking if QR code is scanned...");
    socket.emit("checkQRScanStatus", {}); // Send a request to the server for QR scan status
  };

  const closeModal = () => {
    setShowDoneModal(false);
    setIsQRScanned(false); // Reset the scan status when the modal is closed
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h3 className="text-xl font-semibold mb-4">
        Scan the QR Code to make a payment
      </h3>
      {qrCodeUrl ? (
        <img
          id="qrCode"
          src={qrCodeUrl}
          alt="Payment QR Code"
          className="w-64 h-64 border border-gray-300 rounded-md shadow-lg mb-4"
        />
      ) : (
        <p>Loading QR Code...</p>
      )}

      {/* Button to check if QR code has been scanned */}
      <button
        onClick={checkIfQRScanned}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
      >
        Check if QR Code is Scanned
      </button>

      {showDoneModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 text-center shadow-xl">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Done</h2>
            <p className="text-lg text-gray-700 mb-4">
              {isQRScanned
                ? "The QR code has been successfully scanned and processed."
                : "QR Code is not scanned yet."}
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentQRCode;

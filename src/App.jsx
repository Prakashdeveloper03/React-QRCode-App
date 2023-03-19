import { useState } from "react";
import QRCode from "qrcode.react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeValue, setQRCodeValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setQRCodeValue("");
  };

  const handleGenerateButtonClick = () => {
    if (!inputValue.trim()) return;

    setQRCodeValue(inputValue.trim());
  };

  return (
    <div className="min-h-screen bg-blue-500 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 flex flex-col items-center space-y-8">
        <h1 className="text-2xl font-semibold">QR Code Generator</h1>
        <p className="text-gray-500">Paste a URL or enter text to generate QR code</p>
        <div className="flex flex-col items-center space-y-4 w-full">
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition duration-150 ease-in-out focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter text or URL"
          />
          <button
            className="bg-blue-500 text-white px-4 py-3 rounded-lg font-semibold transition duration-150 ease-in-out hover:bg-blue-600"
            onClick={handleGenerateButtonClick}
          >
            Generate QR Code
          </button>
        </div>
        {qrCodeValue && (
          <div className="w-full border border-gray-300 p-8 rounded-lg">
            <QRCode value={qrCodeValue} size={300} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
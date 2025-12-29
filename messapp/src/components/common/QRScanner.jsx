import React, { useEffect, useState, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { X, Camera, AlertTriangle, ScanLine } from 'lucide-react';
import { motion } from 'framer-motion';

const QRScanner = ({ onScanSuccess, onClose }) => {
    const [error, setError] = useState(null);
    const scannerRef = useRef(null);

    useEffect(() => {
        // 1. Check for Secure Context (HTTPS)
        if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
            setError("Camera requires HTTPS or Localhost. Please check your URL.");
            return;
        }

        const scannerId = "reader";
        let html5QrCode;

        const startScanner = async () => {
            try {
                html5QrCode = new Html5Qrcode(scannerId);
                scannerRef.current = html5QrCode;

                await html5QrCode.start(
                    { facingMode: "environment" }, // Force Back Camera
                    {
                        fps: 10,
                        qrbox: { width: 250, height: 250 },
                        aspectRatio: 1.0
                    },
                    (decodedText) => {
                        // Success
                        onScanSuccess(decodedText);
                        // Stop scanning immediately after success to prevent multiple triggers
                        html5QrCode.stop().catch(err => console.error(err));
                    },
                    (errorMessage) => {
                        // Ignore frame parse errors
                    }
                );
            } catch (err) {
                console.error("Error starting scanner:", err);
                setError("Failed to access camera. Please allow permissions.");
            }
        };

        // Small delay to ensure DOM is registered
        setTimeout(startScanner, 100);

        return () => {
            // Cleanup handled by ref tracking
            if (scannerRef.current && scannerRef.current.isScanning) {
                scannerRef.current.stop().catch(err => console.warn("Stop failed", err));
            }
        };
    }, [onScanSuccess]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-4"
        >
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-[70] backdrop-blur-md border border-white/10"
            >
                <X size={24} />
            </motion.button>

            <div className="w-full max-w-sm relative">
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-400 border border-primary-500/30 text-sm font-bold mb-4"
                    >
                        <Camera size={16} /> Live Scanner
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Scan QR Code</h3>
                    <p className="text-gray-400 text-sm mt-2">Align the code within the frame to mark attendance.</p>
                </div>

                {/* Scanner Frame */}
                <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10">
                    {error ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-900 p-6 text-center">
                            <AlertTriangle size={48} className="text-red-500 mb-4 animate-pulse" />
                            <p className="font-bold text-red-400">{error}</p>
                            <p className="text-xs text-gray-500 mt-2">Check browser permissions or HTTPS.</p>
                        </div>
                    ) : (
                        <>
                            <div id="reader" className="w-full h-full object-cover"></div>

                            {/* Scanning Animation */}
                            <div className="absolute inset-0 pointer-events-none">
                                {/* Corners */}
                                <div className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 border-primary-500 rounded-tl-xl"></div>
                                <div className="absolute top-6 right-6 w-12 h-12 border-t-4 border-r-4 border-primary-500 rounded-tr-xl"></div>
                                <div className="absolute bottom-6 left-6 w-12 h-12 border-b-4 border-l-4 border-primary-500 rounded-bl-xl"></div>
                                <div className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 border-primary-500 rounded-br-xl"></div>

                                {/* Animated Laser Beam */}
                                <motion.div
                                    animate={{ top: ['10%', '90%', '10%'] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent shadow-[0_0_15px_rgba(234,179,8,0.8)] z-10"
                                />
                            </div>
                        </>
                    )}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Powered by Mane Mess Tech</p>
                </div>
            </div>
        </motion.div>
    );
};

export default QRScanner;

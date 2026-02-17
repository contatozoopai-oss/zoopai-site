"use client";

export default function ZoopCore() {
  return (
    <div className="core-container">
      
      <div className="core-aura"></div>

      <div className="core">
        <div className="core-inner"></div>
      </div>

      <div className="ring ring-1"></div>
      <div className="ring ring-2"></div>
      <div className="ring ring-3"></div>

      <div className="core-text">
        ZOOPAI CORE ONLINE
      </div>

      <style jsx>{`
        .core-container {
          position: relative;
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .core {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, #00f0ff, #0066ff, #001133);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse 3s infinite ease-in-out;
          box-shadow:
            0 0 20px #00f0ff,
            0 0 40px #0066ff,
            inset 0 0 20px rgba(255,255,255,0.3);
        }

        .core-inner {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff, #00f0ff);
          animation: spin 6s linear infinite;
        }

        .core-aura {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,240,255,0.25), transparent);
          animation: auraPulse 4s infinite ease-in-out;
        }

        .ring {
          position: absolute;
          border: 1px solid rgba(0,240,255,0.4);
          border-radius: 50%;
        }

        .ring-1 {
          width: 160px;
          height: 160px;
          animation: rotate 12s linear infinite;
        }

        .ring-2 {
          width: 200px;
          height: 200px;
          animation: rotateReverse 18s linear infinite;
        }

        .ring-3 {
          width: 240px;
          height: 240px;
          animation: rotate 24s linear infinite;
        }

        .core-text {
          position: absolute;
          bottom: -45px;
          font-size: 13px;
          letter-spacing: 3px;
          color: #00f0ff;
          opacity: 0.85;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.12);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes auraPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.9;
          }
        }
      `}</style>

    </div>
  );
}

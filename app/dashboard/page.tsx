import ZoopCore from "./ZoopCore";

export default function Dashboard() {
  return (
    <main className="dashboard">

      <ZoopCore />

      <style jsx>{`
        .dashboard {
          min-height: 100vh;
          background: radial-gradient(circle at center, #020412, #000000);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
      `}</style>

    </main>
  );
}

import "./StatsCard.css";

const StatsCard = () => {
  const stats = [
    {
      title: "Active User This Month",
      current: "71,897",
      previous: "70,946",
      change: "12%",
      isPositive: true,
    },
    {
      title: "Mail Verification Calls",
      current: "58",
      previous: "56",
      change: "2.02%",
      isPositive: true,
    },
    {
      title: "Password Recovery Calls",
      current: "24",
      previous: "28",
      change: "4.05%",
      isPositive: false,
    },
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-info">
            <h3 className="stat-title">{stat.title}</h3>
            <p className="stat-value">
              {stat.current}{" "}
              <span className="stat-previous">from {stat.previous}</span>
            </p>
          </div>
          <div
            className={`stat-badge ${
              stat.isPositive ? "positive" : "negative"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="stat-icon"
            >
              {stat.isPositive ? (
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.5a1 1 0 10-2 0v5.793l-2.293-2.292a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 12.293V6.5z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.5a1 1 0 112 0v5.793l2.293-2.292a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.293V6.5z"
                  clipRule="evenodd"
                />
              )}
            </svg>
            {stat.isPositive ? "+" : "-"}{stat.change}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;

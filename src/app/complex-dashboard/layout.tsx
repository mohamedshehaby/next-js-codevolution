import notifications from "./@notifications/page";
import revenue from "./@revenue/page";
import users from "./@users/page";
import login from "./@login/page";
const ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <>{login}</>;
  }

  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1, gap: "20px" }}>
          {notifications}
        </div>
      </div>
    </div>
  );
};

export default ComplexDashboardLayout;

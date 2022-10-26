import React, { useEffect, useState } from "react";
import Container from "../../components/UI/Container";
import UserProfile from "../../components/UserProfile";
import StyleDashboard from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Navigate, Outlet } from "react-router-dom";

const Dashboard = () => {
  const data = useSelector((state: RootState) => state.auth);
  const [orders, setOrders] = useState(true);
  const [details, setDetails] = useState(false);

  useEffect(() => {
    document.title = "Tello | Hesabım";
  }, []);

  if (!data.loggedIn) return <Navigate to="/join/signup" />;

  return (
    <StyleDashboard>
      <Container>
        <UserProfile
          orders={orders}
          details={details}
          setOrders={setOrders}
          setDetails={setDetails}
        />
        <div>
          {orders && <h2 className="selected-header">Sifarişlərim</h2>}
          {details && <h2 className="selected-header">Şəxsi məlumatlar</h2>}
          <Outlet />
        </div>
      </Container>
    </StyleDashboard>
  );
};

export default Dashboard;

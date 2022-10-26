import React, { useEffect, useState } from "react";
import StyleUser from "./style";
import { api } from "../../server";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const User = () => {
  const [data, setData] = useState<{
    name: string;
    email: string;
    coordinates: Number[];
  }>({
    name: "",
    email: "",
    coordinates: [],
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await api.get("/users/me", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setData({
          name: res.data.data.doc.name,
          email: res.data.data.doc.email,
          coordinates: res.data.data.doc.address.coordinates,
        });
      } catch (error) {
        setData({ name: "", email: "", coordinates: [] });
      }
    };

    getUserData();
  }, []);

  return (
    <StyleUser>
      <div className="user">
        <div>
          <span>Ad, Soyad</span>
          <p>{data.name}</p>
        </div>
        <div>
          <span>Email</span>
          <p>{data.email}</p>
        </div>
      </div>
      {data.coordinates[0] && (
        <MapContainer
          center={data.coordinates}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={data.coordinates}></Marker>
        </MapContainer>
      )}
    </StyleUser>
  );
};

export default User;

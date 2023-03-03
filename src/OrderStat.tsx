import React from "react";
import "./Orderstats.scss"
interface OrderStatProps {
  label: string;
  value: number;
  color: string;
}

const OrderStat: React.FC<OrderStatProps> = ({ label, value, color }) => {
  return (
    <div className="order-stats">
      <div className="order-stat__label">{label}</div>
      <div className="order-stat__value" style={{ color: color }}>
        {value}
      </div>
    </div>
  );
};

export default OrderStat;


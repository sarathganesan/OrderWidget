
import React from "react";
import OrderStat from "./OrderStat";
import data from "./data.json";
import "./Orderstats.scss";

interface OrderStatData {
  label: string;
  value: number;
  color: string;
  icon: string;
  icons:string;
  colors:string;

}

const OrderStatCard: React.FC<OrderStatData> = ({ label, value, color, icon,icons,colors }) => {
  const iconStyle = {
    color: color
  };
  const iconStyles = {
    color: colors
  };

  const percentageValue = `${((value / 1000) * 100).toFixed(1)}%`; // Calculate percentage value

  return (
    <div className="order-stat-card"> 
     <div className="order-stat-card__percentage" style={{ width: '8px'}}>
     <i className={icons} style={iconStyles}/>
        {percentageValue}
      </div>
    <div className="order-stat-card__label">
     {label} 
  </div>
      <div className="order-stat-card__value">
        <i className={icon} style={iconStyle} /> {value}
      </div>
      
    </div>
  );
};


const WidgetOrderStats: React.FC = () => {
  const orderStats: OrderStatData[] = data.orderStats;

  return (
    <div className="widget-order-stats">
      {orderStats.map((orderStat, index) => (
        <div key={index} className="order-stat-card-container">
          <OrderStatCard {...orderStat} />
        </div>
      ))}
    </div>
  );
};

export default WidgetOrderStats;

import React from "react";
import "./shop.styles.scss";
import { connect } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
const ShopPage = () => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default connect()(ShopPage);

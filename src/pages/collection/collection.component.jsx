import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) =>
  createStructuredSelector({
    collection: selectCollection(ownProps.match.params.collectionId),
  });
export default connect(mapStateToProps)(CollectionPage);

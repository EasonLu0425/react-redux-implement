import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../Redux";


function ItemContainer(props) {
  return (
    <div>
      <h2>item -{props.item}</h2>
      <button onClick={props.buyItem}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

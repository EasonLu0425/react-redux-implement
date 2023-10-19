import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes -{numOfCakes}</h2>
      <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     numOfCakes: state.numOfCakes,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyCake: () => dispatch(buyCake()),
//   };
// };

export default HooksCakeContainer

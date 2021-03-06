import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollTop = ({ history }) => {
  useEffect(() => {
    return history.listen(() => {
      window.scrollTo(0, 0);
    });
  });

  return null;
};

export default withRouter(ScrollTop);

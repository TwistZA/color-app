import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
  },

  secondary: {
    backgroundColor: "pink",
    "& h1": {
      color: "white",
    },
  },
};

function MiniPalette(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <h1>Bum Mini Palette</h1>
      <section className={classes.secondary}>
        <h1>MY BUM sECTION</h1>
      </section>
    </div>
  );
}

// MiniPalette.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(MiniPalette);

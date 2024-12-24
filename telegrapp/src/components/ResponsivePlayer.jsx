import React from "react";
import ReactPlayer from "react-player";

const ResponsivePlayer = ({ url }) => {
  return (
    <div style={styles.playerWrapper}>
      <ReactPlayer
        className="react-player"
        playing={false}
        controls
        url={url}
        width="100%"
        height="100%"
      />
    </div>
  );
};

const styles = {
    playerWrapper: {
      display: "flex", // Use Flexbox to prevent extra whitespace
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%", // Make it occupy the parent container fully
      maxWidth: "100%", // Ensure it scales within the container
    },
};

export default ResponsivePlayer;

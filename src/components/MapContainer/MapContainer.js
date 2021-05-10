import React from "react";
import Container from "@material-ui/core/Container";
import GoogleMapWrapper from "../GoogleMapWrapper/GoogleMapWrapper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

function MapContainer() {
  return (
    <CssBaseline>
      <Container minwidth="xl">
        <Typography
          component={GoogleMapWrapper}
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
    </CssBaseline>
  );
}
export default MapContainer;

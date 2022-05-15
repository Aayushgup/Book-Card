import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material/";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import aa from "./2.png";

const BookCard = () => {
  return (
    // <Box width="284px" height="300px" sx={{ boxShadow: 3, textAlign: "left",}}  >
    <Card
      sx={{
        borderBottom: 18,
        borderColor: "#DFE8F6",
        width: 290,
        textAlign: "left",
        float: "left",
        position:"absolute",
        top:"20px",
        left:"200px"
      }}
    >
      <CardMedia
        component="img"
        height="292px"
        width="290px"
        //image={require("./2.png")} // it is used when you are not importing image as file.
        image={aa}
        alt="book-image"
      />

      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Beyond Entrepreneurship
        </Typography>
        <br></br>
        <Typography variant="body1" color="#6D787E">
          Jim Collins & Bill Lazier
        </Typography>
        <br></br>
        <Typography variant="body2" color="#6D787E">
          <AccessTimeIcon style={{ height: 18, width: 17 }} />
          13-minute read
        </Typography>
        <MoreHorizIcon style={{ height: 45, width: 40, float: "right" }} />
      </CardContent>
    </Card>
    // </Box>
  );
};

export default BookCard;

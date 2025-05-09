import FeaturedNewsCard from "./FeaturedNewsCard";
import newspic from "/blonde-woman-straw-hat-standing-near-wall-with-barefoot.jpg";
import { Box, Container, Stack, Typography, Divider } from "@mui/material";
function FeaturedNews() {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "60px 40px",
        maxWidth: "1400px",
        justifySelf: "center",
      }}
    >
      <Box
        component="img"
        src={newspic}
        alt=""
        sx={{ width: "426px", height: "590px", my: 3 }}
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          m: 0,
        }}
      >
        <Container sx={{ height: "264px", width: "664px", mx: "auto", my: 4 }}>
          <Typography variant="h1" sx={{ fontSize: "44px", fontWeight: 500 }}>
            The Rise of Fashion Blogging: The Role of Influencers in the
            Industry
          </Typography>
          <Typography variant="subtitle1" sx={{ my: "20px" }}>
            CERIDWEN / WRITER - FASHION - SEP 2, 2023
          </Typography>
          <Typography variant="body1" sx={{}}>
            Style is the only thing you can't buy. It's not in a shopping bag, a
            label, or a price tag. It's something reflected from our soul to the
            outside world, an{" "}
          </Typography>
        </Container>
        <Divider />
        <Box sx={{ my: 3, display: "flex", justifyContent: "center" }}>
          <FeaturedNewsCard />
        </Box>
      </Container>
    </Stack>
  );
}

export default FeaturedNews;

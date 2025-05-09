import {
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { HomeCards } from "../../../utils/constants";

function FeaturedNewsCard() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {HomeCards.map((homeCard, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 250,
                height: "85%",
                backgroundColor: "transparent",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ backgroundColor: "#FFBD3A30", width: "80.5" }}
                  >
                    {homeCard.category}
                  </Typography>
                  <Typography variant="caption">{homeCard.date}</Typography>
                </Box>
                <Typography variant="h6">{homeCard.title}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    lineHeight: "1.5rem",
                    maxHeight: "3rem", // 1.5rem * 2 lines
                  }}
                >
                  {homeCard.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default FeaturedNewsCard;

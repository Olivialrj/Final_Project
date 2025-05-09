import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { topicCards } from "../../../utils/constants";

function ExploreTopics() {
  return (
    <Box display="flex" flexDirection="row" gap={2}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 500 }}>
        Explore Topics
      </Typography>
      {topicCards.map((topicCard, index) => (
        <Card key={index} sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image={topicCard.image}
            alt={topicCard.title}
          />
          <CardContent>
            <Typography variant="h6">{topicCard.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {topicCard.description}
            </Typography>
            <Button sx={{ mt: 1 }}>Buy Now</Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default ExploreTopics;

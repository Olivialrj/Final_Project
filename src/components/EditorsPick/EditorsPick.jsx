import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useRef } from "react";
import { editorPicks } from "../../../utils/constants";

function EditorsPickCarousel() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 260 * 3; // assuming each card is ~260px wide incl. margin

    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "1400px",
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
        mb: 10,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 500 }}>
        Editor's Pick
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={() => scroll("left")}>
          <ChevronLeft />
        </IconButton>

        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "hidden",
            gap: 2,
            width: "100%",
          }}
        >
          {editorPicks.map((editorPick, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 250,
                maxWidth: 353,
                // height: "426px",
                flexShrink: 0,
                height: "100%",
                backgroundColor: "transparent",
                boxShadow: "none",
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
                    sx={{
                      backgroundColor: "#FFBD3A30",
                      padding: "2px 6px",
                      borderRadius: 1,
                    }}
                  >
                    {editorPick.category}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "gray" }}>
                    {editorPick.date}
                  </Typography>
                </Box>
                <CardMedia
                  component="img"
                  height="225"
                  image={editorPick.image}
                  alt={editorPick.title}
                />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {editorPick.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    lineHeight: "1.5rem",
                    maxHeight: "3rem",
                    mb: 2,
                  }}
                >
                  {editorPick.description}
                </Typography>

                <Button size="small">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        <IconButton onClick={() => scroll("right")}>
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
}

export default EditorsPickCarousel;

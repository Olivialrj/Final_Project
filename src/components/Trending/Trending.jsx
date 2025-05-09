import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import livingRoomPic from "/3d-rendering-white-wood-living-room-near-bedroom-upstair.jpg";
import { editorPicks } from "../../../utils/constants";

function Trending() {
  return (
    <Box
      sx={{
        maxWidth: "1400px",
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mx: "auto",
      }}
    >
      {/* Left Side: Main Trending Card */}
      <Box sx={{ width: "50%" }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 500 }}>
          Trending
        </Typography>
        <Card
          sx={{
            minHeight: 660,
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="div"
            image={livingRoomPic}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          />
          <CardContent
            sx={{
              position: "relative",
              zIndex: 1,
              color: "#fff",
              height: "100%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ backgroundColor: "#FFBD3A30", px: 1 }}
              >
                Business
              </Typography>
              <Typography variant="caption">SEP 5, 2023</Typography>
            </Box>
            <Typography variant="h6" gutterBottom>
              The Benefits of Professional Development Programs
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
              <Avatar />
              <Box>
                <Typography variant="body2">Melvile</Typography>
                <Typography variant="caption" color="text.secondary">
                  Writer
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Right Side: Editor Picks Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "60%",
        }}
      >
        {editorPicks.map((editorPick, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "transparent",
              borderTop: "1px solid black",
              width: "calc(50% - 8px)",
              boxSizing: "border-box",
              boxShadow: "none",
              px: 1,
              // mx: "5px",
            }}
          >
            <CardContent sx={{ p: 0, paperShadow: "none" }}>
              <Typography
                variant="caption"
                sx={{ textAlign: "end", display: "block", p: 1 }}
              >
                {editorPick.date}
              </Typography>
              <Typography
                variant="h5"
                sx={{ my: 2, fontSize: 20, fontWeight: 500, px: 1 }}
              >
                {editorPick.title}
              </Typography>
              <CardMedia
                component="img"
                height="200"
                image={editorPick.image}
                alt={editorPick.title}
              />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Trending;

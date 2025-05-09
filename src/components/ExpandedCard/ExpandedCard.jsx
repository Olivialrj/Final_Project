import { useState } from "react";
import { motion } from "framer-motion";
import "./ExpandedCard.css";

function ExpandableCard({ title, children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setExpanded(!expanded)}
      className="card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "10px",
        cursor: "pointer",
        background: "white",
      }}
    >
      <div className="card-collasped">
        <h3>{title}</h3>
        <span className="card-icon">{expanded ? "▲" : "▼"}</span>
      </div>
      {expanded && <div className="card-content">{children}</div>}
    </motion.div>
  );
}

export default ExpandableCard;

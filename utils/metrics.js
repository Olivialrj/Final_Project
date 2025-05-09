// metrics.js

// Increment API call count
export function logApiCall() {
  const calls = Number(localStorage.getItem("apiCalls") || "0");
  localStorage.setItem("apiCalls", calls + 1);

  // Track API calls per date
  const trends = JSON.parse(localStorage.getItem("trends") || "[]");
  const today = new Date().toISOString().split("T")[0];

  const updatedTrends = [...trends];
  const todayEntry = updatedTrends.find((t) => t.date === today);

  if (todayEntry) {
    todayEntry.calls += 1;
  } else {
    updatedTrends.push({ date: today, calls: 1 });
  }

  localStorage.setItem("trends", JSON.stringify(updatedTrends));
}

// Increment topic popularity
export function logTopicSearch(topic) {
  const topics = JSON.parse(localStorage.getItem("topics") || "{}");
  topics[topic] = (topics[topic] || 0) + 1;
  localStorage.setItem("topics", JSON.stringify(topics));
}

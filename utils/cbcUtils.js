export function calculateCBCPerformance(score) {
  if (score >= 80) return "Exceeding Expectations";
  if (score >= 60) return "Meeting Expectations";
  if (score >= 40) return "Approaching Expectations";
  return "Below Expectations";
}

export const displayTimeFormat = (data) => {
  let dateData = data ? data : new Date();
  const displayTime = new Date(dateData).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return displayTime;
};

export const displayDateFormat = (data) => {
  let dateData = data ? data : new Date();
  const displayDate = new Date(dateData).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return displayDate;
};

export const applyTheme = (theme) => {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
  localStorage.setItem("theme", theme);
};

export const getStoredTheme = () => {
  return localStorage.getItem("theme") || "light";
};

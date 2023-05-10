export const download = (src?: string) => {
  if (src) {
    const a = document.createElement("a");
    a.href = src;
    a.download = "some.mp3";
    a.click();
  }
};

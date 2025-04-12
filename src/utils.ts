export const getEntityIdFromUrl = (url: string) => {
  return new URL(url).pathname.split("/").filter(Boolean).pop();
};

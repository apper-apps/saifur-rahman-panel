import mediaData from "@/services/mockData/media.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getMediaItems = async () => {
  await delay(300);
  return [...mediaData];
};

export const getMediaItemById = async (id) => {
  await delay(200);
  const item = mediaData.find(m => m.Id === parseInt(id));
  if (!item) {
    throw new Error("Media item not found");
  }
  return { ...item };
};

export const createMediaItem = async (itemData) => {
  await delay(400);
  const newId = Math.max(...mediaData.map(m => m.Id)) + 1;
  const newItem = { ...itemData, Id: newId };
  mediaData.push(newItem);
  return { ...newItem };
};

export const updateMediaItem = async (id, itemData) => {
  await delay(300);
  const index = mediaData.findIndex(m => m.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Media item not found");
  }
  mediaData[index] = { ...mediaData[index], ...itemData };
  return { ...mediaData[index] };
};

export const deleteMediaItem = async (id) => {
  await delay(300);
  const index = mediaData.findIndex(m => m.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Media item not found");
  }
  mediaData.splice(index, 1);
  return { success: true };
};
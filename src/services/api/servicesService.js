import servicesData from "@/services/mockData/services.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getServices = async () => {
  await delay(300);
  return [...servicesData];
};

export const getServiceById = async (id) => {
  await delay(200);
  const service = servicesData.find(s => s.Id === parseInt(id));
  if (!service) {
    throw new Error("Service not found");
  }
  return { ...service };
};

export const createService = async (serviceData) => {
  await delay(400);
  const newId = Math.max(...servicesData.map(s => s.Id)) + 1;
  const newService = { ...serviceData, Id: newId };
  servicesData.push(newService);
  return { ...newService };
};

export const updateService = async (id, serviceData) => {
  await delay(300);
  const index = servicesData.findIndex(s => s.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Service not found");
  }
  servicesData[index] = { ...servicesData[index], ...serviceData };
  return { ...servicesData[index] };
};

export const deleteService = async (id) => {
  await delay(300);
  const index = servicesData.findIndex(s => s.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Service not found");
  }
  servicesData.splice(index, 1);
  return { success: true };
};
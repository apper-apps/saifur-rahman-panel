import testimonialsData from "@/services/mockData/testimonials.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getTestimonials = async () => {
  await delay(300);
  return [...testimonialsData];
};

export const getTestimonialById = async (id) => {
  await delay(200);
  const testimonial = testimonialsData.find(t => t.Id === parseInt(id));
  if (!testimonial) {
    throw new Error("Testimonial not found");
  }
  return { ...testimonial };
};

export const createTestimonial = async (testimonialData) => {
  await delay(400);
  const newId = Math.max(...testimonialsData.map(t => t.Id)) + 1;
  const newTestimonial = { ...testimonialData, Id: newId };
  testimonialsData.push(newTestimonial);
  return { ...newTestimonial };
};

export const updateTestimonial = async (id, testimonialData) => {
  await delay(300);
  const index = testimonialsData.findIndex(t => t.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Testimonial not found");
  }
  testimonialsData[index] = { ...testimonialsData[index], ...testimonialData };
  return { ...testimonialsData[index] };
};

export const deleteTestimonial = async (id) => {
  await delay(300);
  const index = testimonialsData.findIndex(t => t.Id === parseInt(id));
  if (index === -1) {
    throw new Error("Testimonial not found");
  }
  testimonialsData.splice(index, 1);
  return { success: true };
};
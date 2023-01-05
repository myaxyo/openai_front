import $host from ".";

export const generateImage = async (prompt, size) => {
  const { data } = await $host.post("openai/generateimage", {
    prompt,
    size,
  });
  return data;
};

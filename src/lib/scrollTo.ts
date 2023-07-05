export const scrollTo = (id: string) => {
  const target = document.getElementById(id);
  target?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
};

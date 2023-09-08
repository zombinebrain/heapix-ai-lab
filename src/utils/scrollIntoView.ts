//function scrolling into view counting fixed header

export const scrollIntoView = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;

  const pos = target.style.position;
  const top = target.style.top;
  target.style.position = 'relative';
  target.style.top = '-55px';
  target.scrollIntoView({behavior: 'smooth'});
  target.style.top = top;
  target.style.position = pos;
};

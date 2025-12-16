export const clsx = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const cn = (...classes) => clsx(...classes);

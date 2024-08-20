export const redirect = (url, target = '_top') => {
    window.open(url, target)
}

export const scrollTo = id => {
    const element = document.querySelector(id);

    window.scrollTo({
        top: element.offsetTop - 200,
        behavior: 'smooth'
      });
}
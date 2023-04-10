import { ref } from "vue";

export function useModal() {
  const active = ref(false);

  const setModalState = (newState) => {
    active.value = newState;
    active.value ? fixBody() : releaseBody();
  };

  return { active, setModalState };
}

export const fixBody = () => {
    document.body.style.paddingRight = `${scrollbarWidth()}px`;
    document.body.style.overflow = 'hidden';
}

export const releaseBody = () => {
    document.body.style.paddingRight = '0px';
    document.body.style.removeProperty('overflow');
}

export const scrollbarWidth = () => {
    document.body.style.overflow = 'hidden';
    var width = document.body.clientWidth;

    document.body.style.overflow = 'scroll';
    width -= document.body.clientWidth;
    if (!width) width = document.body.offsetWidth - document.body.clientWidth;
    document.body.style.overflow = '';

    return width;
}
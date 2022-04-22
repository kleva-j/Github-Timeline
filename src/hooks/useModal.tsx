import { useState } from 'react';

export function UseModal() {
  const [isVisible, setVisible] = useState<Boolean>(false);
  function toggle(visibility = !isVisible) {
    setVisible(visibility);
  }
  return { toggle, isVisible };
}

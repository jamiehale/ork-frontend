import { useRef, useEffect } from 'react';

const useAutoFocus = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
    ref.current.select();
  }, []);
  return ref;
};

export default useAutoFocus;

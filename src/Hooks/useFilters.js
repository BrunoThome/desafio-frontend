import { useSelector } from 'react-redux';

export function createQueryString() {
  const state = useSelector((state) => state.filters);
}

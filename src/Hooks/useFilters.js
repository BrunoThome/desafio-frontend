import { useSelector } from 'react-redux';

export function useQueryString() {
  const state = useSelector((state) => state.filters);
}

// import { useRef, useEffect } from 'react';

// export const useIsMounted = () => {
//   const isMounted = useRef(false);
//   useEffect(() => {
//     isMounted.current = true;
//     return () => (isMounted.current = false);
//   }, []);
//   return isMounted;

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from './state/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

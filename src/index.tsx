import { useEffect, useCallback, useRef } from "react";

export const useMyHook = (
	callback: (entries: IntersectionObserverEntry[], observer?: IntersectionObserver) => void,
	options: IntersectionObserverInit
) => {
	const observerRef = useRef<IntersectionObserver>();

	const observe = useCallback(
		(node: HTMLElement) => {
			if (!observerRef.current) {
				observerRef.current = new IntersectionObserver(callback, options);
			}
			observerRef.current.observe(node);
		},
		[callback, options, observerRef]
	);

	useEffect(() => {
    return () => {
      observerRef.current?.disconnect()
    }
  }, []);

	return { observer: observerRef.current, observe };
};

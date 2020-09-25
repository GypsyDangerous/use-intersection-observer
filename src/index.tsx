import { useEffect, useCallback, useRef } from "react";
import "./setupTests.js"

export const useIntersectionObserver = (
	callback: (entries: IntersectionObserverEntry[], observer?: IntersectionObserver) => void,
	options?: IntersectionObserverInit
) => {
	const observerRef = useRef<IntersectionObserver>();

	const observe = useCallback(
		(node: HTMLElement | null) => {
			if (!observerRef.current) {
				observerRef.current = new IntersectionObserver(callback, options);
			}
			if (node) {
				observerRef.current.observe(node);
			}
		},
		[callback, options, observerRef]
	);

	useEffect(() => {
        if (!observerRef.current) {
			observerRef.current = new IntersectionObserver(callback, options);
		}
		return () => {
			observerRef.current?.disconnect();
		};
	}, [observerRef]);

	return { observerRef, observe };
};

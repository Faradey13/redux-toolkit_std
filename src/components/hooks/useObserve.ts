import {MutableRefObject, useEffect, useRef} from "react";




export const useObserve = (canLoad: boolean,lastElement: React.MutableRefObject<any>, callback: () => void, isLoading: boolean) => {
    const observer = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()

        const cb = function (entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
            if (entries[0].isIntersecting && canLoad) {
                callback()


            }

        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(lastElement.current)


    }, [isLoading])}
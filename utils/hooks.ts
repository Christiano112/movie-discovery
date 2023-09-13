import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useDebounce = (value: string): string => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, 700);

        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
};

export const usePathId = () => {
    const pathname = usePathname();
    const lastPath = pathname.split("/");
    const pathId = lastPath[lastPath.length - 1];
    return pathId;
};
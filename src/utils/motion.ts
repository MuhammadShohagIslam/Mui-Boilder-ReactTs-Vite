export const slideIn = (
    direction: string,
    type: string,
    delay: number,
    duration: number
) => {
    return {
        hidden: {
            x:
                direction === "right"
                    ? "-150%"
                    : direction === "left"
                    ? "150%"
                    : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

export const zoomIn = (delay: number, duration: number) => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

export const staggerContainer = (staggerChildren: any, delayChildren: any) => {
    return {
        hidden: {},
        show: {
            x: 0,
            y: 0,
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};

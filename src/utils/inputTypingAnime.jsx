import React, { useState, useEffect } from "react";

const InputTypingAnime = ({ placeholder: passedPlaceholder = "", ...passedProps }) => {
    const [placeholder, setPlaceholder] = useState(passedPlaceholder.slice(0, 0));
    const [placeholderIndex, setPlaceholderIndex] = useState(0);

    useEffect(() => {
        const intr = setInterval(() => {
            setPlaceholder(passedPlaceholder.slice(0, placeholderIndex));
            if (placeholderIndex + 1 > passedPlaceholder.length) {
                setPlaceholderIndex(0);
            } else {
                setPlaceholderIndex(placeholderIndex + 1);
            }
        }, 700);
        return () => {
            clearInterval(intr);
        };
    });

    return <input {...passedProps} placeholder={placeholder} />;
};

export default InputTypingAnime;

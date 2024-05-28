"use client";

import {memo} from 'react';
import useMediaQuery from "@/lib/hooks/use-media-query";

const YandexMap = memo(() => {
    const { isMobile } = useMediaQuery();

    return (
        <iframe
            className={"rounded-[24px]"}
            src="https://yandex.com/map-widget/v1/?um=constructor%3A6c5659656b2254b7aeda014c82162b0b6b0954193ecf547f7588c070ee0e3eee&amp;source=constructor"
            width={isMobile ? "300" : "900"} height={isMobile ? "400" : "600"} frameBorder="0"></iframe>
    );
});
YandexMap.displayName = "YandexMap";

export default YandexMap;
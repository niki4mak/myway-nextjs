"use client";

import {memo} from 'react';
import useMediaQuery from "@/lib/hooks/use-media-query";

const YandexMap = memo(() => {
    const { isMobile } = useMediaQuery();

    return (
        <iframe
            className={"rounded-[24px] pb-14"}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae9019c52e6e02ecac456788851d10892e546dcc6e443e8ab809cdba6d059dc08&amp;source=constructor"
            width={isMobile ? "300" : "900"} height={isMobile ? "400" : "600"} frameBorder="0"></iframe>
    );
});
YandexMap.displayName = "YandexMap";

export default YandexMap;
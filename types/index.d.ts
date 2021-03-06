interface queryData {
    [propName: string]: any
}

declare interface McTools {
    version: string,
    ua: string,
    getType: (o: any) => string,
    cleanSpaceModel: (o: any) => any,
    isInt: (n: any) => boolean,
    isIe89: () => boolean,
    isPlainObject: (o: any) => boolean,
    isArray: (o: any) => boolean,
    isUndefined: (o: any) => boolean,
    isNumber: (o: any) => boolean,
    isDiff: (o: any, o: any) => boolean,
    isFn: (o: any) => boolean,
    isObj: (o: any) => boolean,
    isStr: (o: any) => boolean,
    isPhone: (o: any) => boolean,
    isEmail: (o: any) => boolean,
    isUrl: (o: any) => boolean,
    isIOS: () => boolean,
    isAndroid: () => boolean,
    isMobile: () => boolean,
    isWeibo: () => boolean,
    isWeChat: () => boolean,
    isQQ: () => boolean,
    isQzone: () => boolean,
    isChinese: (o: any) => boolean,
    isEnglish: (o: any) => boolean,
    isPassport: (o: any) => boolean,
    isIdCard: (o: any) => boolean,
    strRepeat: (str: string, n?: number) => string,
    encodePhone: (n: number | string) => string,
    clone: (o: object) => object,
    formatNum: (n: number | string) => string,
    formatDate: (date: any, format: string) => any,
    getObjectURL: (o: any) => string,
    getFileExt: (o: any) => string,
    assign: (target: object, ...sources: any[]) => string,
    extend: (target: object, sources: any, deep?: boolean) => object,
    CanvasResize: (options: any) => void,
    getSearch: (id: string) => string,
    watchScroll: (config: any) => void,
    memoize: (fn: any, resolver: any) => any,
    thousandBitSegmentation: (n: number | string) => string,
    urlSplicing: (url: string, data: queryData) => string
}

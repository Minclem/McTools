# McTools
Common tool code set

```javascript

## Support method

- 数据/环境检测

getType                 获取数据类型
isIe89                  是否为ie8/9
isInt                   是否为整数(字符串数值亦可)
isPlainObject           是否一般对象
isArray                 是否数组
isUndefined             是否定义
isNumber                是否数字
isDiff                  判断两个值是否不同
isFn                    是否为函数
isObj                   是否为对象（Array|Object）
isStr                   是否为字符串
isPhone                 是否为手机
isEmail                 是否为邮箱
isUrl                   是否为链接
isIOS                   判断是否为IOS
isAndroid               判断是否为Android
isChinese               是否中文
isEnglish               是否英文
isPassport              是否为护照
isIdCard                是否为身份证

- 数据处理

strRepeat(str, n)       重复数据
encodePhone             手机号加密
clone                   克隆
formatNum               数值格式化
formatDate(date,format) 日期格式化
getObjectURL(file)      获取文件路径
getFileExt(file)        获取文件拓展名
assign                  归并对象
extend                  扩展对象
CanvasResize(options)   图片压缩
	options = {
        url,            图片路径
        rate,           缩放比例(可选， 默认值 0.5)
        width,          指定缩放宽度(可选，默认为空)
        height,         指定缩放高度(可选，默认为空)
        type,           设置图片类型(默认png)
        success         压缩完成后的回调返回压缩后的图片(base64)
    }

```


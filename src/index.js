/**
 * 获取数据类型
 *
 * @param  { Mixed }   obj
 * @return { String }  dataType
 */


function getType (obj) {
    let dataType = Object.prototype.toString.call(obj)

    return dataType.substring(8, dataType.length - 1)
}

/**
 * 清理模块的空间
 *
 * @param  { Mixed }
 * @return { Mixed }    
 */

function cleanSpaceModel (obj) {
    let _type = getType(obj)

    if (_type === 'String') {
        return obj.replace(/\n|\r|\s/g, '')
    }

    if (_type === 'Object') {
        for (var key in obj) {
            obj[key] = cleanSpaceModel(obj[key])
        }
        return obj
    }

    if (_type === 'Array') {
        for (var i = obj.length - 1; i >= 0; i--) {
            obj[i] = cleanSpaceModel(obj[i])
        }

        return obj
    }

    if (_type === 'Null' || _type === 'Undefined') {
        return ''
    }

    return obj
}

/**
 * 是否为ie8/9
 * @returns {boolean}
 */

function isIe89 () {
    return /MSIE (8|9)\.0/.test(navigator.userAgent)
}

/**
 * 是否为整数(字符串数值亦可)
 * @param n
 * @returns {boolean}
 */

function isInt (n) {
    return /^[0-9]+$/.test(n)
}

/**
 * 是否一般对象
 *
 * @param  { Mixed }   obj
 * @return { Boolean } bool
 */

function isPlainObject (obj) {
    return isObj(obj) && !(obj !== null && obj === obj.window) && Object.getPrototypeOf(obj) === Object.prototype
}

/**
 * 是否数组
 *
 * @param  { Mixed }   obj
 * @return { Boolean } bool
 */

function isArray (obj) {
    return Array.isArray ? Array.isArray(obj) : getType(obj) === 'Array'
}

/**
 * 是否定义
 *
 * @param  { Mixed }   o
 * @return { Boolean } bool
 */

function isUndefined (o) {
    return o === void 0
}

/**
 * 是否数字
 *
 * @param  { Number, String }   n
 * @return { Boolean } bool
 */

function isNumber (n) {
    return parseInt(n) === parseInt(n) && -n === -n
}

/**
 * 判断两个值是否不同
 *
 * @param  { Mixed }    a
 * @param  { Mixed }    b
 * @return { Boolean }  bool
 */

function isDiff (a, b) {
    return typeof a === typeof b ? JSON.stringify(a) !== JSON.stringify(b) : false
}

/**
 * 是否为函数
 *
 * @param  { Mixed }    fn
 * @return { Boolean }  bool
 */

function isFn (fn) {
    return typeof fn === 'function'
}

/**
 * 是否为对象（数组，对象）
 *
 * @param  { Mixed }    obj
 * @return { Boolean }  bool
 */

function isObj (obj) {
    return obj && typeof obj === 'object' ? true : false
}

/**
 * 是否为字符串
 *
 * @param  { String }    str
 * @return { Boolean }  bool
 */

function isStr (str) {
    return typeof str === 'string'
}

/**
 * 是否为邮箱
 *
 * @param  { Mixed }    str
 * @return { Boolean }  bool
 */
function isEmail (str) {
    return /^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}[0-9a-z]\.){1,3}[a-z]{2,4}$/.test(str)
}

/**
 * 是否为链接
 * @param str
 * @returns {boolean}
 */

function isUrl (str) {
    return /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?$/.test(str)
}

/**
 * 是否为手机(只进行以1开头的11位数验证， 防止出现问题，如发行新的手机段)
 * @param str
 * @returns {boolean}
 */

function isPhone (str) {
    return /^1\d{10}$/.test(str)
}

/**
 * 判断是否为 iOS
 *
 * @returns { Boolean } boolean 
 */

function isIOS () {
    return (/iPhone|iPad|iPod/).test(navigator.userAgent)
}

/**
 * 判断是否为 Android
 *
 * @returns { Boolean }  boolean 
 */

function isAndroid () {
    return (/Android/).test(navigator.userAgent)
}

/**
 * 是否中文名称
 * @param str
 * @returns {boolean}
 */

function isChinese (str) {
    return /^[\u4e00-\u9fa5·]+$/.test(str)
}

/**
 * 是否英文名称
 * @param str
 * @returns {boolean}
 */

function isEnglish (str) {
    return /^[a-zA-Z\\s]+/.test(str)
}

/**
 * 是否为护照
 * @param str
 * @returns {boolean}
 */

function isPassport (str) {
    return /^[a-zA-Z0-9]{5,17}$/.test(str)
}

/**
 * 是否为身份证
 * @param str
 * @returns {boolean}
 */

function isIdCard (str) {
    return /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i.test(str)
}

/**
 * 内容重复
 *
 * @returns { String }  str 
 */

function strRepeat (str, n) {
    if (!str) return ''
    if (!isNumber(n) || n <= 1) return str
    
    let _str = ''
    for (var i = n - 1; i >= 0; i--) _str += str
    
    return _str
}

/**
 * 手机号加密
 *
 * @returns { String }  phone 
 */

function encodePhone (phone) {
    if (!phone || isNumber(phone)) {
        return phone.toString().replace(/^(\d{3})(\d{4})(\d{4})/, function ($1, $2, $3, $4) {
            return [$2, strRepeat('*', $3.length), $4].join('')
        })
    } else {
        return phone || ''
    }
}

/**
 * 克隆
 *
 * @param  { Mixed }   obj
 * @return { Mixed }   obj
 */

function clone (obj) {
    if (isObj(obj)) {
        return JSON.parse(JSON.stringify(obj))
    } else {
        return isFn(obj) ? new obj : obj
    }
}

/**
 * 数值格式化
 *
 * @param   { Number } n
 * @returns { String, Number }
 */

function formatNum (n) {
    return n >= 10 ? n : '0' + n
}

/**
 * 日期格式化
 *
 * @param   { Number, Date Object } date 时间对象 或者 时间戳
 * @param   { String } format 返回的格式
 *      time: 时间
 *      date：日期, 默认全部显示
 *      line: 时间线
 *      part: 间隔线
 * @returns { String }  返回格式后的时间字符串
 */

function formatDate (date, format) {
    // 服务端返回的时间戳可能以秒的形式
    if (date == null) return

    // 格式化可能存在的格式
    // [2018/06/19 15:40] [2018-06-19 15:40] [2018年06月19日 15:40]
    if (isNaN(date) && date.length >= 8) {
        let dataArr = date.replace(/年|月|\//g, '-').replace(/日/g, '').split(/-|\s|:/g)
        if (dataArr.length >= 3) {
            date = new Date(dataArr[0], dataArr[1] - 1 || 0, dataArr[2] || 1, dataArr[3] || null, dataArr[4] || null, dataArr[5] || null).getTime()
        }
    }
    date = parseInt(date.toString().length < 11 ? date * 1000 : date)

    date = new Date(date)

    let y = date.getFullYear()
    let M = date.getMonth() + 1
    let d = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    M = formatNum(M)
    d = formatNum(d)
    h = formatNum(h)
    m = formatNum(m)
    s = formatNum(s)

    if (format === 'time') {
        return h + ':' + m + ':' + s
    } else if (format === 'date') {
        return y + '-' + M + '-' + d
    } else if (format === 'line' || format === 'part') {
        let time = Math.floor((new Date() - date) / 1000)

        if (time < 60) {
            return '刚刚'
        }

        if (time < 3600) {
            return Math.floor(time / 60) + '分钟前'
        }

        if (time < 86400) {
            return Math.floor(time / 3600) + '小时前'
        }
        
        if (format === 'line') {
            if (time < 31536000) {
                return M + '月' + d + '日'
            }

            return y + '年' + M + '月' + d + '日'
        }
            
        if (format === 'part') {
            if (time < 2592000) {
                return Math.floor(time / 86400) + '天前'
            }

            if (time < 31536000) {
                return Math.floor(time / 2592000) + '个月前'
            }

            return Math.floor(time / 31536000) + '年前'
        }
    } else {
        return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s
    }
}

/**
 * 获取文件路径
 * @param file
 * @returns {*}
 */

function getObjectURL (file) {
    var url = null

    if (window.URL) {
        url = window.URL.createObjectURL(file)
    } else if (window.webkitURL) {
        url = window.webkitURL.createObjectURL(file)
    } else {
        file.select()
        file.blur()
        url = document.selection.createRange().text
    }

    return url
}

/**
 * 获取文件拓展名
 * @param obj
 * @returns {string}
 */

function getFileExt (obj) {
    return obj.value.substr(obj.value.lastIndexOf('.')).toLowerCase()
}

/**
 * 归并对象
 * @param { Object }  target     目标对象
 * @param { Object }  ...arg     源对象
 * @returns {Object}
 */

function assign(target) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
  
    var to = Object(target);
    
    for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        
        if (nextSource != null) {
            for (var nextKey in nextSource) {
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    
    return to;
}

/**
 * 扩展对象
 * @param { Object }  target     目标对象
 * @param { Object }  source     源对象
 * @param { boolean } deep       深拷贝
 * @returns {string}
 */

function extend (target, source, deep) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    target = Object(target);
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {}
            if (isArray(source[key]) && !isArray(target[key])) target[key] = []

            extend(target[key], source[key], deep)
        } else if (source[key] !== undefined) {
            target[key] = source[key]
        }
    }
    return target
}

/**
 * 图片压缩
 * @param { Object }  options    压缩配置
 */

function CanvasResize (options) {
    var opts = {
        url: '',
        rate: .5,
        width: null,
        height: null,
        type: null,
        success: null
    }

    Object.assign(opts, options)

    var img = new Image();
    img.src = opts.url;
    img.crossOrigin = 'anonymous'; // 跨域处理

    img.onload = function () {
        var canvas = document.createElement('canvas'),
            ctx    = canvas.getContext('2d'),
            w = this.width,
            h = this.height,
            rate = opts.rate || 1,
            dataUrl;

        if (opts.width && opts.height) {
            canvas.width = opts.width;
            canvas.height = opts.height;
        } else {
            canvas.width = w * rate;
            canvas.height = h * rate;
        }

        ctx.drawImage(img, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
        dataUrl = canvas.toDataURL(opts.type);
        typeof opts.success === 'function' && opts.success(dataUrl);
    }
}


export default {
    getType,
    cleanSpaceModel,
    isInt,
    isIe89,
    isPlainObject,
    isArray,
    isUndefined,
    isNumber,
    isDiff,
    isFn,
    isObj,
    isStr,
    isPhone,
    isEmail,
    isUrl,
    isIOS,
    isAndroid,
    isChinese,
    isEnglish,
    isPassport,
    isIdCard,
    strRepeat,
    encodePhone,
    clone,
    formatNum,
    formatDate,
    getObjectURL,
    getFileExt,
    assign,
    extend,
    CanvasResize
}

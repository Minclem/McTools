##### getType : 获取数据类型
	@param  { any }
	@return { String }
	
##### cleanSpaceModel : 清理模块的空间
	@param  { any }
    @return { any }
    
##### strRepeat : 字符串循环输出
	@param { string }
	@param { number }
	@returns { string }
	
##### encodePhone : 手机号加密
	@param { number | string }
	@returns { string }
    
##### clone : 克隆
	@param { any }
	@returns { any }
	
##### formatNum : 数值格式化 1 => '01'
	@param { string | number }
	@returns { string }
	
##### formatDate : 日期格式化
	@param { number, Date }
	@param   { String } format 返回的格式
		time: 时间
	    date：日期, 默认全部显示
        line: 时间线
        part: 间隔线
        piece: 时间对象
	@returns { string | object}
	
##### getObjectURL : 获取文件路径
	@param { file }
	@returns { string }
	
##### getFileExt : 获取文件拓展名
	@param { form }
	@returns { string }
	
##### assign : 归并对象
	@param { object }
	@param { ...object }
	@returns { object }
	
##### extend : 扩展对象
	@param { object }
	@param { object }
	@param { boolean } deep
	@returns { object }
	
##### CanvasResize : 图片压缩
	@param { object }
		{
	        url: string,
	        rate?: number,
	        width?: number,
	        height?: number,
	        type?: number,
	        success: () => void
	    }
	@returns { never }
	
##### getSearch : 获取链接参数
	@param { string }
	@returns { string }

##### watchScroll : 页面滚动监听
	@param { object }
		{
			scrollEnd: () => void
			scroll: () => void
		}
	@returns { string }
	
##### memoize : 记忆函数
	@param { function }
	@param { function } resolver
	@returns { function }
	
##### thousandBitSegmentation : 千位分割
	@param { string }
	@returns { string }
	
#### urlSplicing：链接参数拼接
	 @param { string }
     @param { object }
     @returns { string }
    
##### isIe89: 是否为ie8/9
	@returns { boolean }

##### isIOS: 是否为 iOS
	@returns { boolean }

##### isAndroid: 是否为 Android
	@returns { boolean }

##### isInt: 是否为整数
	@param { any } 
	@returns { boolean }

##### isPlainObject: 是否普通对象
	@param { any }
	@returns { boolean }

##### isArray: 是否数组
	@param { any }
	@returns { boolean }

##### isUndefined: 是否未定义
	@param { any }
	@returns { boolean }

##### isNumber: 是否wei
	@param { any }
	@returns { boolean }

##### isDiff: 两个对象是否存在差异
	@param { any }
	@param { any }
	@returns { boolean }

##### isFn: 是否为函数
	@param { any }
	@returns { boolean }

##### isObj: 是否对象类型
	@param { any }
	@returns { boolean }

##### isStr: 是否字符串
	@param { any }
	@returns { boolean }

##### isEmail: 是否邮箱
	@param { string }
	@returns { boolean }

##### isUrl: 是否链接
	@param { string }
	@returns { boolean }

##### isPhone: 是否为手机 (只进行以1开头的11位数验证， 防止出现问题，如发行新的手机段)
	@param { string }
	@returns { boolean }

##### isChinese: 是否中文
	@param { string }
	@returns { boolean }

##### isEnglish: 是否英文
	@param { string }
	@returns { boolean }

##### isPassport: 是否护照
	@param { string }
	@returns { boolean }

##### isIdCard: 是否为身份证
	@param { string }
	@returns { boolean }


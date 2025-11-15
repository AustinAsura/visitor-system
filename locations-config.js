// locations-config.js - 动态地点配置管理器
console.log('开始加载 locations-config.js');

// 使用更简单的对象方式，避免类定义问题
window.locationManager = {
    locations: {
        // 装置保运部
        'bangongloujifang': '办公楼机房',

        // 磷铵运行部
        'linanyiban_dianchiyian': '磷铵一班电池一铵I/O室',
        'linanyiban_a': '磷铵一班A系列',
        'linanyiban_b': '磷铵一班B系列',
        'linanerban_1': '磷铵二班一系列',
        'linanerban_2': '磷铵二班二系列',
        'linansanban': '磷铵二班C系列(30万吨)',
        'linanerban_guanqu': '磷铵二班浓酸罐区I/O室',
        'linansiban_1': '磷铵四班一系列',
        'linansiban_2': '磷铵四班二系列',
        'linansiban_guanqu': '磷铵四班罐区I/O室',
        'gonganban': '供氨班氨站I/O室',

        // 硫酸运行部
        'liusuanyiban_yurefadian12': '硫酸一班余热发电1#2#机组I/O室',
        'liusuanyiban_yurefadian3': '硫酸一班余热发电3#机组I/O室',
        'liusuanyiban_ab': '硫酸一班AB套',
        'liusuanyiban_abfengji': '硫酸一班AB套风机房I/O室',
        'liusuanyiban_c': '硫酸一班C套',
        'laorongliu': '老熔硫',
        'zhiliuban': '制硫班',
        'liusuanyiban_jifang': '硫酸一班机房',
        'liusuanerban_yurefadian': '硫酸二班余热发电I/O室',
        'liusuanerban_yuyafadian': '硫酸二班余压发电',
        'liusuanerban_xunhuanshui': '硫酸二班循环水I/O室',
        'liusuanerban_ab': '硫酸二班AB套IO室',
        'liusuanerban_abfengji': '硫酸二班AB套风机房I/O室',
        'liusuanerban_guanqu': '硫酸二班稀酸罐区I/O室',

        // 磷酸运行部
        'linsuanyiban_nongsuo1': '磷酸一班浓缩一',
        'linsuanyiban_nongsuo2': '磷酸一班浓缩二',
        'fuyan': '氟盐',
        'linsuanyiban_jifang': '磷酸一班机房',
        'linsuanyiban_gh': '磷酸一班浓缩GH套I/O室',
        'linsuanyiban_guolv1': '磷酸一班过滤一',
        'linsuanyiban_guolv2': '磷酸一班过滤二',
        'linsuanyiban_dianhuishou': '磷酸一班碘回收',
        'linsuanerban_guolv12': '磷酸二班过滤一二',
        'linsuanerban_nongsuo1': '磷酸二班浓缩一',
        'linsuanerban_nongsuo2': '磷酸二班浓缩二',

        // 选矿运行部
        'yuanliao_1': '原料一',
        'fuxuan': '浮选',
        'yuanliao_2': '原料二',
        'taociguolv_3': '三期陶瓷过滤',

        // 水处理运行部
        'tuoyanshui': '脱盐水',
        'tuoyanshui_reshuifadian': '脱盐水热水发电I/O室',
        'dcp': 'DCP I/O室',
        'xinwushuizhan': '新污水站',

        // 生产水厂
        'shengchanshuichang': '生产水厂主控室',

        // 硫磷综合楼
        'liusuanerban': '硫酸二班I/O室',
        'linsuanerban': '磷酸二班I/O室',
    },

    // 根据ID获取地点名称（支持大小写不敏感）
    getLocationName: function(id) {
        if (!id) return '未知地点';
        
        // 将输入ID转换为小写进行匹配
        const normalizedId = id.toLowerCase().trim();
        
        // 直接匹配
        if (this.locations[normalizedId]) {
            return this.locations[normalizedId];
        }
        
        // 如果直接匹配失败，尝试模糊匹配（包含关系）
        for (const [locationId, locationName] of Object.entries(this.locations)) {
            if (locationId.toLowerCase().includes(normalizedId) || 
                normalizedId.includes(locationId.toLowerCase())) {
                return locationName;
            }
        }
        
        return '未知地点 (' + id + ')';
    },

    // 获取所有地点
    getAllLocations: function() {
        return this.locations;
    },

    // 检查地点是否存在（支持大小写不敏感）
    locationExists: function(id) {
        const normalizedId = id.toLowerCase().trim();
        return this.locations.hasOwnProperty(normalizedId) || 
               Object.keys(this.locations).some(key => 
                   key.toLowerCase().includes(normalizedId) || 
                   normalizedId.includes(key.toLowerCase())
               );
    },

    // 获取标准化的地点ID（用于存储）
    getNormalizedLocationId: function(id) {
        if (!id) return '';
        
        const normalizedId = id.toLowerCase().trim();
        
        // 直接匹配
        if (this.locations[normalizedId]) {
            return normalizedId;
        }
        
        // 模糊匹配
        for (const locationId of Object.keys(this.locations)) {
            if (locationId.toLowerCase().includes(normalizedId) || 
                normalizedId.includes(locationId.toLowerCase())) {
                return locationId;
            }
        }
        
        return normalizedId; // 返回原始输入的小写版本
    }
};

console.log('locations-config.js 加载完成, locationManager 已定义');
console.log('可用地点数量:', Object.keys(window.locationManager.locations).length);

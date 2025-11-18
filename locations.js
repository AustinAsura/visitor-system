// locations.js - 地点配置
const LOCATIONS = [
    {
        id: 'bangongloujifang',
        name: '办公楼机房',
        description: '办公楼机房',
        contactPerson: '吴应胤',
        contactPhone : '15985364725'
    },
    {
        id: 'linanyiban_dianchiyian',
        name: '电池一铵', 
        description: '电池一铵'
    },
    {
        id: 'linanyiban_a',
        name: '磷铵一班A系列',
        description: '磷铵一班A系列'
    },
    {
        id: 'linanyiban_b',
        name: '磷铵一班B系列',
        description: '磷铵一班B系列'
    },
    {
        id: 'linanerban_1',
        name: '磷铵二班一系列',
        description: '磷铵二班一系列'
    },
    {
        id: 'linanerban_2',
        name: '磷铵二班二系列',
        description: '磷铵二班二系列'
    },
    {
        id: 'linansanban',
        name: '30万吨', 
        description: '30万吨'
    },
    {
        id: 'linanerban_guanqu',
        name: '磷铵二班浓酸罐区',
        description: '磷铵二班浓酸罐区'
    },
    {
        id: 'linansiban_1',
        name: '磷铵四班一系列',
        description: '磷铵四班一系列'
    },
    {
        id: 'linansiban_2',
        name: '磷铵四班二系列',
        description: '磷铵四班二系列'
    },
    {
        id: 'linansiban_guanqu',
        name: '磷铵四班浓酸罐区',
        description: '磷铵四班浓酸罐区'
    },
    {
        id: 'gonganban',
        name: '供氨班氨站', 
        description: '供氨班氨站'
    },
    {
        id: 'liusuanyiban_yurefadian12',
        name: '余热发电1#2#机组',
        description: '余热发电1#2#机组'
    },
    {
        id: 'liusuanyiban_yurefadian3',
        name: '余热发电3#机组',
        description: '余热发电3#机组'
    },
    {
        id: 'liusuanyiban_ab',
        name: '硫酸一班AB套',
        description: '硫酸一班AB套'
    },
    {
        id: 'liusuanyiban_abfengji',
        name: '硫酸一班AB套风机房',
        description: '硫酸一班AB套风机房'
    },
    {
        id: 'liusuanyiban_c',
        name: '硫酸一班C套', 
        description: '硫酸一班C套'
    },
    {
        id: 'laorongliu',
        name: '老熔硫',
        description: '老熔硫'
    },
    {
        id: 'zhiliuban',
        name: '制硫班',
        description: '制硫班'
    },
    {
        id: 'liusuanyiban_jifang',
        name: '硫酸一班机房',
        description: '硫酸一班机房'
    },
    {
        id: 'liusuanerban_yurefadian',
        name: '硫酸二班余热发电',
        description: '硫酸二班余热发电'
    },
    {
        id: 'liusuanerban_yuyafadian',
        name: '硫酸二班余压发电', 
        description: '硫酸二班余压发电'
    },
    {
        id: 'liusuanerban_xunhuanshui',
        name: '硫酸二班循环水',
        description: '硫酸二班循环水'
    },
    {
        id: 'liusuanerban_ab',
        name: '硫酸二班AB套',
        description: '硫酸二班AB套'
    },
    {
        id: 'liusuanerban_abfengji',
        name: '硫酸二班AB套风机房',
        description: '硫酸二班AB套风机房'
    },
    {
        id: 'liusuanerban_guanqu',
        name: '硫酸二班稀酸罐区',
        description: '硫酸二班稀酸罐区'
    },
    {
        id: 'linsuanyiban_nongsuo1',
        name: '磷酸一班浓缩一', 
        description: '磷酸一班浓缩一'
    },
    {
        id: 'linsuanyiban_nongsuo2',
        name: '磷酸一班浓缩二',
        description: '磷酸一班浓缩二'
    },
    {
        id: 'fuyan',
        name: '氟盐',
        description: '氟盐'
    },
    {
        id: 'linsuanyiban_jifang',
        name: '磷酸一班机房',
        description: '磷酸一班机房'
    },
    {
        id: 'linsuanyiban_gh',
        name: '磷酸一班浓缩GH套',
        description: '磷酸一班浓缩GH套'
    },
    {
        id: 'linsuanyiban_guolv1',
        name: '磷酸一班过滤一', 
        description: '磷酸一班过滤一'
    },
    {
        id: 'linsuanyiban_guolv2',
        name: '磷酸一班过滤二',
        description: '磷酸一班过滤二'
    },
    {
        id: 'linsuanyiban_dianhuishou',
        name: '碘回收',
        description: '碘回收'
    },
    {
        id: 'linsuanerban_guolv12',
        name: '磷酸二班过滤一二',
        description: '磷酸二班过滤一二'
    },
    {
        id: 'linsuanerban_nongsuo1',
        name: '磷酸二班浓缩一',
        description: '磷酸二班浓缩一'
    },
    {
        id: 'linsuanerban_nongsuo2',
        name: '磷酸二班浓缩二', 
        description: '磷酸二班浓缩二'
    },
    {
        id: 'yuanliao_1',
        name: '原料一',
        description: '原料一'
    },
    {
        id: 'fuxuan',
        name: '浮选',
        description: '浮选'
    },
    {
        id: 'yuanliao_2',
        name: '原料二',
        description: '原料二'
    },
    {
        id: 'taociguolv_3',
        name: '三期陶瓷过滤',
        description: '三期陶瓷过滤'
    },
    {
        id: 'tuoyanshui',
        name: '脱盐水',
        description: '脱盐水'
    },
    {
        id: 'tuoyanshui_reshuifadian',
        name: '脱盐水热水发电',
        description: '脱盐水热水发电'
    },
    {
        id: 'dcp',
        name: 'DCP',
        description: 'DCP'
    },
    {
        id: 'xinwushuizhan',
        name: '新污水站',
        description: '新污水站'
    },
    {
        id: 'shengchanshuichang',
        name: '生产水厂',
        description: '生产水厂'
    },
    {
        id: 'liulinjifang',
        name: '硫磷综合楼机房',
        description: '硫磷综合楼机房'
    }
];

// 根据ID获取地点信息
function getLocationById(locationId){
    // 先尝试精确匹配
    let location = LOCATIONS.find(loc => loc.id === locationId);

    // 如果没找到，尝试模糊匹配（处理大小写问题）
    if (!location) {
        location = LOCATIONS.find(loc => 
            loc.id.toLowerCase() === locationId.toLowerCase()
        );
    }

    // 如果还没找到，尝试包含匹配
    if (!location) {
        location = LOCATIONS.find(loc => 
            locationId.toLowerCase().includes(loc.id.toLowerCase()) ||
            loc.name.includes(locationId)
        );
    }

    return location || {
        id: 'unknown',
        name: '未知地点：' + locationId,
        description: '请检查地点参数',
        contactPerson: '管理员',
        contactPhone: '00000000000'
    };
}

// 获取所有地点
function getAllLocations(){
    return LOCATIONS;
}

function setupLocation() {
    const urlParams = new URLSearchParams(window.location.search);
    const locationId = urlParams.get('location');
    
    console.log('URL参数:', window.location.search);
    console.log('获取到的location参数:', locationId);
    
    if (!locationId) {
        console.error('未找到location参数');
        document.getElementById('locationDisplay').textContent = '参数错误：未找到地点信息';
        document.getElementById('locationDisplay').style.color = 'red';
        return;
    }
    
    const location = getLocationById(locationId);
    
    if (location.id === 'unknown') {
        console.error('未知地点ID:', locationId);
        document.getElementById('locationDisplay').textContent = '参数错误：未知地点';
        document.getElementById('locationDisplay').style.color = 'red';
        return;
    }
    // 设置地点信息
    document.getElementById('location').value = location.id;
    document.getElementById('locationName').value = location.name;
    document.getElementById('locationDisplay').textContent = location.name;

    // 设置对接人员信息（自动填写且不可更改）
    document.getElementById('contactPerson').value = location.contactPerson;
    document.getElementById('contactPerson').readonly = true;
    document.getElementById('contactPerson').style.background = '#f5f5f5';
    document.getElementById('contactPerson').style.color = '#666';

    // 存储对接人员电话用于弹窗显示
    document.getElementById('contactPerson').setAttribute('data-contact-phone', location.contactPhone);
    
    if (location.description) {
        document.getElementById('locationDisplay').title = location.description;
    }
    
    console.log('成功设置地点:', location.name);
    console.log('对接人员:', location.contactPerson, '联系电话:', location.contactPhone);
}

function getLocationById(locationId) {
    // 先尝试精确匹配
    let location = LOCATIONS.find(loc => loc.id === locationId);
    
    // 如果没找到，尝试模糊匹配（处理大小写问题）
    if (!location) {
        location = LOCATIONS.find(loc => 
            loc.id.toLowerCase() === locationId.toLowerCase()
        );
    }
    
    // 如果还没找到，尝试包含匹配
    if (!location) {
        location = LOCATIONS.find(loc => 
            locationId.toLowerCase().includes(loc.id.toLowerCase()) ||
            loc.name.includes(locationId)
        );
    }
    
    return location || {
        id: 'unknown',
        name: '未知地点：' + locationId,
        description: '请检查地点参数'
    };
}

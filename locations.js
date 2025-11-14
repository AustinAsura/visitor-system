// locations.js - 5个地点配置
const LOCATIONS = [
    {
        id: 'Dianchiyian',
        name: '电池一铵',
        description: '电池一铵IO室'
    },
    {
        id: 'Liananyiban',
        name: '磷铵一班', 
        description: '磷铵一班IO室'
    },
    {
        id: 'Linanerban_1',
        name: '磷铵二班一系列',
        description: '磷铵二班一系列'
    },
    {
        id: 'Linanerban_2',
        name: '磷铵二班二系列',
        description: '磷铵二班二系列'
    },
    {
        id: 'Liusuanjifang',
        name: '硫酸一班机房',
        description: '硫酸一班机房'
    }
];

// 根据ID获取地点信息
function getLocationById(locationId) {
    return LOCATIONS.find(loc => loc.id === locationId) || {
        id: 'unknown',
        name: '未知地点',
        description: '未知登记点'
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
    
    if (location.description) {
        document.getElementById('locationDisplay').title = location.description;
    }
    
    console.log('成功设置地点:', location.name);
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

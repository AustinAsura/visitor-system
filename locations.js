// locations.js - 地点配置
let LOCATIONS_CACHE = [];

// 根据ID获取地点信息
async function getLocationById(locationId){
    // 如果缓存为空，先获取地点信息
    if (LOCATIONS_CACHE.length === 0) {
        await loadLocations();
    }
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
        contactPhone: '00000000000',
        enabled: false
    };
}

// 获取所有地点
async function getAllLocations(){
    if (LOCATIONS_CACHE.length === 0) {
        await loadLocations();
    }
    return LOCATIONS_CACHE;
}

// 加载地点信息
async function loadLocations() {
    try {
        LOCATIONS_CACHE = await getLocations();
    } catch (error) {
        console.error('加载地点信息失败:', error);
        LOCATIONS_CACHE = [];
    }
}

// 设置地点信息（用于登记页面）
async function setupLocation() {
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
    
    const location = await getLocationById(locationId);
    
    if (location.id === 'unknown') {
        console.error('未知地点ID:', locationId);
        document.getElementById('locationDisplay').textContent = '参数错误：未知地点';
        document.getElementById('locationDisplay').style.color = 'red';
        return;
    }

    if (!location.enabled) {
        console.error ('地点已禁用:', locationId);
        document.getElementById('locationDisplay').textContent = '错误：该地点已禁用';
        document.getElementById('locationDisplay').style.color = 'red';
        return;
    }
    
    // 设置地点信息
    document.getElementById('location').value = location.id;
    document.getElementById('locationName').value = location.name;
    document.getElementById('locationDisplay').textContent = location.name;

    // 设置对接人员信息（自动填写且不可更改）
    document.getElementById('contactPerson').value = location.contactPerson || '管理员';
    document.getElementById('contactPerson').readOnly = true;

    // 存储对接人员电话用于弹窗显示
    document.getElementById('contactPerson').setAttribute('data-contact-phone', location.contactPhone || '00000000000');
    
    if (location.description) {
        document.getElementById('locationDisplay').title = location.description;
    }
    
    console.log('成功设置地点:', location.name);
    console.log('对接人员:', location.contactPerson, '联系电话:', location.contactPhone);
}

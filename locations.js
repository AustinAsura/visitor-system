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
        name: '磷铵二班',
        description: '磷铵二班一系列'
    },
    {
        id: 'Linanerban_2',
        name: '磷铵二班',
        description: '磷铵二班二系列'
    },
    {
        id: 'Liusuanjifang',
        name: '硫酸一班',
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

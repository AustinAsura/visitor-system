// locations-config.js - 动态地点配置管理器

(function(){
    'use strict';

    // 检查是否已经存在 LocationManager
    if (window.LocationManager){
        console.warn('LocationManager 已经存在，跳过重复定义');
        return;
    }


    class LocationManager{
        constructor(){
            this.locations = this.loadLocations();
        }

        // 从本地存储或默认配置加载地点
        loadLocations(){
            // 尝试从本地存储加载
            const savedLocations = localStorage.getItem('visitor_locations');
            if (savedLocations){
                try {
                    return JSON.parse(savedLocations);
                } catch (error){
                    console.error('解析保存的地点配置失败:', error);
                }
            }

            // 返回默认的地点配置
            return {
                // 装置保运部
                'Bangongloujifang': '办公楼机房',

                // 磷铵运行部
                'Linanyiban_dianchiyian': '磷铵一班电池一铵I/O室',
                'Linanyiban_A': '磷铵一班A系列',
                'Linanyiban_B': '磷铵一班B系列',
                'Linanerban_1': '磷铵二班一系列',
                'Linanerban_2': '磷铵二班二系列',
                'Linansanban': '磷铵二班C系列(30万吨)',
                'Linanerban_guanqu': '磷铵二班浓酸罐区I/O室',
                'Linansiban_1': '磷铵四班一系列',
                'Linansiban_2': '磷铵四班二系列',
                'Linansiban_guanqu': '磷铵四班罐区I/O室',
                'Gonganban': '供氨班氨站I/O室',

                // 硫酸运行部
                'Liusuanyiban_yurefadian12': '硫酸一班余热发电1#2#机组I/O室',
                'Liusuanyiban_yurefadian3': '硫酸一班余热发电3#机组I/O室',
                'Liusuanyiban_AB': '硫酸一班AB套',
                'Liusuanyiban_ABfengji': '硫酸一班AB套风机房I/O室',
                'Liusuanyiban_C': '硫酸一班C套',
                'Laorongliu': '老熔硫',
                'Zhiliuban': '制硫班',
                'Liusuanyiban_jifang': '硫酸一班机房',
                'Liusuanerban_yurefadian': '硫酸二班余热发电I/O室',
                'Liusuanerban_yuyafadian': '硫酸二班余压发电',
                'Liusuanerban_xunhuanshui': '硫酸二班循环水I/O室',
                'Liusuanerban_AB': '硫酸二班AB套IO室',
                'Liusuanerban_ABfengji': '硫酸二班AB套风机房I/O室',
                'Liusuanerban_guanqu': '硫酸二班稀酸罐区I/O室',

                // 磷酸运行部
                'Linsuanyiban_nongsuo1': '磷酸一班浓缩一',
                'Linsuanyiban_nongsuo2': '磷酸一班浓缩二',
                'Fuyan': '氟盐',
                'Linsuanyiban_jifang': '磷酸一班机房',
                'Linsuanyiban_GH': '磷酸一班浓缩GH套I/O室',
                'Linsuanyiban_guolv1': '磷酸一班过滤一',
                'Linsuanyiban_guolv2': '磷酸一班过滤二',
                'Linsuanyiban_dianhuishou': '磷酸一班碘回收',
                'Linsuanerban_guolv12': '磷酸二班过滤一二',
                'Linsuanerban_nongsuo1': '磷酸二班浓缩一',
                'Linsuanerban_nongsuo2': '磷酸二班浓缩二',

                // 选矿运行部
                'Yuanliao_1': '原料一',
                'Fuxuan': '浮选',
                'Yuanliao_2': '原料二',
                'Taociguolv_3': '三期陶瓷过滤',

                // 水处理运行部
                'Tuoyanshui': '脱盐水',
                'Tuoyanshui_reshuifadian': '脱盐水热水发电I/O室',
                'DCP': 'DCP I/O室',
                'Xinwushuizhan': '新污水站',

                // 生产水厂
                'Shengchanshuichang': '生产水厂主控室',

                // 硫磷综合楼
                'Liusuanerban': '硫酸二班I/O室 ',
                'Linsuanerban': '磷酸二班I/O室 ',
            };
        }

        // 获取所有地点
        getAllLocations(){
            return this.locations;
        }

        // 根据ID获取地点名称
        getLocationName(id){
            if (!id) return '未知地点';
            return this.locations[id] || '未知地点 (${id})';
        }

        // 检查地点是否存在
        locationExists(id){
            return this.locations.has0wnProperty(id);
        }

        // 添加新地点
        addLocation(id, name){
            this.locations[id] = name;
            this.savedLocations();
            return true;
        }

        // 保存地点配置
        saveLocations(){
            localStorage.setItem('visitor_locations', JSON.stringify(this.loadLocations));
        } 

        // 获取地点ID列表（用于筛选)
        getLocationIds(){
            return Object.keys(this.locations);
        }
    }

    // 创建全局实例
    window.LocationManager = LocationManager;
    window.locationManager = new LocationManager();
})

// leancloud-config.js - 增强版
const LEANCLOUD_CONFIG = {
    appId: 'iVlcwZY4Ujnw9eJFpkh9II9n-gzGzoHsz',
    appKey: 'jsbPoK06f1ojXGX6eXYkpeCq',
    serverURL: 'https://ivlcwzy4.lc-cn-n1-shared.com'
};

// 全局缓存变量
let CACHED_LOCATIONS = [];
let CACHED_ADMINS = [];
let CACHE_TIMESTAMP = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5分钟缓存

// 初始化LeanCloud
function initLeanCloud() {
    if (typeof AV === 'undefined') {
        console.error('LeanCloud SDK未加载');
        return false;
    }
    
    try {
        AV.init(LEANCLOUD_CONFIG);
        console.log('LeanCloud初始化成功');
        return true;
    } catch (error) {
        console.error('LeanCloud初始化失败:', error);
        return false;
    }
}

// 从LeanCloud获取地点配置
async function getLocationsFromCloud() {
    try {
        const query = new AV.Query('LocationConfig');
        query.ascending('order');
        query.ascending('name');
        const locations = await query.find();

        return locations.map (loc => ({
            id: loc.get('locationId'),
            name: loc.get('locationName'),
            description: loc.get('description'),
            contactPerson: loc.get('contactPerson'),
            contactPhone: loc.get('contactPhone'),
            order: loc.get('order') || 0,
            enabled: loc.get('enabled') !== false
        }));
    } catch (error) {
        console.error ('获取地点配置失败:', error);
        return [];
    }
}

// 获取地点信息（带缓存）
async function getLocations() {
    const now = Date.now();

    // 如果缓存未过期，直接返回缓存数据
    if (CACHED_LOCATIONS.length > 0 && (now - CACHE_TIMESTAMP) < CACHE_DURATION){
        return CACHED_LOCATIONS;
    }

    try {
        CACHED_LOCATIONS = await getLocationsFromCloud();
        CACHE_TIMESTAMP = now;

        // 如果从云端获取失败，使用默认配置作为后备
        if (CACHED_LOCATIONS.length === 0) {
            CACHED_LOCATIONS = getDefaultLocations();
        }

        return CACHED_LOCATIONS;
    } catch (error) {
        console.error('获取地点信息失败:', error);
        return getDefaultLocations();
    }
}

// 默认地点配置（后备）
function getDefaultLocations(){
    return [
        {
            id: 'bangongloujifang',
            name: '办公楼机房',
            description: '办公楼机房',
            contactPerson: '吴应胤',
            contactPhone : '15985364725',
            enabled: true
        },
        {
            id: 'linanyiban_dianchiyian',
            name: '电池一铵', 
            description: '电池一铵',
            contactPerson: '吴应胤',
            contactPhone : '15985364725',
            enabled: true
        },
        {
        id: 'linanyiban_a',
        name: '磷铵一班A系列',
        description: '磷铵一班A系列',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linanyiban_b',
        name: '磷铵一班B系列',
        description: '磷铵一班B系列',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linanerban_1',
        name: '磷铵二班一系列',
        description: '磷铵二班一系列',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linanerban_2',
        name: '磷铵二班二系列',
        description: '磷铵二班二系列',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linansanban',
        name: '30万吨', 
        description: '30万吨',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linanerban_guanqu',
        name: '磷铵二班浓酸罐区',
        description: '磷铵二班浓酸罐区',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linansiban_1',
        name: '磷铵四班一系列',
        description: '磷铵四班一系列',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linansiban_2',
        name: '磷铵四班二系列',
        description: '磷铵四班二系列',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linansiban_guanqu',
        name: '磷铵四班浓酸罐区',
        description: '磷铵四班浓酸罐区',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'gonganban',
        name: '供氨班氨站', 
        description: '供氨班氨站',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'liusuanyiban_yurefadian12',
        name: '余热发电1#2#机组',
        description: '余热发电1#2#机组',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'liusuanyiban_yurefadian3',
        name: '余热发电3#机组',
        description: '余热发电3#机组',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'liusuanyiban_ab',
        name: '硫酸一班AB套',
        description: '硫酸一班AB套',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'liusuanyiban_abfengji',
        name: '硫酸一班AB套风机房',
        description: '硫酸一班AB套风机房',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'liusuanyiban_c',
        name: '硫酸一班C套', 
        description: '硫酸一班C套',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'laorongliu',
        name: '老熔硫',
        description: '老熔硫',
        contactPerson: '余海森',
        contactPhone : '15329636526',
        enabled: true
    },
    {
        id: 'zhiliuban',
        name: '制硫班',
        description: '制硫班',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'liusuanyiban_jifang',
        name: '硫酸一班机房',
        description: '硫酸一班机房',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'liusuanerban_yurefadian',
        name: '硫酸二班余热发电',
        description: '硫酸二班余热发电',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'liusuanerban_yuyafadian',
        name: '硫酸二班余压发电', 
        description: '硫酸二班余压发电',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'liusuanerban_xunhuanshui',
        name: '硫酸二班循环水',
        description: '硫酸二班循环水',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'liusuanerban_ab',
        name: '硫酸二班AB套',
        description: '硫酸二班AB套',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'liusuanerban_abfengji',
        name: '硫酸二班AB套风机房',
        description: '硫酸二班AB套风机房',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'liusuanerban_guanqu',
        name: '硫酸二班稀酸罐区',
        description: '硫酸二班稀酸罐区',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linsuanyiban_nongsuo1',
        name: '磷酸一班浓缩一', 
        description: '磷酸一班浓缩一',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linsuanyiban_nongsuo2',
        name: '磷酸一班浓缩二',
        description: '磷酸一班浓缩二',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'fuyan',
        name: '氟盐',
        description: '氟盐',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linsuanyiban_jifang',
        name: '磷酸一班机房',
        description: '磷酸一班机房',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linsuanyiban_gh',
        name: '磷酸一班浓缩GH套',
        description: '磷酸一班浓缩GH套',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linsuanyiban_guolv1',
        name: '磷酸一班过滤一', 
        description: '磷酸一班过滤一',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linsuanyiban_guolv2',
        name: '磷酸一班过滤二',
        description: '磷酸一班过滤二',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linsuanyiban_dianhuishou',
        name: '碘回收',
        description: '碘回收',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linsuanerban_guolv12',
        name: '磷酸二班过滤一二',
        description: '磷酸二班过滤一二',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linsuanerban_nongsuo1',
        name: '磷酸二班浓缩一',
        description: '磷酸二班浓缩一',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'linsuanerban_nongsuo2',
        name: '磷酸二班浓缩二', 
        description: '磷酸二班浓缩二',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'yuanliao_1',
        name: '原料一',
        description: '原料一',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'fuxuan',
        name: '浮选',
        description: '浮选',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'yuanliao_2',
        name: '原料二',
        description: '原料二',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'taociguolv_3',
        name: '三期陶瓷过滤',
        description: '三期陶瓷过滤',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'tuoyanshui',
        name: '脱盐水',
        description: '脱盐水',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'tuoyanshui_reshuifadian',
        name: '脱盐水热水发电',
        description: '脱盐水热水发电',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'dcp',
        name: 'DCP',
        description: 'DCP',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'xinwushuizhan',
        name: '新污水站',
        description: '新污水站',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'shengchanshuichang',
        name: '生产水厂',
        description: '生产水厂',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    },
    {
        id: 'liulinjifang',
        name: '硫磷综合楼机房',
        description: '硫磷综合楼机房',
        contactPerson: '吴应胤',
        contactPhone : '15985364725',
        enabled: true
    }
    ];
}

// 从LeanCloud获取管理员账号
async function getAdminUsersFromCloud() {
    try {
        const query = new AV.Query('AdminUser');
        query.equalTo('enabled', true);
        query.ascending('username');
        const admins = await query.find();

        return admins.map(admin => ({
            username: admin.get('username'),
            password: admin.get('password'),
            name: admin.get('displayName') || admin.get('username'),
            role: admin.get('role') || 'admin'
        }));
    } catch (error) {
        console.error('获取管理员账号失败:', error);
        return [];
    }
}

// 获取管理员账号（带缓存）
async function getAdminUsers() {
    const now = Date.now();

    if (CACHED_ADMINS.length > 0 && (now - CACHE_TIMESTAMP) < CACHE_DURATION) {
        return CACHED_ADMINS;
    }

    try {
        CACHED_ADMINS = await getAdminUsersFromCloud();
        CACHE_TIMESTAMP = now;

        // 如果没有管理员，创建默认管理员
        if (CACHED_ADMINS.length === 0) {
            CACHED_ADMINS = [{
                username: 'admin',
                password: 'admin123',
                name: '系统管理员',
                role: 'superadmin'
            }];
        }

        return CACHED_ADMINS;
    } catch (error) {
        console.error ('获取管理员账号失败:', error);
        return [{
            username: 'admin',
            password: 'admin123',
            name: '系统管理员',
            role: 'superadmin'
        }];
    }
}

// 清除缓存
function clearCache() {
    CACHED_LOCATIONS = [];
    CACHED_ADMINS = [];
    CACHE_TIMESTAMP = 0;
}

// 提交访客信息
async function submitVisitorInfo(visitorData) {
    try {
        if (!AV) {
            throw new Error('LeanCloud SDK未加载');
        }

        const VisitorRecord = AV.Object.extend('VisitorRecord');
        const record = new VisitorRecord();
        
        // 设置必填字段
        record.set('company', visitorData.company || '');
        record.set('name', visitorData.name || '');
        record.set('idCard', visitorData.idCard || '');
        record.set('visitorCount', parseInt(visitorData.visitorCount) || 1);
        record.set('visitTime', new Date(visitorData.visitTime));
        record.set('visitPurpose', visitorData.visitPurpose || '');
        record.set('phone', visitorData.phone || '');
        record.set('contactPerson', visitorData.contactPerson || '');
        
        // 自动获取的字段
        record.set('location', visitorData.location || '');
        record.set('locationName', visitorData.locationName || '');
        record.set('ipAddress', visitorData.ipAddress || '');
        record.set('submitTime', new Date());
        
        // 保存到LeanCloud
        const result = await record.save();
        
        return {
            success: true,
            message: '信息提交成功！',
            recordId: result.id
        };
        
    } catch (error) {
        console.error('提交失败:', error);
        return {
            success: false,
            message: '提交失败: ' + (error.message || '网络错误')
        };
    }
}

// 获取访客记录
async function getVisitorRecords(filters = {}) {
    try {
        const query = new AV.Query('VisitorRecord');
        
        // 应用筛选条件
        if (filters.location && filters.location !== 'all') {
            query.equalTo('location', filters.location);
        }
        
        if (filters.date) {
            const startDate = new Date(filters.date);
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 1);
            
            query.greaterThanOrEqualTo('submitTime', startDate);
            query.lessThan('submitTime', endDate);
        }
        
        if (filters.search) {
            const searchQuery = new AV.Query('VisitorRecord');
            searchQuery.contains('name', filters.search);
            
            const phoneQuery = new AV.Query('VisitorRecord');
            phoneQuery.contains('phone', filters.search);
            
            const companyQuery = new AV.Query('VisitorRecord');
            companyQuery.contains('company', filters.search);
            
            query._orQuery([searchQuery, phoneQuery, companyQuery]);
        }
        
        // 按提交时间倒序排列
        query.descending('submitTime');
        
        // 分页
        const page = filters.page || 1;
        const limit = filters.limit || 50;
        query.limit(limit);
        query.skip((page - 1) * limit);
        
        const records = await query.find();
        
        return records.map(record => ({
            id: record.id,
            submitTime: record.get('submitTime'),
            company: record.get('company'),
            name: record.get('name'),
            idCard: record.get('idCard'),
            visitorCount: record.get('visitorCount'),
            visitTime: record.get('visitTime'),
            visitPurpose: record.get('visitPurpose'),
            phone: record.get('phone'),
            contactPerson: record.get('contactPerson'),
            location: record.get('location'),
            locationName: record.get('locationName'),
            ipAddress: record.get('ipAddress')
        }));
        
    } catch (error) {
        console.error('获取记录失败:', error);
        return [];
    }
}

// 获取统计信息
async function getStats() {
    try {
        // 总记录数
        const totalQuery = new AV.Query('VisitorRecord');
        const totalCount = await totalQuery.count();
        
        // 今日记录数
        const todayQuery = new AV.Query('VisitorRecord');
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        todayQuery.greaterThanOrEqualTo('submitTime', today);
        const todayCount = await todayQuery.count();
        
        // 获取所有地点
        const locations = await getLocations();
        
        return {
            totalRecords: totalCount,
            todayRecords: todayCount,
            locationCount: locations.length
        };
        
    } catch (error) {
        console.error('获取统计失败:', error);
        return {
            totalRecords: 0,
            todayRecords: 0,
            locationCount: 0
        };
    }
}

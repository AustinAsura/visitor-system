// leancloud.js - LeanCloud配置和数据操作
// 请替换为您的实际配置
const LEANCLOUD_CONFIG = {
    appId: 'iVlcwZY4Ujnw9eJFpkh9II9n-gzGzoHsz',
    appKey: 'jsbPoK06f1ojXGX6eXYkpeCq',
    serverURL: 'https://ivlcwzy4.lc-cn-n1-shared.com'
};

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
        record.set('purpose', visitorData.purpose || '');
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
            purpose: record.get('purpose'),
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
        
        return {
            totalRecords: totalCount,
            todayRecords: todayCount
        };
        
    } catch (error) {
        console.error('获取统计失败:', error);
        return {
            totalRecords: 0,
            todayRecords: 0
        };
    }
}
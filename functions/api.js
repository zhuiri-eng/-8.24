// 最简单的测试函数 - 无依赖版本

exports.handler = async (event, context) => {
    try {
        console.log('收到请求:', event.path);
        
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                success: true,
                message: 'Netlify Functions 运行正常！',
                timestamp: new Date().toISOString(),
                path: event.path
            })
        };
        
    } catch (error) {
        console.error('处理请求异常:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
                message: error.message
            })
        };
    }
};

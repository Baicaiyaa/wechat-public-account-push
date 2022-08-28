export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx809b039eec16a38e",
    // 公众号appSecret
    appSecret: "9973b5205bdea125285d0aa5b7875f06",
    // 模板消息id
    templateId: "IZbtSpTWMBVx2kYE_InhkGGL2q_5g56fU-rLxZNrgK8",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oaicv5hidYdlYdxoi32ciK5tuyZs","oaicv5v_y4K5_Q0kmdpzxEY9TRgU"],
     
    // 信息配置
    // 所在省份
    province: "江西",
    // 所在城市
    city: "上饶",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "豆沙包", "year": "2002", "date": "06-13", "type": 'new'},
      {"name": "大白菜", "year": "1999", "date": "05-20", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2017-08-11",
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

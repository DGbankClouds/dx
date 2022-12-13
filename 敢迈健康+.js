
/**
 * 微信小程序：敢迈健康+
 * 抓包：post请求 https://api.digital4danone.com.cn/healthyaging/danone/wx/config/eventReport 
 * 里面的body和X-Access-Token
 * 变量格式 export gmjkbody = {"XXXX","XXX","XXXX"}
 * 变量格式 export gmjktoken = 你的X-Access-Token
 * cron ： 0 30 8 * * *     一天跑一次
 * 小程序任务要求：改成这四个 记录便便  起床喝杯水  按时吃饭  按时睡觉
 */
​
const $ = Env('敢迈健康+');
const notify = $.isNode() ? require('./sendNotify') : '';      // 这里是 node（青龙属于node环境）通知相关的
const Notify = 0; //0为关闭通知，1为打开通知,未添加
const debug = 0; //0为关闭调试，1为打开调试,默认为0
//////////////////////
let gmjktoken = process.env.gmjktoken;
let gmjkbody = process.env.gmjkbody;
let gmjktokenArr = [];
let data = '';
let msg = '';
let Taskback1 = 0;
let Taskback2 = 0;
let Taskback3 = 0;
let Taskback4 = 0;
let Taskid1 = '';
let Taskid2 = '';
let Taskid3 = '';
let Taskid4 = '';
let ruleId1 = '';
let ruleId2 = '';
let ruleId3 = '';
let ruleId4 = '';
​
​
!(async () => {
 
    if (!(await Envs()))    //多账号分割 判断变量是否为空  初步处理多账号
        return;
    else {
 
        console.log(`小飞棍来咯  当前版本号：V.0.0.3 `);
        console.log(`任务更新：优化自动获取任务ID项`);
        console.log(`小程序任务要求：改成这四个 记录便便  按时吃饭  按时睡觉  起床喝杯水`);
        console.log(`脚本库：http://www.holyxie.com/`);    
        console.log(`\n\n=========================================    \n脚本执行 - 北京时间(UTC+8)：${new Date(
            new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 +
            8 * 60 * 60 * 1000).toLocaleString()} \n=========================================\n`);
 
        console.log(`\n=================== 共找到 ${gmjktokenArr.length} 个账号 ===================`)
         
        for (let index = 0; index < gmjktokenArr.length; index++) {
 
 
            let num = index + 1
            console.log(`\n========= 开始【第 ${num} 个账号】=========\n`)
            data = gmjktokenArr[index].split('&');    

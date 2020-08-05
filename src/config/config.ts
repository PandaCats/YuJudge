/*
 * File: config.ts
 * Description: 全局配置相关
 * Created: 2020-7-18
 * Author: yuzhanglong
 * Email: yuzl1123@163.com
 */

// request的响应时间最大值
export const TIME_OUT: number = 5000;

// 服务器的baseUrl
export const BASE_URL: string = "http://localhost:8080";

// 提交界面中单页的数据量
export const SUBMISSION_SINGLE_PAGE_SIZE: number = 15;

// 查看当前提交轮询任务间隔时间，单位为毫秒
export const SUBMISSION_REQUEST_TASK_TIME = 4000;

// TOKEN 存储键
export const TOKEN = "token";

// 文件上传baseUrl
export const UPLOAD_SERVER_BASE_URL = "http://up-z2.qiniup.com";

// 文件下载路径
export const DOWNLOAD_SERVER_BASE_URL = "http://cdn.yuzzl.top";
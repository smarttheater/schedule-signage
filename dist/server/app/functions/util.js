"use strict";
/**
 * 共通
 * @namespace services.util
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @memberof services.util
 * @enum DIGITS
 * @type number
 */
var DIGITS;
(function (DIGITS) {
    DIGITS[DIGITS["02"] = -2] = "02";
    DIGITS[DIGITS["03"] = -3] = "03";
    DIGITS[DIGITS["08"] = -8] = "08";
})(DIGITS = exports.DIGITS || (exports.DIGITS = {}));
/**
 * 環境
 * @memberof services.util
 * @enum ENV
 * @type string
 */
var ENV;
(function (ENV) {
    /**
     * 開発
     */
    ENV["Development"] = "development";
    /**
     * テスト
     */
    ENV["Test"] = "test";
    /**
     * 本番
     */
    ENV["Production"] = "production";
})(ENV = exports.ENV || (exports.ENV = {}));
/**
 * HTMLエスケープ
 * @memberof services.util
 * @function escapeHtml
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
    const change = (match) => {
        const changeList = {
            '&': '&amp;',
            "'": '&#x27;',
            '`': '&#x60;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;',
        };
        return changeList[match];
    };
    return str.replace(/[&'`"<>]/g, change);
}
exports.escapeHtml = escapeHtml;
/**
 * カンマ区切りへ変換
 * @memberof services.util
 * @function formatPrice
 * @param {number} price
 * @returns {string}
 */
function formatPrice(price) {
    return String(price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}
exports.formatPrice = formatPrice;
/**
 * ベース64エンコード
 * @memberof services.util
 * @function bace64Encode
 * @param {string} str
 * @returns {string}
 */
function bace64Encode(str) {
    return new Buffer(str).toString('base64');
}
exports.bace64Encode = bace64Encode;
/**
 * ベース64デコード
 * @memberof services.util
 * @function base64Decode
 * @param {string} str
 * @returns {string}
 */
function base64Decode(str) {
    return new Buffer(str, 'base64').toString();
}
exports.base64Decode = base64Decode;
/**
 * プロジェクト情報取得
 */
function getProject(params) {
    const projects = JSON.parse(process.env.PROJECTS);
    return projects.find((p) => {
        return params.projectName === undefined ? p.PROJECT_ID === params.projectId : p.PROJECT_ID === params.projectId && p.PROJECT_NAME === params.projectName;
    });
}
exports.getProject = getProject;
/**
 * UUIDv4の生成
 */
function generateUuid() {
    let chars = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split('');
    for (let i = 0, len = chars.length; i < len; i++) {
        switch (chars[i]) {
            case 'x':
                chars[i] = Math.floor(Math.random() * 16).toString(16);
                break;
            case 'y':
                chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                break;
        }
    }
    return chars.join('');
}
exports.generateUuid = generateUuid;

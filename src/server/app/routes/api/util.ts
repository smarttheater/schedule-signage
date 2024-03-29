/**
 * API
 */
import * as debug from 'debug';
import * as express from 'express';
import * as httpStatus from 'http-status';
import * as moment from 'moment';
const log = debug('application: /api/util');
const router = express.Router();

/**
 * プロジェクト設定取得
 */
router.post('/project', async (req, res) => {
    log('project', req.body);
    if (process.env.PROJECT_ID !== undefined && process.env.PROJECT_ID !== '') {
        res.json({
            projectId: process.env.PROJECT_ID,
            projectName: process.env.PROJECT_NAME,
            storageUrl: process.env.PROJECT_STORAGE_URL,
            gmoTokenUrl: process.env.GMO_TOKEN_URL,
            env: process.env.APP_ENV,
        });
        return;
    }
    res.json({
        storageUrl: process.env.STORAGE_URL,
        gmoTokenUrl: process.env.GMO_TOKEN_URL,
        env: process.env.APP_ENV,
    });
});

/**
 * サーバータイム取得
 */
router.get('/serverTime', (_req, res) => {
    log('serverTime');
    res.json({ date: moment().toISOString() });
});

/**
 * バージョン取得
 */
router.get('/version', (_req, res) => {
    log('version');
    res.json({ version: process.env.VERSION });
});

/**
 * ヘルスチェック
 */
router.get('/health', (_req, res) => {
    res.status(httpStatus.OK);
    res.send(`${httpStatus.OK} ${httpStatus[200]}`);
});

/**
 * 設定取得
 */
router.get('/config', (_req, res) => {
    res.json({
        STATUS_THRESHOLD_CROWDED: process.env.STATUS_THRESHOLD_CROWDED,
        STATUS_THRESHOLD_OUTOFDATE: process.env.STATUS_THRESHOLD_OUTOFDATE,
        SMART_THEATER_API_ENDPOINT: process.env.SMART_THEATER_API_ENDPOINT,
        BUILD_TIMESTAMP: process.env.BUILD_TIMESTAMP,
        ENV_LAST_MODIFIED: process.env.ENV_LAST_MODIFIED,
        APP_ENV: process.env.APP_ENV,
        PROJECT_ID: process.env.PROJECT_ID,
    });
});

export const utilRouter = router;

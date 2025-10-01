import { Locator } from '@playwright/test';
import { logger } from './LoggerHelper';

export class UIHelper {
    static async safeClick(locator: Locator, timeout: number, warningMsg: string): Promise<void> {
        try {
            await locator.waitFor({ state: 'visible', timeout });
            await locator.click();
            logger.info(`Clicked element: ${locator.toString()}`);
        } catch {
            logger.warn(warningMsg);
        }
    }

}

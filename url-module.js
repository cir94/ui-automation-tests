import 'dotenv/config';

export const envs = {
    uiTestingUrl: new URL(process.env.TESTING_URL),
};
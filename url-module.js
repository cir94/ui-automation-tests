import 'dotenv/config';

// The purpose for this URL Module is to ensure that, if any test is using this, that the URL entered is an authentic one, catching any incorrect URLs that could be passed through tests

export const envs = {
  uiTestingUrl: new URL(process.env.TESTING_URL),
};

import { Platform } from 'reactxp';
import { PlatformType } from 'reactxp/dist/common/Types';

const os: PlatformType = Platform.getType();

type MyPlatformType = 'mobile' | 'web' | 'desktop';

const platform: MyPlatformType = os === ('android' || os === 'ios') ? 'mobile' : os === 'web' ? 'web' : 'desktop';

export { os, platform };

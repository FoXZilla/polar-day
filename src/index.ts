import Timeline from './Timeline';
import { createDraw } from 'short-night/common/functions';
import * as Engine from 'short-night';

import 'short-night/styles.css';

export const draw = createDraw<Timeline, typeof Timeline>('polar-day', Timeline);
export { Engine, Timeline };

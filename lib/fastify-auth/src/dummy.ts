import type { AuthBagger } from './common.js';

import { fromExtractor } from './common.js';

// Accept a hard-coded user from the options

export type Options = {
  username: string
  groups?: string[]
  roles?: string[]
};

export const dummy: AuthBagger<Options> = ({
  username,
  groups = [],
  roles = [],
}, _fullSessions) => ({
  authenticate: fromExtractor((_) => ({
    username,
    groups,
    roles
  })),
  wantSession: false
});

export default dummy;

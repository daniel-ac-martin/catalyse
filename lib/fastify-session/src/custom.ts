import type { Session, SessionProvider, SessionData } from './common.js';

export type CustomOptions = Session;

export const customSession: SessionProvider<CustomOptions> = ({
  read,
  write
}) => ({
  read,
  write
});

export default customSession;

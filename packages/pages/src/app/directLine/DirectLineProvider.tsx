import React, { memo, type ReactNode } from 'react';

import DirectLineEmulatorProvider from './DirectLineEmulatorProvider';
import DirectLineMockBotProvider from './DirectLineMockBotProvider';

type Props = {
  children?: ReactNode | undefined;
  type?: 'abs' | 'emulator' | 'mockbot';
};

export default memo(function DirectLineProvider({ children, type }: Props) {
  return type === 'mockbot' ? (
    <DirectLineMockBotProvider>{children}</DirectLineMockBotProvider>
  ) : (
    <DirectLineEmulatorProvider>{children}</DirectLineEmulatorProvider>
  );
});

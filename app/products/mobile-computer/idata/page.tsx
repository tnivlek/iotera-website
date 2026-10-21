import IDataT5Page from './t5/page';
import { createPageMetadata } from '../../../lib/metadata';

export const metadata = createPageMetadata({
  title: 'iData T5',
  description:
    'iData T5 enterprise mobile computer with an AI scanning engine, Android 15, Wi-Fi 6, and IP67 durability.',
  path: '/products/mobile-computer/idata',
});

export default function IdataPage() {
  return <IDataT5Page />;
}

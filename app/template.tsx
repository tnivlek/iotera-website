import PageFadeIn from './components/PageFadeIn';

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageFadeIn>{children}</PageFadeIn>;
}

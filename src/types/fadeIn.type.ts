export interface FadeInProps {
  fadeIn: {
    initial: { opacity: number; y: number }
    whileInView: { opacity: number; y: number }
    viewport: { once: boolean }
    transition: { duration: number }
  }
}

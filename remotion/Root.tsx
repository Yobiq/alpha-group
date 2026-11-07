import { Composition } from "remotion"
import { HeroBackground, HERO_DURATION, HERO_FPS } from "./HeroBackground"

export const RemotionRoot = () => {
  return (
    <Composition
      id="HeroBackground"
      component={HeroBackground}
      durationInFrames={HERO_DURATION}
      fps={HERO_FPS}
      width={1920}
      height={1080}
    />
  )
}

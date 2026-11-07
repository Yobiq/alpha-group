import { Config } from "@remotion/cli/config"

Config.setVideoImageFormat("jpeg")
Config.setOverwriteOutput(true)
// H.264 MP4 is the default codec; keep broad browser support for the hero <video>.

import {sponsors} from "json-loader!yaml-loader!~/contents/sponsors.yml"
import {speakers} from "json-loader!yaml-loader!~/contents/speakers.yml"

export const state = () => ({
  sponsors,
  speakers
})

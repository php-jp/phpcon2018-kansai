import {sponsors} from "json-loader!yaml-loader!~/contents/sponsors.yml"
import {speakers} from "json-loader!yaml-loader!~/contents/speakers.yml"
import {staffs} from "json-loader!yaml-loader!~/contents/staffs.yml"

export const state = () => ({
  sponsors,
  speakers,
  staffs
})

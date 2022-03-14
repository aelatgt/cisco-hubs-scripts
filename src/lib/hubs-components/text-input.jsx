import { render } from "react-dom"
import { useRef, useState } from "react"

import "./web-layer"
import "./web-layer-events"
import "./blip-animation"

import { StickyNote } from "@/lib/react/StickyNote"
import { OffscreenInput } from "@/lib/react/OffscreenInput"

const { AFRAME } = window

AFRAME.registerComponent("text-input", {
  dependencies: ["web-layer", "web-layer-events", "blip-animation"],
  init: function () {
    const webLayer = this.el.components["web-layer"]
    const blipAnimation = this.el.components["blip-animation"]

    render(<Component onChange={(val) => console.log(val)} onFocus={() => blipAnimation.trigger()} />, webLayer.rootEl)
  },
})

function Component({ onChange, onFocus }) {
  const ref = useRef()
  const [value, setValue] = useState()
  const onChangeInner = (e) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }
  return (
    <StickyNote onClick={() => ref.current.focus()}>
      {value}
      <OffscreenInput ref={ref} onChange={onChangeInner} onFocus={onFocus} />
    </StickyNote>
  )
}

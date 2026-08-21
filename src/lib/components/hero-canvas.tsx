"use client"

import { useEffect, useRef } from "react"

const vertexShader = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const fragmentShader = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;

  float wave(vec2 p, float speed, float scale, float offset) {
    return sin(p.x * scale + p.y * (scale * .65) + u_time * speed + offset);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = uv - .5;
    p.x *= u_resolution.x / u_resolution.y;
    float t = u_time * .13;
    float field = wave(p, .7, 5.2, 0.) + wave(p, -.4, 8.0, 2.2) * .45;
    float drift = sin(length(p) * 6. + t) * .1;
    vec3 deep = vec3(.055, .13, .14);
    vec3 teal = vec3(.14, .31, .30);
    vec3 seafoam = vec3(.73, .76, .61);
    float ribbon = smoothstep(.50, .05, abs(p.y + field * .075 + drift));
    float glow = smoothstep(.8, .0, length(p - vec2(.38, -.05))) * .35;
    vec3 color = mix(deep, teal, uv.y + .22);
    color = mix(color, seafoam, ribbon * .24);
    color += seafoam * glow * .7;
    gl_FragColor = vec4(color, 1.0);
  }
`

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const gl = canvas.getContext("webgl", { alpha: false, antialias: true })
    if (!gl) return

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }
    const vert = compile(gl.VERTEX_SHADER, vertexShader)
    const frag = compile(gl.FRAGMENT_SHADER, fragmentShader)
    if (!vert || !frag) return
    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vert)
    gl.attachShader(program, frag)
    gl.linkProgram(program)
    gl.useProgram(program)

    const position = gl.getAttribLocation(program, "a_position")
    const resolution = gl.getUniformLocation(program, "u_resolution")
    const time = gl.getUniformLocation(program, "u_time")
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    )
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

    let frame = 0
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.clientWidth * dpr
      const height = canvas.clientHeight * dpr
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    const render = (milliseconds: number) => {
      resize()
      gl.uniform2f(resolution, canvas.width, canvas.height)
      gl.uniform1f(time, milliseconds / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      frame = requestAnimationFrame(render)
    }
    frame = requestAnimationFrame(render)
    return () => cancelAnimationFrame(frame)
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="hero-canvas" />
}

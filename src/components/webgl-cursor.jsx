'use client'

import React, { useEffect, useRef } from 'react'

export default function WebGLCursor() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
        if (!gl) return

        // --- Core Shaders ---
        // Vertex Shader: full screen quad
        const vs = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `
        // Fragment Shader: Glowing organic blob that follows the mouse
        const fs = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        
        // Invert Y axis for mouse because WebGL bottom is 0
        vec2 m = u_mouse / u_resolution.xy;
        m.y = 1.0 - m.y; 
        
        // Correct aspect ratio for accurate circles
        uv.x *= u_resolution.x / u_resolution.y;
        m.x *= u_resolution.x / u_resolution.y;

        // Calculate distance from pixel to mouse
        float d = length(uv - m);
        
        // Create a glow equation (inverse distance) with slight breathing logic
        float breathing = 0.015 + 0.003 * sin(u_time * 2.0);
        float glow = breathing / (d + 0.005);
        
        // Premium minimal color: Ice/Silver White with a slight cyan hue
        vec3 color = vec3(0.9, 0.95, 1.0) * glow;
        
        // Use alpha for blending over DOM
        gl_FragColor = vec4(color, glow * 0.4);
      }
    `

        // Compile Helper
        const compileShader = (type, source) => {
            const shader = gl.createShader(type)
            gl.shaderSource(shader, source)
            gl.compileShader(shader)
            return shader
        }

        const vertexShader = compileShader(gl.VERTEX_SHADER, vs)
        const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fs)

        const program = gl.createProgram()
        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)
        gl.useProgram(program)

        // Setup Geometry (2 Triangles forming a rectangle)
        const vertices = new Float32Array([
            -1, -1, 1, -1, -1, 1,
            -1, 1, 1, -1, 1, 1
        ])
        const buffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

        const posAttr = gl.getAttribLocation(program, 'position')
        gl.enableVertexAttribArray(posAttr)
        gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0)

        // Setup Uniforms
        const resUniform = gl.getUniformLocation(program, 'u_resolution')
        const mouseUniform = gl.getUniformLocation(program, 'u_mouse')
        const timeUniform = gl.getUniformLocation(program, 'u_time')

        // State bindings
        let mouseX = window.innerWidth / 2
        let mouseY = window.innerHeight / 2
        let targetX = mouseX
        let targetY = mouseY
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            gl.viewport(0, 0, canvas.width, canvas.height)
            gl.uniform2f(resUniform, canvas.width, canvas.height)
        }

        window.addEventListener('resize', resize)
        resize() // initial size

        const onMouseMove = (e) => {
            targetX = e.clientX
            targetY = e.clientY
        }
        window.addEventListener('mousemove', onMouseMove)

        const startTime = Date.now()

        // Render loop
        const render = () => {
            // Lerp (easing) per un movimento "fluido/trascinato" premium
            mouseX += (targetX - mouseX) * 0.15
            mouseY += (targetY - mouseY) * 0.15

            const time = (Date.now() - startTime) * 0.001

            gl.uniform2f(mouseUniform, mouseX, mouseY)
            gl.uniform1f(timeUniform, time)

            // Clear with transparent black
            gl.clearColor(0.0, 0.0, 0.0, 0.0)
            gl.clear(gl.COLOR_BUFFER_BIT)

            // Draw
            gl.drawArrays(gl.TRIANGLES, 0, 6)

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', onMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            // Il canvas è fissato per tutto lo schermo e "buca" gli eventi del mouse per non bloccare il click
            className="fixed inset-0 pointer-events-none z-50 w-full h-full mix-blend-screen"
        />
    )
}

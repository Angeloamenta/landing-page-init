'use client'

import React, { useEffect, useRef } from 'react'

export default function WebGLCursorPremium() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false })
        if (!gl) return

        // --- Core Shaders ---
        const vs = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

        // Fragment Shader: Il cursore definitivo, elegante e ultra-minimale.
        // Un puntino fisico netto al centro + un sottile anello che lo insegue fluidamente.
        const fs = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;        // Mouse reale istantaneo
      uniform vec2 u_mouse_lerped; // Mouse fluido interpolato
      uniform float u_velocity;    // Velocità del cursore per deformazione

      void main() {
        vec2 st = gl_FragCoord.xy;
        
        // Correggiamo le coordinate per il WebGL (origine in basso a sx)
        vec2 exactMouse = vec2(u_mouse.x, u_resolution.y - u_mouse.y);
        vec2 lerpedMouse = vec2(u_mouse_lerped.x, u_resolution.y - u_mouse_lerped.y);
        
        // 1. IL PUNTINO CENTRALE: Solido, minuscolo, ancorato al mouse reale.
        float distExact = length(st - exactMouse);
        float dotRadius = 3.0; // raggio fisso piccolo
        float coreDot = smoothstep(dotRadius + 0.5, dotRadius - 0.5, distExact);
        
        // 2. L'ANELLO ESTERNO FLUIDO: Traccia il movimento, con un tocco di eleganza.
        float distLerped = length(st - lerpedMouse);
        float ringRadius = 20.0 + (u_velocity * 0.05); // L'anello si allarga leggermente se muovi veloce
        float ringThickness = 1.0; 
        
        // Disegna una circonferenza netta
        float outerRing = smoothstep(ringRadius + ringThickness, ringRadius, distLerped);
        float innerRing = smoothstep(ringRadius, ringRadius - ringThickness, distLerped);
        float ring = (outerRing - innerRing) * 0.4; // Opacità bassa per non ostruire la vista (40%)
        
        // Uniamo puntino pieno e anello semitrasparente
        float alpha = max(coreDot, ring);
        
        // Colore Premium: Bianco panna/ghiaccio pulitissimo
        gl_FragColor = vec4(0.95, 0.95, 0.98, alpha);
      }
    `

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

        const resUniform = gl.getUniformLocation(program, 'u_resolution')
        const mouseUniform = gl.getUniformLocation(program, 'u_mouse')
        const mouseLerpUniform = gl.getUniformLocation(program, 'u_mouse_lerped')
        const velocityUniform = gl.getUniformLocation(program, 'u_velocity')

        let targetX = window.innerWidth / 2
        let targetY = window.innerHeight / 2
        let lerpedX = targetX
        let lerpedY = targetY
        let velocity = 0
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            gl.viewport(0, 0, canvas.width, canvas.height)
            gl.uniform2f(resUniform, canvas.width, canvas.height)
        }

        window.addEventListener('resize', resize)
        resize()

        const onMouseMove = (e) => {
            targetX = e.clientX
            targetY = e.clientY
        }
        window.addEventListener('mousemove', onMouseMove)

        const render = () => {
            // Lerp per il movimento ad anello ritardato
            lerpedX += (targetX - lerpedX) * 0.15
            lerpedY += (targetY - lerpedY) * 0.15

            // Calcola e applica una pseudo-velocità per espandere un pelo l'anello in movimento (effetto dinamico sottile)
            const dx = targetX - lerpedX
            const dy = targetY - lerpedY
            const currentVelocity = Math.sqrt(dx * dx + dy * dy)
            velocity += (currentVelocity - velocity) * 0.1

            gl.uniform2f(mouseUniform, targetX, targetY)
            gl.uniform2f(mouseLerpUniform, lerpedX, lerpedY)
            gl.uniform1f(velocityUniform, velocity)

            gl.clearColor(0.0, 0.0, 0.0, 0.0)
            gl.clear(gl.COLOR_BUFFER_BIT)

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
            className="fixed inset-0 pointer-events-none z-100 w-full h-full mix-blend-screen"
            style={{ cursor: "none" }} // Usa questa classe globale di CSS per nascondere il cursore default di sistema (opzionale: lo lasciamo gestire qui)
        />
    )
}

'use client'

import React, { useEffect, useRef } from 'react'

export default function WebGLCursorLines() {
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

        // Fragment Shader: Linee geometriche nette e minimaliste
        const fs = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;        // Posizione effettiva e immediata
      uniform vec2 u_mouse_lerped; // Posizione ritardata/fluida

      void main() {
        // Coordinate dei pixel in pixel effettivi (0 -> width, 0 -> height)
        vec2 st = gl_FragCoord.xy;
        
        // Invertiamo asse Y perché per WebGL l'origine (0,0) è in basso a sinistra
        vec2 exactMouse = vec2(u_mouse.x, u_resolution.y - u_mouse.y);
        vec2 lerpedMouse = vec2(u_mouse_lerped.x, u_resolution.y - u_mouse_lerped.y);
        
        // L'interazione netta principale: Crociere (Crosshair) infinite sulle X e Y
        float lineThickness = 1.0;
        float distX = abs(st.x - lerpedMouse.x);
        float distY = abs(st.y - lerpedMouse.y);
        
        // Creiamo la linea con anti-aliasing leggero
        float lineX = smoothstep(lineThickness, 0.0, distX);
        float lineY = smoothstep(lineThickness, 0.0, distY);
        
        // Combinazione delle due linee infinite (bassa opacità per eleganza)
        float crosshair = max(lineX, lineY) * 0.15;
        
        // Quadrato/Rettangolo cavo (outline) vincolato al mouse fluido
        vec2 d = abs(st - lerpedMouse);
        float maxDist = max(d.x, d.y);
        float boxSize = 12.0;         // Dimensione del mirino
        float boxThickness = 1.0;    // Spessore bordo
        
        float boxOuter = smoothstep(boxSize + 1.0, boxSize, maxDist);
        float boxInner = smoothstep(boxSize - boxThickness + 1.0, boxSize - boxThickness, maxDist);
        float hollowBox = max(0.0, boxOuter - boxInner) * 0.8;
        
        // Punto preciso infinitesimale legato al mouse VERO (nessun ritardo) per feedback fisico tattile
        float dExact = length(st - exactMouse);
        float centerDot = smoothstep(2.5, 1.5, dExact) * 0.9;
        
        // Fondiamo assieme l'estetica: linee + scatola fluida + puntino fisico
        float alpha = max(max(crosshair, hollowBox), centerDot);
        
        // Colore Bianco Puro su opacità
        gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
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

        // Setup Geometria Quad schermo intero
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
        const mouseUniform = gl.getUniformLocation(program, 'u_mouse')            // mouse vero
        const mouseLerpUniform = gl.getUniformLocation(program, 'u_mouse_lerped') // mouse interpolato

        // Stato coordinate e animazione
        let targetX = window.innerWidth / 2
        let targetY = window.innerHeight / 2
        let lerpedX = targetX
        let lerpedY = targetY
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            gl.viewport(0, 0, canvas.width, canvas.height)
            gl.uniform2f(resUniform, canvas.width, canvas.height)
        }

        window.addEventListener('resize', resize)
        resize() // Setup iniziale di res

        const onMouseMove = (e) => {
            targetX = e.clientX
            targetY = e.clientY
        }
        window.addEventListener('mousemove', onMouseMove)

        // Render loop
        const render = () => {
            // Lerping (ritardo calcolato ad ogni frame per 'lerpedX' e 'y')
            lerpedX += (targetX - lerpedX) * 0.12
            lerpedY += (targetY - lerpedY) * 0.12

            gl.uniform2f(mouseUniform, targetX, targetY)
            gl.uniform2f(mouseLerpUniform, lerpedX, lerpedY)

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
            className="fixed inset-0 pointer-events-none z-50 w-full h-full"
        />
    )
}

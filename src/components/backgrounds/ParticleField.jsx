import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function ParticleField() {
  const containerRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const T = THREE
    const accent = new T.Color('#47B3B1')
    const particleCount = 110
    const baseOpacity = 0.1

    const scene = new T.Scene()
    const camera = new T.PerspectiveCamera(
      52,
      window.innerWidth / window.innerHeight,
      0.1,
      500,
    )
    camera.position.z = 60

    const renderer = new T.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    function makeDotTex(hex) {
      const c = document.createElement('canvas')
      c.width = 64
      c.height = 64
      const ctx = c.getContext('2d')
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30)
      grad.addColorStop(0, hex)
      grad.addColorStop(0.4, hex)
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(32, 32, 30, 0, Math.PI * 2)
      ctx.fill()
      const t = new T.CanvasTexture(c)
      t.needsUpdate = true
      return t
    }

    const toCss = (c) =>
      `rgb(${Math.round(c.r * 255)},${Math.round(c.g * 255)},${Math.round(c.b * 255)})`

    const range = 90
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * range
      positions[i * 3 + 1] = (Math.random() - 0.5) * range * 0.6
      positions[i * 3 + 2] = (Math.random() - 0.5) * range * 0.7 - 6
      velocities[i * 3] = (Math.random() - 0.5) * 0.008
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005
    }

    const pGeo = new T.BufferGeometry()
    pGeo.setAttribute('position', new T.BufferAttribute(positions, 3))
    const dotTex = makeDotTex(toCss(accent))
    const pMat = new T.PointsMaterial({
      size: 1.6,
      map: dotTex,
      transparent: true,
      opacity: baseOpacity,
      sizeAttenuation: true,
      depthWrite: false,
      blending: T.AdditiveBlending,
    })
    const points = new T.Points(pGeo, pMat)
    scene.add(points)

    let mx = 0, my = 0, tx = 0, ty = 0
    const onMouseMove = (e) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 8
      ty = -(e.clientY / window.innerHeight - 0.5) * 4
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    let scrollFade = 1
    const onScroll = () => {
      const y = window.scrollY
      const h = window.innerHeight
      scrollFade = Math.max(0, 1 - y / (h * 0.55))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // Respecte la préférence « réduire les animations » : rendu statique, sans boucle
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let animId
    function tick() {
      const r = range / 2
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3]
        positions[i * 3 + 1] += velocities[i * 3 + 1]
        positions[i * 3 + 2] += velocities[i * 3 + 2]
        if (Math.abs(positions[i * 3]) > r) velocities[i * 3] *= -1
        if (Math.abs(positions[i * 3 + 1]) > r * 0.6) velocities[i * 3 + 1] *= -1
        if (Math.abs(positions[i * 3 + 2]) > r * 0.7) velocities[i * 3 + 2] *= -1
      }
      pGeo.attributes.position.needsUpdate = true

      mx += (tx - mx) * 0.05
      my += (ty - my) * 0.05
      camera.position.x = mx
      camera.position.y = my
      camera.lookAt(0, 0, 0)

      container.style.opacity = scrollFade.toFixed(3)
      renderer.render(scene, camera)
      animId = requestAnimationFrame(tick)
    }

    if (reduceMotion) {
      // Une seule frame : particules visibles mais figées
      container.style.opacity = scrollFade.toFixed(3)
      renderer.render(scene, camera)
    } else {
      tick()
    }

    // Met la boucle en pause quand l'onglet est en arrière-plan (gain CPU/GPU)
    const onVisibility = () => {
      if (reduceMotion) return
      if (document.hidden) {
        cancelAnimationFrame(animId)
        animId = null
      } else if (!animId) {
        tick()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      pGeo.dispose()
      dotTex.dispose()
      pMat.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1500 ease-out"
      style={{ opacity: visible ? 1 : 0 }}
    />
  )
}

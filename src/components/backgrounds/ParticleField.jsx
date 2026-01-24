import { useEffect, useRef } from 'react'
import {
  Group,
  MathUtils,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  TextureLoader,
  WebGLRenderer,
  BufferGeometry,
  Float32BufferAttribute,
} from 'three'

const PARTICLE_COUNT = 200
const PARTICLE_DISTANCE = 2
const PARTICLE_SIZE = 0.01

const textureDataUrl =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="white"/></svg>'

const ParticleField = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) {
      return undefined
    }

    const scene = new Scene()
    const { clientWidth: initialWidth, clientHeight: initialHeight } = container
    const startWidth = initialWidth || window.innerWidth
    const startHeight = initialHeight || window.innerHeight
    const camera = new PerspectiveCamera(
      75,
      startWidth / startHeight,
      0.8,
      1000,
    )

    camera.position.set(0.5, 0.5, 1)

    const renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(startWidth, startHeight)
    container.appendChild(renderer.domElement)

    const points = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const stride = i * 3
      points[stride] = MathUtils.randFloatSpread(PARTICLE_DISTANCE * 2)
      points[stride + 1] = MathUtils.randFloatSpread(PARTICLE_DISTANCE * 2)
      points[stride + 2] = MathUtils.randFloatSpread(PARTICLE_DISTANCE * 2)
    }

    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new Float32BufferAttribute(points, 3))

    const textureLoader = new TextureLoader()
    const circleTexture = textureLoader.load(textureDataUrl)

    const pointMaterial = new PointsMaterial({
      color: 0x335654,
      size: PARTICLE_SIZE,
      map: circleTexture,
      alphaTest: 0.01,
      transparent: true,
    })

    const particlePoints = new Points(geometry, pointMaterial)
    const group = new Group()
    group.add(particlePoints)
    scene.add(group)

    const mouse = { x: 0, y: 0 }
    const handleMouseMove = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    const handleResize = () => {
      const bounds = container.getBoundingClientRect()
      const width = bounds.width
      const height = bounds.height
      if (width === 0 || height === 0) {
        return
      }
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    let frameId
    const animate = () => {
      const bounds = container.getBoundingClientRect()
      if (bounds.width === 0 || bounds.height === 0) {
        frameId = requestAnimationFrame(animate)
        return
      }
      const ratioX = ((mouse.x - bounds.left) / bounds.width - 0.5) * 2
      const ratioY = ((mouse.y - bounds.top) / bounds.height - 0.5) * 2

      group.rotation.y = ratioX * Math.PI * 0.5
      group.rotation.x = ratioY * Math.PI * 0.5

      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)

      frameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      pointMaterial.dispose()
      circleTexture.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-screen overflow-hidden"
      aria-hidden="true"
    />
  )
}

export default ParticleField

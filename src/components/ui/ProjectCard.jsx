import React from 'react'
import { ExternalLink, TrendingUp, BookOpen } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    imageUrl,
    technologies,
    demoUrl,
    githubUrl,
    ExtraUrl1,
    ExtraUrl2,
    demoName,
  } = project
  return (
    <div className="group border-primary/15 hover:border-primary/20 relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white/5 transition-all duration-300">
      <div className="relative h-48 shrink-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Category - top left */}
        <div className="absolute top-4 left-4">
          <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Links - bottom right */}
        <div className="absolute right-4 bottom-4 flex items-center gap-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130"
            >
              <ExternalLink className="h-full w-full text-white/80" />
              <span className="pointer-events-none absolute top-1/2 right-full mr-2 -translate-y-1/2 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                {demoName}
              </span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130"
            >
              <FiGithub className="h-5 w-5 text-white/80" />
              <span className="pointer-events-none absolute top-1/2 right-full mr-2 -translate-y-1/2 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                Voir le code
              </span>
            </a>
          )}
          {ExtraUrl1?.url && (
            <a
              href={ExtraUrl1.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130"
            >
              <BookOpen className="h-full w-full text-white/80" />
              <span className="pointer-events-none absolute top-1/2 right-full mr-2 -translate-y-1/2 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                {ExtraUrl1.title}
              </span>
            </a>
          )}
          {ExtraUrl2?.url && (
            <a
              href={ExtraUrl2.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130"
            >
              <BookOpen className="h-full w-full text-white/80" />
              <span className="pointer-events-none absolute top-1/2 right-full mr-2 -translate-y-1/2 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                {ExtraUrl2.title}
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      {/* Category header */}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1">
          {/*   <h3 className="mb-2 text-lg font-semibold text-white transition-colors duration-300">
            {title}
          </h3> */}
          <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="bg-primary/50 h-1 w-6 rounded-full"></div>
            <h3 className="text-xl font-medium text-white uppercase">
              {title}
            </h3>
          </div>
          <p className="line-clamp-3 text-justify text-sm leading-normal text-white/70">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2  pt-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-primary bg-primary/10 border-primary/20 hover:bg-primary/20 rounded-lg border px-2.5 py-1 text-xs font-medium transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

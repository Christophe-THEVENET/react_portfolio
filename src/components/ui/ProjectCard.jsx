import React from 'react'
import { ExternalLink, Github, TrendingUp, BookOpen } from 'lucide-react'

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    imageUrl,
    technologies,
    demoUrl,
    githubUrl,
    metrics,
    ExtraUrl1,
    titleExtraUrl,
    ExtraUrl2,
    titleExtraUrl2,
    demoName,
  } = project
  return (
    <div className="group border-primary/10 hover:border-primary/30 relative flex h-full flex-col rounded-2xl border bg-white/5 transition-all duration-300 overflow-hidden">
      <div className="relative h-48 shrink-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Category - top left */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium text-white bg-black/60 backdrop-blur-sm border border-white/20 rounded-full">{project.category}</span>
        </div>

        {/* Links - bottom right */}
        <div className="absolute bottom-4 right-4 flex items-center gap-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/tooltip relative flex h-6 w-6 items-center justify-center transition-all duration-300 hover:scale-130"
            >
              <ExternalLink className="h-full w-full text-white/80" />
              <span className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
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
              <Github className="h-full w-full text-white/80" />
              <span className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
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
              <span className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
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
              <span className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2 rounded bg-white/90 px-2 py-1 text-xs font-medium whitespace-nowrap text-black opacity-0 shadow-lg transition-all duration-200 group-hover/tooltip:opacity-100">
                {ExtraUrl2.title}
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2  transition-colors duration-300">{title}</h3>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-3">{description}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
          {technologies.map((tech, i) => (
            <span key={i} className="px-2.5 py-1 text-xs font-medium text-primary bg-primary/10 rounded-lg border border-primary/20 hover:bg-primary/20 transition-all duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

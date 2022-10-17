import React from 'react'

import type { Project } from '..'

const contextProject = React.createContext<Project | null>(null)
export const ProjectContextProvider = contextProject.Provider
export const ProjectContextConsumer = contextProject.Consumer

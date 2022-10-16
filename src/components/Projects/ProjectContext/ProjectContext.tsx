import React from 'react'

export interface Project {
	name: string
	GitHub?: URL
	deployment: URL
	description: React.ReactElement | string
	motivation: React.ReactElement | string
}

const contextProject = React.createContext<Project | null>(null)
export const ProjectContextProvider = contextProject.Provider
export const ProjectContextConsumer = contextProject.Consumer

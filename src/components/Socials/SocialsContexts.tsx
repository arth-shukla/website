import React from 'react'

interface SocialInterface {
	include: boolean
	text: boolean
	textOverride?: string
}

export interface SocialsContext {
	Email: SocialInterface
	GitHub: SocialInterface
	LinkedIn: SocialInterface
	CV: SocialInterface
}

const contextSocials = React.createContext<SocialsContext | null>(null)
export const SocialsContextProvider = contextSocials.Provider
export const SocialsContextConsumer = contextSocials.Consumer

import React from 'react'

interface SocialInterface {
	include: boolean
	text: boolean
	textOverride?: string
}

export interface SocialsContext {
	CV: SocialInterface
	Scholar: SocialInterface
	GitHub: SocialInterface
	LinkedIn: SocialInterface
	Email: SocialInterface
}

const contextSocials = React.createContext<SocialsContext | null>(null)
export const SocialsContextProvider = contextSocials.Provider
export const SocialsContextConsumer = contextSocials.Consumer

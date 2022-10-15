import React from 'react'

interface SocialInterface {
	include: boolean
	text: boolean
}

export interface SocialsContext {
	Email: SocialInterface
	GitHub: SocialInterface
	LinkedIn: SocialInterface
	PhoneNumber: SocialInterface
}

const contextSocials = React.createContext<SocialsContext | null>(null)
export const SocialsContextProvider = contextSocials.Provider
export const SocialsContextConsumer = contextSocials.Consumer

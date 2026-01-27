import { reviewHandlers } from '@/mocks/handlers/reviewHandlers'
import { testHandlers } from '@/mocks/handlers/testHandlers'

export const handlers = [...testHandlers, ...reviewHandlers]

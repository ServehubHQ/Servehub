import { useEffect } from 'react'

interface FlexEvent extends Event {
  [key: string]: any
}

type EventHandler<TEvent extends Event> = (event: TEvent) => void
type Element = HTMLElement | Window

export function useEventListener<TEvent extends Event>(
  eventType: string,
  element: Element,
  handler: EventHandler<TEvent>,
): void
export function useEventListener<TEvent extends Event>(
  eventType: string,
  handler: EventHandler<TEvent>,
  nothing?: never,
): void
export function useEventListener<TEvent extends Event>(
  arg1: string,
  arg2: EventHandler<TEvent> | Element,
  arg3?: EventHandler<TEvent>,
): void {
  const [eventType, element, handler] =
    typeof arg3 !== 'undefined'
      ? [arg1, arg2 as Element, arg3 as EventHandler<Event>]
      : typeof window !== 'undefined'
      ? [arg1, window, arg2 as EventHandler<Event>]
      : [arg1, null, arg2 as EventHandler<Event>]
  useEffect(() => {
    element?.addEventListener(eventType, handler)

    return () => {
      element?.removeEventListener(eventType, handler)
    }
  }, [eventType, element, handler])
}

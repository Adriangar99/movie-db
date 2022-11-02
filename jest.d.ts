import 'jest-extended'

declare global {
	namespace NodeJS {
		interface Global {
			document: Document
			window: Window
			navigator: Navigator
			ResizeObserver: any
			DOMRect: any
		}
	}
}

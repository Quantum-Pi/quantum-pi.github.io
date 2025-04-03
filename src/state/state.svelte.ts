import type { Snippet } from "svelte"

type State = {
    imagePreview?: Snippet
}

export const globalState = $state<State>({
    imagePreview: undefined
})
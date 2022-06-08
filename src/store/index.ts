import { createStore } from 'ym-web';

export const coreStore = createStore(
    {
        setCssName: (cssName: string) => ({ cssName }),
    },
    { cssName: '' }
)